/**
 * TriaTechNetwork - Smooth Magnetic Custom Cursor
 */
(function () {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');

  if (!dot || !ring) return;

  // Check if touch device
  if (window.matchMedia('(pointer: coarse)').matches) {
    dot.style.display = 'none';
    ring.style.display = 'none';
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function renderRing() {
    // Lerp smoothing
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

    requestAnimationFrame(renderRing);
  }
  renderRing();

  // Attach magnetic hover state to all interactive items
  const updateHoverTargets = () => {
    const targets = document.querySelectorAll(
      'a, button, input, select, textarea, .glass-panel, .talent-card, .case-card, .vetting-card, .role-choice, .location-card'
    );

    targets.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        ring.classList.add('active');
      });
      el.addEventListener('mouseleave', () => {
        ring.classList.remove('active');
      });
    });
  };

  updateHoverTargets();
  window.updateCursorTargets = updateHoverTargets;
})();
