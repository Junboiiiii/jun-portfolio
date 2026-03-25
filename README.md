# Tay Jun Long — Portfolio

Personal portfolio website with **dual profile switching** between:
- ⚡ **Frontend Developer** — light, warm, smooth design
- 🤖 **AI Engineer** — dark, neon green, cinematic

Live: https://junboiiiii.github.io/portfolio *(update after deploying)*

---

## Project Structure

```
jun-portfolio/
├── index.html          ← Main HTML (all sections)
├── css/
│   └── style.css       ← All styles (both themes)
├── js/
│   ├── data.js         ← ✏️  YOUR CONTENT LIVES HERE
│   └── main.js         ← All JS logic
├── images/
│   └── jun.jpg         ← ✏️  Add your photo here
├── bgm.mp3             ← ✏️  Optional background music
├── .gitignore
└── README.md
```

---

## Quick Start (View Locally)

No build tools needed — it's plain HTML/CSS/JS.

### Option A — Just double-click
Double-click `index.html` → opens in your browser. Done.

### Option B — VS Code Live Server (recommended)
1. Install **VS Code** → https://code.visualstudio.com
2. Install the **Live Server** extension (search in Extensions tab)
3. Right-click `index.html` → **Open with Live Server**
4. Auto-reloads on every save ✨

---

## Personalise Your Portfolio

### 1. Update Your Content
Open `js/data.js` — everything is clearly labelled with `✏️` comments:

```js
// Skills, projects, about text — all in one place
const DATA = {
  fe: { skills: [...], projects: [...] },
  ai: { skills: [...], projects: [...] }
}
```

**To add a project:**
```js
{
  emoji: '🔥',
  bg: 'linear-gradient(135deg, #f0eeff, #e8e2ff)',   // card background
  tags: ['React', 'Tailwind'],
  title: 'My Cool Project',
  desc: 'What it does and why it matters.',
  link: 'https://github.com/Junboiiiii/my-project',   // your GitHub link
}
```

### 2. Add Your Photo
1. Place your photo in the `images/` folder and name it `jun.jpg`
2. Open `index.html` and find this block (around line 120):
```html
<!-- Replace the div below with an <img> tag once you have your photo -->
<div class="av">
  <div class="av-init">JL</div>
  ...
</div>
```
3. Replace the entire `<div class="av">...</div>` with:
```html
<img src="images/photo1.jpg" alt="Tay Jun Long" class="av av-photo">
```

### 3. Fill In Your FYP
In `index.html`, search for `[Your FYP Title Here]` and update:
- Title of your project
- Description (what problem, what approach, what results)
- Tech tags

### 4. Add Background Music (Optional)
1. Find a royalty-free lofi/ambient track (e.g. from https://pixabay.com/music)
2. Save it as `bgm.mp3` in the root folder
3. Open `js/main.js`, find the **BGM** section, and swap:
```js
// BEFORE (placeholder tone):
osc = ctx.createOscillator();

// AFTER (real audio — uncomment these lines):
const audio = new Audio('bgm.mp3');
audio.loop   = true;
audio.volume = 0.25;
```

### 5. Wire Up the Contact Form
Open `js/main.js` → find the `handleSubmit` function.

**Easiest — Formspree (no backend, free):**
1. Go to https://formspree.io and create a free account
2. Create a form → get your endpoint URL
3. Replace the `handleSubmit` body with:
```js
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, subject, message })
});
if (res.ok) { status.textContent = '✓ Sent!'; }
```

---

## Deploy to GitHub Pages (Step by Step)

### Step 1 — Create GitHub Repo
1. Go to https://github.com/Junboiiiii
2. Click **New repository**
3. Name it: `portfolio` (or `junlong.github.io` for root URL)
4. Set to **Public**
5. Click **Create repository**

### Step 2 — Push Your Code

Open **Git Bash** or **VS Code Terminal** in your `jun-portfolio` folder:

```bash
# Initialise git
git init

# Add all files
git add .

# First commit
git commit -m "feat: initial portfolio launch"

# Connect to your GitHub repo
git remote add origin https://github.com/Junboiiiii/portfolio.git

# Push!
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**: select `main` branch → `/ (root)` folder
4. Click **Save**
5. Wait ~60 seconds → your site is live at:
   `https://junboiiiii.github.io/portfolio`

### Step 4 — Future Updates
Every time you make changes:
```bash
git add .
git commit -m "fix: update project descriptions"
git push
```
GitHub Pages auto-deploys on every push. ✅

---

## Customisation Cheatsheet

| What to change | Where |
|---|---|
| About text | `js/data.js` → `p1`, `p2` |
| Skills list | `js/data.js` → `skills: [...]` |
| Projects | `js/data.js` → `projects: [...]` |
| FYP details | `index.html` → search `[Your FYP Title Here]` |
| Your photo | Replace `<div class="av">` with `<img>` in `index.html` |
| Email address | `index.html` → search `junlong1125@gmail.com` |
| Social links | `index.html` → footer + contact section |
| Accent colours | `css/style.css` → `:root` variables |
| BGM audio | `js/main.js` → BGM section |
| Contact form | `js/main.js` → `handleSubmit` function |

---

## Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, Grid, Flexbox, animations
- **Vanilla JS** — no framework, no build step needed
- **Google Fonts** — Syne, DM Mono, Instrument Serif, Plus Jakarta Sans

---

*Built with obsession in Malacca 🇲🇾 — Tay Jun Long, 2025*
