/**
 * main.js — Portfolio Logic for Tay Jun Long
 * Handles: theme switching, scroll reveals, skill bars,
 *          custom cursor, mobile nav, BGM, contact form.
 */

/* ── State ───────────────────────────────────────────────── */
let mode = 'fe';

/* ── DOM Ready ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  initReveal();
  initBars();
  initCursor();
  initMobileNav();
  initBGM();
  initContactForm();
  setContactLinkStyles('fe');
  setSendBtnStyle('fe');
});

/* ══════════════════════════════════════════════════════════
   PROFILE SWITCHING
══════════════════════════════════════════════════════════ */
function switchTo(m) {
  if (mode === m) return;
  mode = m;

  // Swap body class (drives all CSS theme changes)
  document.body.className = m;

  // Toggle heroes
  document.getElementById('fe-hero').style.display = m === 'fe' ? 'block' : 'none';
  document.getElementById('ai-hero').style.display  = m === 'ai' ? 'block' : 'none';

  // Render dynamic content
  renderAll();

  // Update UI chrome
  setContactLinkStyles(m);
  setSendBtnStyle(m);

  // Re-trigger reveal & bars after content swap
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(r => r.classList.remove('in'));
    setTimeout(() => initReveal(), 60);
    document.querySelectorAll('.sk-bar').forEach(b => (b.style.width = '0'));
    setTimeout(() => initBars(), 220);
  }, 80);
}

/* ══════════════════════════════════════════════════════════
   RENDER FUNCTIONS
══════════════════════════════════════════════════════════ */
function renderAll() {
  renderAbout();
  renderSkills();
  renderProjects();
}

function renderAbout() {
  const d = DATA[mode];
  document.getElementById('about-title').textContent = d.aboutTitle;
  document.getElementById('about-p1').textContent    = d.p1.replace(/\s+/g, ' ').trim();
  document.getElementById('about-p2').textContent    = d.p2.replace(/\s+/g, ' ').trim();

  const pillsEl = document.getElementById('about-pills');
  pillsEl.innerHTML = d.pills
    .map(p => `<span class="pill">${p}</span>`)
    .join('');
}

function renderSkills() {
  const d = DATA[mode];
  document.getElementById('skills-title').textContent = d.skillsTitle;

  const grid = document.getElementById('sk-grid');
  grid.innerHTML = d.skills.map(s => `
    <div class="sk-card reveal">
      ${mode === 'fe'
        ? `<div class="sk-ico-wrap">${s.ico}</div>`
        : `<div class="sk-ico">${s.ico}</div>`
      }
      <div class="sk-nm">${s.nm}</div>
      <div class="sk-lv">${s.lv}</div>
      <div class="sk-bg"><div class="sk-bar" data-w="${s.w}"></div></div>
    </div>
  `).join('');
}

function renderProjects() {
  const d = DATA[mode];
  document.getElementById('proj-title').textContent = d.projTitle;

  const grid = document.getElementById('pj-grid');
  grid.innerHTML = d.projects.map(p => `
    <div class="pj-card reveal">
      <div class="pj-thumb" style="background:${p.bg}">${p.emoji}</div>
      <div class="pj-body">
        <div class="pj-tags">
          ${p.tags.map(t => `<span class="pj-tag">${t}</span>`).join('')}
        </div>
        <div class="pj-title">${p.title}</div>
        <div class="pj-desc">${p.desc}</div>
        <a href="${p.link}" target="_blank" rel="noopener" class="pj-link">
          View Project →
        </a>
      </div>
    </div>
  `).join('');
}

/* ══════════════════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════════════════ */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════════════════
   SKILL BARS
══════════════════════════════════════════════════════════ */
function initBars() {
  document.querySelectorAll('.sk-bar').forEach(bar => {
    const targetWidth = bar.getAttribute('data-w');
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          bar.style.width = targetWidth;
          obs.unobserve(bar);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(bar);
  });
}

/* ══════════════════════════════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════════════════════════════ */
function initCursor() {
  const cur  = document.getElementById('cur');
  const ring = document.getElementById('ring');
  let mx = 0, my = 0, rx = 0, ry = 0;

  // Skip on touch devices
  if (window.matchMedia('(hover: none)').matches) return;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cur.style.left = mx + 'px';
    cur.style.top  = my + 'px';
  });

  (function animateRing() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  // Expand ring on interactive elements
  const interactives = 'a, button, .pj-card, .sk-card, input, textarea';
  document.addEventListener('mouseover', e => {
    if (e.target.matches(interactives) || e.target.closest(interactives)) {
      ring.style.width  = '52px';
      ring.style.height = '52px';
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.matches(interactives) || e.target.closest(interactives)) {
      ring.style.width  = '34px';
      ring.style.height = '34px';
    }
  });
}

