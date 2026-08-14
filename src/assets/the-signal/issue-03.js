
  (function () {
    document.querySelectorAll('[data-field-slider]').forEach(function (el) {
      var range = el.querySelector('.field-slider__range');
      if (!range) return;
      function set(v) {
        el.style.setProperty('--pos', v + '%');
        var tBefore = el.querySelector('.field-slider__tag--before');
        var tAfter = el.querySelector('.field-slider__tag--after');
        if (tBefore) tBefore.style.opacity = v > 6 ? 1 : 0;
        if (tAfter) tAfter.style.opacity = v < 94 ? 1 : 0;
      }
      set(range.value);
      range.addEventListener('input', function () { set(range.value); });
      function pointTo(clientX) {
        var r = el.getBoundingClientRect();
        var pct = Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100));
        range.value = pct;
        set(pct);
      }
      el.addEventListener('pointerdown', function (e) {
        pointTo(e.clientX);
        try { el.setPointerCapture(e.pointerId); } catch (err) {}
      });
      el.addEventListener('pointermove', function (e) {
        if (e.buttons === 1) pointTo(e.clientX);
      });
    });
  })();
