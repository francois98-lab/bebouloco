// ─── Barre de progression de scroll ───
export function initScrollLine() {
  const el = document.getElementById('scroll-line');
  if (!el) return;
  window.addEventListener('scroll', () => {
    const max = document.body.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    el.style.width = pct + '%';
  });
}

// ─── Menu mobile (hamburger) ───
export function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ─── Bouton "retour en haut" ───
export function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ─── Animation d'apparition au scroll ───
export function observeFadeIns(selector = '.fade-in') {
  const els = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
  return observer;
}

// ─── Échappement HTML sûr (anti-XSS) ───
export function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = (str === null || str === undefined) ? '' : String(str);
  return div.innerHTML;
}

// ─── Validation d'un nom / prénom ───
export function isValidName(str) {
  return /^[\p{L}\s'-]{2,40}$/u.test(String(str).trim());
}

export function cleanInput(str, maxLen = 40) {
  return String(str).trim().replace(/\s+/g, ' ').slice(0, maxLen);
}

// ─── Accessibilité des modales : Échap, clic extérieur, focus ───
export function setupModal(overlayEl) {
  if (!overlayEl) return { open() {}, close() {} };

  let triggerEl = null;

  function onKeydown(e) {
    if (e.key === 'Escape') close();
  }

  overlayEl.addEventListener('click', (e) => {
    if (e.target === overlayEl) close();
  });

  function close() {
    overlayEl.style.display = 'none';
    document.removeEventListener('keydown', onKeydown);
    if (triggerEl) triggerEl.focus();
  }

  function open(fromEl) {
    triggerEl = fromEl || null;
    overlayEl.style.display = 'flex';
    document.addEventListener('keydown', onKeydown);
    const firstField = overlayEl.querySelector('input, button');
    if (firstField) setTimeout(() => firstField.focus(), 60);
  }

  return { open, close };
}
