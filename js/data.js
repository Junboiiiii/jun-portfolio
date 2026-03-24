/**
 * data.js — Portfolio Content for Tay Jun Long
 * ✏️  Edit this file to update your portfolio content.
 *     All text, skills, and projects live here.
 */

const DATA = {

  /* ══════════════════════════════════════
     FRONTEND DEVELOPER PROFILE
  ══════════════════════════════════════ */
  fe: {

    aboutTitle: 'The Dev Behind the Design',

    p1: `Hey, I'm Jun — a fresh CS graduate from Asia Pacific University (APU) who fell in love
         with the frontend. I believe great UI is invisible: it guides, delights, and never gets
         in the way. I obsess over the details — the timing of an animation, the weight of a
         typeface, the precision of a hover state.`,

    p2: `During my internship at CelcomDigi as a Product Engineer, I got a taste of building
         digital products at scale in a fast-moving enterprise environment. Now I'm actively
         seeking my first full-time frontend role where I can ship beautiful, performant
         interfaces every day.`,

    pills: ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'JavaScript', 'HTML / CSS', 'Figma', 'TypeScri'],

    skillsTitle: 'Frontend Tech Stack',

    skills: [
      { ico: '⚛️',  nm: 'React / Next.js',    lv: 'Confident',   w: '82%' },
      { ico: '🔺',  nm: 'Angular',             lv: 'Learning',    w: '65%' },
      { ico: '💨',  nm: 'Tailwind CSS',        lv: 'Confident',   w: '88%' },
      { ico: '🌐',  nm: 'HTML / CSS',          lv: 'Strong',      w: '92%' },
      { ico: '✨',  nm: 'JavaScript',          lv: 'Confident',   w: '80%' },
      { ico: '🎨',  nm: 'Figma / UI Design',   lv: 'Comfortable', w: '75%' },
      { ico: '🔷',  nm: 'TypeScript',          lv: 'Learning',    w: '62%' },
    ],

    projTitle: 'Frontend Projects',

    projects: [
      {
        emoji: '🛒',
        bg: 'linear-gradient(135deg, #f0eeff, #e8e2ff)',
        tags: ['Next.js', 'Tailwind', 'CSS'],
        title: 'E-Commerce UI',
        desc: 'A responsive, animated storefront UI built in Next.js with smooth cart transitions, dark mode support, and a clean product catalogue layout.',
        link: '#', // ✏️ Replace with your GitHub / live link
      },
      {
        emoji: '🎨',
        bg: 'linear-gradient(135deg, #fff0f5, #ffe8f0)',
        tags: ['Angular', 'Figma', 'CSS'],
        title: 'UI Component Library',
        desc: '20+ reusable Angular components designed in Figma first, with full dark mode and keyboard accessibility support.',
        link: '#', // ✏️ Replace with your GitHub / live link
      },
      {
        emoji: '📱',
        bg: 'linear-gradient(135deg, #f0f8ff, #e8f4ff)',
        tags: ['React', 'Tailwind', 'Animation'],
        title: 'Portfolio & Landing Pages',
        desc: 'Multiple landing pages and personal portfolios built — fast, responsive, and pixel-perfect from Figma to code.',
        link: '#', // ✏️ Replace with your GitHub / live link
      },
    ],
  },

  /* ══════════════════════════════════════
     AI ENGINEER PROFILE
  ══════════════════════════════════════ */
  ai: {

    aboutTitle: 'The Intelligence Behind the Code',

    p1: `I'm Jun — a Computer Science (AI) graduate from Asia Pacific University (APU). My
         passion is applying machine learning and deep learning to real problems: computer vision,
         NLP, and intelligent systems that actually work in the wild, not just on paper.`,

    p2: `At CelcomDigi as a Product Engineer intern, I saw firsthand how data-driven thinking
         shapes product decisions at scale. Now I'm ready to take that further — researching,
         building, and deploying AI systems that solve meaningful real-world problems.`,

    pills: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'C#', 'Machine Learning', 'Deep Learning', 'NLP'],

    skillsTitle: 'AI / ML Tech Stack',

    skills: [
      { ico: '🐍',  nm: 'Python',               lv: 'Strong',      w: '88%' },
      { ico: '🔥',  nm: 'PyTorch',              lv: 'Confident',   w: '78%' },
      { ico: '🧠',  nm: 'Machine Learning',     lv: 'Confident',   w: '80%' },
      { ico: '👁️', nm: 'Deep Learning / CV',   lv: 'Learning',    w: '70%' },
      { ico: '💬',  nm: 'NLP',                  lv: 'Familiar',    w: '65%' },
      { ico: '📊',  nm: 'Scikit-learn / Pandas',lv: 'Confident',   w: '82%' },
      { ico: '🎯',  nm: 'C#',                   lv: 'Familiar',    w: '58%' },
    ],

    projTitle: 'AI / ML Projects',

    projects: [
      {
        emoji: '🤖',
        bg: 'linear-gradient(135deg, #040c04, #081208)',
        tags: ['Python', 'PyTorch', 'Deep Learning'],
        // ✏️ Replace everything below with your real FYP details
        title: 'FYP — [Your Project Title]',
        desc: 'Add your Final Year Project here! Describe the problem, your model architecture, dataset used, and accuracy/results achieved. This is your showpiece.',
        link: '#',
      },
      {
        emoji: '📊',
        bg: 'linear-gradient(135deg, #030a03, #060f06)',
        tags: ['Python', 'Scikit-learn', 'Pandas'],
        title: 'ML Classification Model',
        desc: 'Built and evaluated multiple ML classifiers for a real-world dataset. Achieved strong accuracy through feature engineering and hyperparameter tuning.',
        link: '#',
      },
      {
        emoji: '👁️',
        bg: 'linear-gradient(135deg, #030803, #050e05)',
        tags: ['Python', 'OpenCV', 'PyTorch'],
        title: 'Computer Vision Project',
        desc: 'Trained a CNN-based model for image recognition/object detection. Add your actual dataset, architecture choices, and benchmark results here.',
        link: '#',
      },
    ],
  },
};
