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
  initAIHeroExtras();
  setContactLinkStyles('fe');
  setSendBtnStyle('fe');
});

/* ══════════════════════════════════════════════════════════
   PROFILE SWITCHING
══════════════════════════════════════════════════════════ */
function switchTo(m) {
  if (mode === m) return;
  mode = m;

  // Swap body class — this drives ALL CSS theme changes including hero show/hide
  document.body.className = m;

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

  const aiCarousel = document.getElementById('ai-carousel-side');
  if (aiCarousel) {
    if (mode === 'ai') {
      aiCarousel.style.display = 'flex'; 
    } else {
      aiCarousel.style.display = 'none';
    }
  }
  const feCarousel = document.getElementById('fe-carousel-side');
  if (feCarousel) {
    if (mode === 'fe') {
      feCarousel.style.display = 'block'; 
    } else {
      feCarousel.style.display = 'none';
    }
  }
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
  let playing = false;
  let ctx = null, osc = null, gain = null;

  // ── Option A: Use a real .mp3 file (recommended) ──────
  // const audio = new Audio('bgm.mp3');
  // audio.loop   = true;
  // audio.volume = 0.25;
  // btn.addEventListener('click', () => {
  //   if (!playing) { audio.play(); btn.textContent = '♬'; playing = true; }
  //   else          { audio.pause(); btn.textContent = '♪'; playing = false; }
  // });

  // ── Option B: Web Audio tone placeholder (default) ────
  btn.addEventListener('click', () => {
    if (!playing) {
      ctx  = new (window.AudioContext || window.webkitAudioContext)();
      gain = ctx.createGain();
      gain.gain.value = 0.035;
      gain.connect(ctx.destination);

      osc = ctx.createOscillator();
      osc.type      = mode === 'fe' ? 'sine' : 'triangle';
      osc.frequency.value = mode === 'fe' ? 261 : 185;
      osc.connect(gain);
      osc.start();

      btn.textContent = '♬';
      playing = true;
    } else {
      if (osc)  { osc.stop(); osc = null; }
      if (ctx)  { ctx.close(); ctx = null; }
      btn.textContent = '♪';
      playing = false;
    }
  });
}

/* ══════════════════════════════════════════════════════════
   STACKED PHOTO CAROUSEL
══════════════════════════════════════════════════════════ */
/*const CAROUSEL_LABELS = [
  'Hello, I\'m Jun1! 👋',
  'Hello, I\'m Jun2! 👋',
  'Hello, I\'m Jun3! 👋',
];*/

const carouselState = {
  'fe-hero': { current: 0 },   // FE hero page carousel
  'fe':      { current: 0 },   // About section carousel
  'ai':      { current: 0 },   // AI carousel (if used)
};

function rotateCarousel(id, dir) {
  const state = carouselState[id];
  if (!state) return;

  // All FE carousels use .photo-card, AI uses .ai-photo-card
  const selector = id === 'ai' ? '.ai-photo-card' : '.photo-card';
  const el = document.getElementById(id + '-carousel');
  if (!el) return;

  const cards = [...el.querySelectorAll(selector)];
  const n = cards.length;
  state.current = (state.current - dir + n) % n;

  cards.forEach(card => {
    const idx = parseInt(card.getAttribute('data-idx'));
    const pos = (idx - state.current + n) % n;
    card.setAttribute('data-pos', pos);
  });

  // Update dots — dot container id = id + '-dots'
  const dotsEl = document.getElementById(id + '-dots');
  if (dotsEl) {
    [...dotsEl.querySelectorAll('.carr-dot')].forEach((dot, i) => {
      dot.classList.toggle('active', i === state.current);
    });
  }

  // Update label for fe-hero carousel
  if (id === 'fe-hero') {
    const lbl = document.getElementById('fe-hero-label');
    if (lbl) lbl.textContent = CAROUSEL_LABELS[state.current] || '';
  }
  // Update label for about carousel
  if (id === 'fe') {
    const lbl = document.getElementById('fe-card-label');
    if (lbl) lbl.textContent = CAROUSEL_LABELS[state.current] || '';
  }
}

/* ── Universal Live Clock ─────────────────────────────── */
function initClocks() {
  function tick() {
    // Generate the time string once
    const timeString = new Date().toLocaleTimeString('en-MY', {
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hour12: false, timeZone: 'Asia/Kuala_Lumpur'
    }) + ' MYT';

    // Apply it to both clocks if they exist
    const feClock = document.getElementById('fe-clock');
    const aiClock = document.getElementById('ai-clock');
    
    if (feClock) feClock.textContent = timeString;
    if (aiClock) aiClock.textContent = timeString;
  }
  
  tick();
  setInterval(tick, 1000);
}

/* ── Coordinate Tracker ──────────────────────── */
function initCoordTracker(heroId, coordsId) {
  const hero = document.getElementById(heroId);
  const coords = document.getElementById(coordsId);

  if (!hero || !coords) return;

  hero.addEventListener('mousemove', e => {
    // Stop calculating if this hero is currently hidden
    if (hero.offsetWidth === 0) return;

    const r  = hero.getBoundingClientRect();
    const dx = Math.round(e.clientX - r.left - r.width  / 2);
    const dy = Math.round(e.clientY - r.top  - r.height / 2);
    
    coords.textContent = 'dx: ' + dx + ', dy: ' + dy;
  });
}


  /* ── Draggable JUN ──────────────────────────────────── */
