
  (function () {
    // Scroll-spy: highlight the active persona link in the sticky nav
    var links = Array.prototype.slice.call(document.querySelectorAll('.fag-nav__link'));
    var sections = links.map(function (l) { return document.querySelector(l.getAttribute('href')); }).filter(Boolean);
    if ('IntersectionObserver' in window && sections.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            var id = e.target.id;
            links.forEach(function (l) { l.classList.toggle('is-active', l.getAttribute('href') === '#' + id); });
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
      sections.forEach(function (s) { io.observe(s); });
    }

    // Sticky-nav-aware anchor scroll: land the kicker below the nav. Measures actual nav
    // height (floor 112 if not rendered yet) so desktop + mobile offset correctly even when
    // the menu wraps. In-page clicks scroll instant (matching cross-page landings) to avoid
    // smooth-scroll overshoot; cross-page re-adjusts on load + 300ms (font reflow).
    var navEl = document.querySelector('.fag-nav');
    var reduceMo = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function navH() { var h = navEl ? navEl.offsetHeight : 0; return (h < 80 ? 112 : h) + 96; }
    function anchorTarget(id) { var s = document.getElementById(id); return s ? (s.querySelector('.fag-sec__kicker') || s) : null; }
    function jumpTo(id, smooth) {
      var el = anchorTarget(id); if (!el) return;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - navH() - 24, behavior: (smooth && !reduceMo) ? 'smooth' : 'auto' });
    }
    Array.prototype.forEach.call(document.querySelectorAll('.fag-nav__link[href^="#"]'), function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href').slice(1);
        if (!document.getElementById(id)) return;
        e.preventDefault(); jumpTo(id, false);
        if (history.pushState) history.pushState(null, '', '#' + id);
        // re-adjust ONLY if the kicker ended up under the nav (mobile URL-bar shift); if it
        // landed correctly, skip — avoids a layout-shift re-scroll past the header on desktop.
        setTimeout(function () {
          var el = anchorTarget(id); if (!el) return;
          if (el.getBoundingClientRect().top < navH() + 8) jumpTo(id, false);
        }, 300);
      });
    });
    function adjustToHash() { if (location.hash) { var id = location.hash.slice(1); if (document.getElementById(id)) jumpTo(id, false); } }
    if (document.readyState === 'complete') adjustToHash(); else window.addEventListener('load', adjustToHash);
    setTimeout(adjustToHash, 300);

    // Share widget — copy link, email, LinkedIn, X
    var shareWidgets = document.querySelectorAll('[data-fag-share]');
    Array.prototype.forEach.call(shareWidgets, function (widget) {
      var btn = widget.querySelector('.fag-share__btn');
      var menu = widget.querySelector('.fag-share__menu');
      if (!btn || !menu) return;
      function closeShare() { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); }
      function openShare() { menu.hidden = false; btn.setAttribute('aria-expanded', 'true'); }
      btn.addEventListener('click', function (e) { e.stopPropagation(); menu.hidden ? openShare() : closeShare(); });
      document.addEventListener('click', function (e) { if (!widget.contains(e.target)) closeShare(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeShare(); });
      menu.addEventListener('click', function (e) { if (e.target === menu) { closeShare(); } });
      var anchor = widget.getAttribute('data-fag-share-anchor');
      var shareUrl = anchor ? (location.origin + location.pathname + '#' + anchor) : location.href;
      var u = encodeURIComponent(shareUrl);
      var t = encodeURIComponent('LUCI Field Activation Guide');
      var mail = widget.querySelector('[data-fag-share-mail]');
      if (mail) mail.href = 'mailto:?subject=' + t + '&body=' + u;
      var li = widget.querySelector('[data-fag-share-li]');
      if (li) li.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + u;
      var x = widget.querySelector('[data-fag-share-x]');
      if (x) x.href = 'https://twitter.com/intent/tweet?url=' + u + '&text=' + t;
      var copy = widget.querySelector('[data-fag-share-copy]');
      if (copy) copy.addEventListener('click', function () {
        var label = copy.textContent;
        var done = function () { copy.textContent = 'Copied!'; setTimeout(function () { copy.textContent = label; }, 1800); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(shareUrl).then(done).catch(function () { window.prompt('Copy this link:', shareUrl); });
        } else { window.prompt('Copy this link:', shareUrl); }
      });
    });
  })();