/* ══════════════════════════════════════════════════════════
   MOBILE NAVIGATION
══════════════════════════════════════════════════════════ */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
}

function closeMobileNav() {
  document.getElementById('mobile-nav').classList.remove('open');
}

/* ══════════════════════════════════════════════════════════
   BGM (Background Music)
   Replace the Web Audio tone with your actual .mp3 file:
   1. Add your bgm.mp3 to the root folder
   2. Uncomment the Audio lines below and remove the oscillator code
══════════════════════════════════════════════════════════ */
function initBGM() {
  const btn = document.getElementById('bgm');
  let playing = true;
  let ctx = null, osc = null, gain = null;

  const audio = new Audio('bgm.mp3');
  audio.loop   = true;
  audio.volume = 0.25;
  btn.addEventListener('click', () => {
     if (!playing) { audio.play(); btn.textContent = '♬'; playing = true; }
     else          { audio.pause(); btn.textContent = '♪'; playing = false; }
   });
  
}

/* ══════════════════════════════════════════════════════════
   CONTACT FORM
   For real email sending, wire this up to:
   - EmailJS (free tier, no backend): https://emailjs.com
   - Formspree: https://formspree.io
   - Your own backend endpoint
══════════════════════════════════════════════════════════ */
function initContactForm() {
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (!form) return;

  form.addEventListener('submit', handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault();
  const status = document.getElementById('form-status');
  const btn    = document.getElementById('send-btn');

  // Collect form values
  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    status.textContent = '⚠ Please fill in all required fields.';
    status.style.color = '#ff6b6b';
    return;
  }

  // ── Wire up your email service here ──────────────────
  // Example with EmailJS:
  // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', { name, email, subject, message })
  //   .then(() => { status.textContent = '✓ Message sent!'; })
  //   .catch(() => { status.textContent = '✗ Something went wrong. Try emailing directly.'; });

  // Placeholder response (remove once you wire up a real service)
  btn.disabled = true;
  btn.textContent = 'Sending...';
  setTimeout(() => {
    status.textContent = '✓ Thanks! I\'ll reply within 24 hours.';
    status.style.color = mode === 'fe' ? '#5b4cdb' : '#39FF14';
    btn.textContent = 'Send Message ✦';
    btn.disabled = false;
    document.getElementById('contact-form').reset();
  }, 1200);
}

/* ══════════════════════════════════════════════════════════
   UI CHROME HELPERS
══════════════════════════════════════════════════════════ */
function setContactLinkStyles(m) {
  const gh = document.getElementById('gh-link');
  const li = document.getElementById('li-link');
  if (!gh || !li) return;

  if (m === 'fe') {
    gh.style.cssText = 'font-family:DM Mono,monospace;font-size:.75rem;text-decoration:none;padding:.5rem 1.2rem;border-radius:50px;border:2px solid rgba(91,76,219,0.3);color:#5b4cdb;transition:all .3s';
    li.style.cssText = 'font-family:DM Mono,monospace;font-size:.75rem;text-decoration:none;padding:.5rem 1.2rem;border-radius:50px;background:rgba(91,76,219,0.08);color:#5b4cdb;border:1px solid rgba(91,76,219,.2);transition:all .3s';
  } else {
    gh.style.cssText = 'font-family:DM Mono,monospace;font-size:.75rem;text-decoration:none;padding:.5rem 1.2rem;border-radius:3px;border:1px solid rgba(57,255,20,0.3);color:#39FF14;transition:all .3s';
    li.style.cssText = 'font-family:DM Mono,monospace;font-size:.75rem;text-decoration:none;padding:.5rem 1.2rem;border-radius:3px;background:rgba(57,255,20,0.08);color:#39FF14;border:1px solid rgba(57,255,20,.2);transition:all .3s';
  }
}

function setSendBtnStyle(m) {
  const btn = document.getElementById('send-btn');
  if (!btn) return;
  // CSS handles most of the styling; just ensure the text is reset
  btn.textContent = 'Send Message ✦';
}