function createDraggableWord(dragId, tipNameId, tipStatId, coordsId) {
  const junEl   = document.getElementById(dragId);
  const tipName = document.getElementById(tipNameId);
  const tipStat = document.getElementById(tipStatId);
  const coords  = document.getElementById(coordsId);
  
  if (!junEl) return;

  const DRAG_MSGS = [
    'Aligning to Grid...',
    "Don't move my layout!",
    'Grid integrity: FAILING',
    'CSS is crying rn.'
  ];
  const SNAP_MSGS = [
    'Again? We just fixed this.',
    'Back where you belong.',
    'Snapping back...'
  ];

  let dragging = false;
  let ox = 0, oy = 0, cx = 0, cy = 0;

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function moveTips(px, py) {
    [tipName, tipStat].forEach((t, i) => {
      if (!t) return;
      t.style.display = 'block';
      t.style.left = (px + 15) + 'px';
      t.style.top  = (py + (i * 25)) + 'px';
    });
  }
  
  function hideTips() {
    if (tipName) tipName.style.display = 'none';
    if (tipStat) tipStat.style.display = 'none';
  }

  // --- MOUSE EVENTS --- //
  
  // 1. The mousedown starts on the specific element
  junEl.addEventListener('mousedown', e => {
    // Only allow dragging if this element is actually visible!
    // (Prevents the hidden hero from trying to drag)
    if (junEl.offsetParent === null) return; 

    dragging = true;
    ox = e.clientX - cx;
    oy = e.clientY - cy;
    junEl.classList.add('is-dragging');
    junEl.classList.remove('is-snapping');
    if (tipStat) tipStat.textContent = pick(DRAG_MSGS);
    moveTips(e.clientX, e.clientY);
    e.preventDefault();
  });

  // 2. We keep mousemove on the document so it tracks if you drag fast
  document.addEventListener('mousemove', e => {
    if (!dragging) return; // If THIS specific word isn't dragging, ignore it!
    cx = e.clientX - ox;
    cy = e.clientY - oy;
    junEl.style.transform = `translate(${cx}px,${cy}px)`;
    if (coords) coords.textContent = 'dx: ' + Math.round(cx) + ', dy: ' + Math.round(cy);
    moveTips(e.clientX, e.clientY);
  });

  // 3. Mouseup stops THIS specific word
  document.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false;
    cx = 0; cy = 0;
    junEl.classList.remove('is-dragging');
    junEl.classList.add('is-snapping');
    junEl.style.transform = 'translate(0px,0px)';
    if (tipStat) tipStat.textContent = pick(SNAP_MSGS);
    if (coords) coords.textContent = 'dx: 0, dy: 0';
    setTimeout(() => { junEl.classList.remove('is-snapping'); hideTips(); }, 900);
  });

  // --- TOUCH EVENTS (Mobile) --- //
  junEl.addEventListener('touchstart', e => {
    if (junEl.offsetParent === null) return;
    const t = e.touches[0];
    dragging = true;
    ox = t.clientX - cx;
    oy = t.clientY - cy;
    junEl.classList.add('is-dragging');
    junEl.classList.remove('is-snapping');
    if (tipStat) tipStat.textContent = pick(DRAG_MSGS);
    moveTips(t.clientX, t.clientY);
    e.preventDefault();
  }, { passive: false });

  document.addEventListener('touchmove', e => { // Changed to document
    if (!dragging) return;
    const t = e.touches[0];
    cx = t.clientX - ox;
    cy = t.clientY - oy;
    junEl.style.transform = `translate(${cx}px,${cy}px)`;
    if (coords) coords.textContent = 'dx: ' + Math.round(cx) + ', dy: ' + Math.round(cy);
    moveTips(t.clientX, t.clientY);
    e.preventDefault();
  }, { passive: false });

  document.addEventListener('touchend', () => { // Changed to document
    if (!dragging) return;
    dragging = false;
    cx = 0; cy = 0;
    junEl.classList.remove('is-dragging');
    junEl.classList.add('is-snapping');
    junEl.style.transform = 'translate(0px,0px)';
    if (tipStat) tipStat.textContent = pick(SNAP_MSGS);
    if (coords) coords.textContent = 'dx: 0, dy: 0';
    setTimeout(() => { junEl.classList.remove('is-snapping'); hideTips(); }, 900);
  });
}

// Activate Frontend Dragging
createDraggableWord(
  'fe-jun-drag', 
  'fe-drag-tooltip-name', 
  'fe-drag-tooltip-status', 
  'fe-coords'
);

// Activate AI Dragging
createDraggableWord(
  'ai-jun-drag', 
  'ai-drag-tooltip-name', 
  'ai-drag-tooltip-status', 
  'ai-coords'
);

// Activate Universal Clock
initClocks();

// Activate Frontend Tracker
initCoordTracker('fe-hero', 'fe-coords');

// Activate AI Tracker
initCoordTracker('ai-hero', 'ai-coords');

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