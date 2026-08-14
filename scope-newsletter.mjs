// Scope a standalone newsletter page's CSS to its wrapper class so it can live inside BaseLayout.
// Usage: node scope-newsletter.mjs <sourceHtml> <wrapperClass> <outName> <canonicalPath> <title>
import postcss from 'postcss';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

const [,, src, wrap, outName, canonical, title] = process.argv;
const sel = '.' + wrap;   // CSS selector form (e.g. .hub); wrap is the bare class name for HTML matching
const NL_DIR = '/Users/janehaynie/Documents/Cursor Projects/luci-design/LUCI Systems Design System/ui_kits/newsletter';
const OUT = '/Users/janehaynie/Documents/Cursor Projects/luci-website/src/assets/the-signal';
const PAGE_DIR = '/Users/janehaynie/Documents/Cursor Projects/luci-website/src/pages/the-signal';
mkdirSync(OUT, { recursive: true });

const s = readFileSync(join(NL_DIR, src), 'utf8');

// 1. Main <style> (the one WITHOUT data-luci-fonts). Drop the data-luci-fonts block.
const styleMatch = [...s.matchAll(/<style(?![^>]*data-luci-fonts)[^>]*>([\s\S]*?)<\/style>/g)];
const css = styleMatch.map(m => m[1]).join('\n');

// 2. Body: from <article class="wrap"> to </body>, with <script> blocks pulled out.
const start = s.indexOf(`<article class="${wrap}"`);
const bodyRegion = s.slice(start, s.indexOf('</body>'));
const scripts = [...bodyRegion.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const body = bodyRegion.replace(/<script[^>]*>[\s\S]*?<\/script>/g, '').trim();

// 3. Scope the CSS
const dropExact = new Set(['html', 'body']);
function scopeSelector(s) {
  const t = s.trim();
  if (t === sel) return t;                                  // wrapper itself
  if (t.startsWith(sel + ' ') || t.startsWith(sel + '.') || t.startsWith(sel + ':')) return t;
  if (t === ':root') return sel;                            // tokens -> scoped to wrapper
  if (t === '*' || t === '*::before' || t === '*::after') return `${sel} ${t}`;  // reset scoped
  if (dropExact.has(t)) return null;                        // html/body dropped (site provides)
  return `${sel} ${t}`;                                     // prefix
}
const scoped = postcss.parse(css);
scoped.walkAtRules('font-face', r => r.remove());
scoped.walkRules(rule => {
  if (rule.parent && rule.parent.name === 'keyframes') return;
  const next = rule.selectors.map(scopeSelector);
  if (next.every(x => x === null)) { rule.remove(); return; }
  rule.selectors = next.filter(x => x !== null);
});
let scopedCss = scoped.toString();

// 4. Localize asset URLs (CDN -> site; relative assets/ -> /the-signal/assets/)
const CDN = {
  'https://cdn.prod.website-files.com/62d7d68d14611c2a31d863cd/6a1e1b1c59b507bb43a6bd65_Jane.jpeg': '/the-signal/assets/people/jane.jpeg',
  'https://cdn.prod.website-files.com/62d7d68d14611c2a31d863cd/6a1e1c7089803edcc10a8491_ameristar-logo-cropped.png': '/the-signal/assets/logos/ameristar-logo-cropped.png',
  'https://cdn.prod.website-files.com/62d7d68d14611c2a31d863cd/6a567f3e79d759f9b31ebc38_Gemini_Generated_Image_36btyu36btyu36bt.png': '/the-signal/assets/quick-tip/gemini-generated.png',
};
function localize(str) {
  for (const [k, v] of Object.entries(CDN)) str = str.split(k).join(v);
  return str.replace(/(["'(=])assets\//g, '$1/the-signal/assets/');
}
scopedCss = localize(scopedCss);
const scopedBody = localize(body);

// 4. Write fragments
writeFileSync(join(OUT, `${outName}.css`), scopedCss);
writeFileSync(join(OUT, `${outName}-body.html`), scopedBody);
if (scripts.length) writeFileSync(join(OUT, `${outName}.js`), scripts.join('\n;\n'));

// 5. Write Astro page
const depth = canonical.split('/').length - 1; // /the-signal/home -> 2
const rel = '../'.repeat(depth);
const scriptLine = scripts.length
  ? `<script is:inline set:html={nlScript} />`
  : '';
const scriptImport = scripts.length
  ? `import nlScript from '${rel}assets/the-signal/${outName}.js?raw';\n`
  : '';
const astro = `---
import BaseLayout from '${rel}layouts/BaseLayout.astro';
import { seoPages, breadcrumb } from '${rel}data/seo';
import './${rel}assets/the-signal/${outName}.css';
import nlBody from '${rel}assets/the-signal/${outName}-body.html?raw';
${scriptImport}const canonicalPath = '${canonical}';
---
<BaseLayout
  title="${title}"
  description="The Signal — LUCI Systems' customer newsletter."
  canonicalPath={canonicalPath}
  jsonLd={breadcrumb([
    { name: 'Home', path: '/' },
    { name: 'The Signal', path: '/the-signal/home' },
  ])}
  darkHeader
>
  <Fragment set:html={nlBody} />
</BaseLayout>
<style is:global>body{background:var(--navy-deep);}</style>
${scriptLine}
`;
mkdirSync(PAGE_DIR, { recursive: true });
writeFileSync(join(PAGE_DIR, `${outName}.astro`), astro);

console.log(`${outName}: css=${scopedCss.length}c body=${body.length}c scripts=${scripts.length} -> ${canonical}`);
