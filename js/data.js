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

    p1: `Hey, I’m Jun — a Computer Science graduate from Asia Pacific University (APU) with a strong passion for 
        frontend development. I believe great UI should feel effortless: it guides users naturally, feels responsive, 
        and creates a seamless experience. I enjoy crafting clean, intuitive interfaces and paying attention to the small 
        details that make products feel polished and engaging.`,

    p2: `During my internship at CelcomDigi as a Product Engineer, I gained experience working in a fast-paced environment, 
      collaborating across teams, and understanding how large-scale digital products are built. With my background in AI and backend 
      systems, I also bring a strong problem-solving mindset to frontend development. I’m now seeking a frontend role where I can 
      build performant, user-focused interfaces and contribute to real-world products.`,

    pills: ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'JavaScript', 'HTML / CSS', 'Figma', 'TypeScrit', 'Canva'],

    skillsTitle: 'Frontend Tech Stack',

    skills: [
      { ico: '⚛️',  nm: 'React / Next.js',    lv: 'Confident',   w: '82%' },
      { ico: '🔺',  nm: 'Angular',             lv: 'Learning',    w: '65%' },
      { ico: '💨',  nm: 'Tailwind CSS',        lv: 'Confident',   w: '88%' },
      { ico: '🌐',  nm: 'HTML / CSS',          lv: 'Strong',      w: '92%' },
      { ico: '✨',  nm: 'JavaScript',          lv: 'Confident',   w: '80%' },
      { ico: '🎨',  nm: 'Figma / UI Design',   lv: 'Comfortable', w: '75%' },
      { ico: '🔷',  nm: 'TypeScript',          lv: 'Learning',    w: '62%' },
      { ico: '🖌️',  nm: 'Canva',          lv: 'Strong',    w: '88%' },
    ],

    projTitle: 'Frontend Projects',

    projects: [
      {
        emoji: '💻',
        bg: 'linear-gradient(135deg, #f0eeff, #e8e2ff)',
        tags: [ 'React', 'CSS'],
        title: 'github-explorer',
        desc: 'Uses the real GitHub API — interviewers recognise it instantly. You search a username, fetch their public repos, show avatar, bio, follower count, top languages, and star counts.',
        link: 'https://github-explorer-xi-tawny.vercel.app/', // ✏️ Replace with your GitHub / live link
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
        link: 'jun-portfolio-xi.vercel.app/', // ✏️ Replace with your GitHub / live link
      },
    ],
  },

  /* ══════════════════════════════════════
     AI ENGINEER PROFILE
  ══════════════════════════════════════ */
  ai: {

    aboutTitle: 'The Intelligence Behind the Code',

    p1: `I’m Jun — a Computer Science (Artificial Intelligence) graduate from Asia Pacific University (APU). 
        I’m passionate about building applied AI systems that solve real-world problems, with experience in machine learning, 
        computer vision, and NLP. I focus on turning ideas into practical, reliable solutions that go beyond experimentation and 
        deliver real impact.`,

    p2: `During my internship at CelcomDigi as a Product Engineer, I gained exposure to large-scale system design and data-driven 
        decision-making in a fast-paced environment. I’ve also developed end-to-end AI projects, from data preprocessing and model 
        development to system integration. I’m now looking to grow as an AI Engineer, contributing to the design and deployment of 
        scalable, production-ready AI systems.`,

    pills: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn','Machine Learning', 'Deep Learning', 'NLP','LLMs', 'RAG', 
          'Prompt Engineering','Feature Engineering', 'AI Agents',
          'REST APIs', 'System Design',
          'Pandas', 'NumPy'],

    skillsTitle: 'AI / ML Tech Stack',

    skills: [
      { ico: '🐍',  nm: 'Python',               lv: 'Strong',      w: '88%' },
      { ico: '🔥',  nm: 'PyTorch',              lv: 'Confident',   w: '78%' },
      { ico: '🧠',  nm: 'Machine Learning',     lv: 'Confident',   w: '80%' },
      { ico: '👁️', nm: 'Deep Learning / CV',   lv: 'Learning',    w: '70%' },
      { ico: '💬',  nm: 'NLP / Chatbot Systems',                  lv: 'Familiar',    w: '65%' },
      { ico: '📊',  nm: 'Scikit-learn / Pandas / NumPy',  lv: 'Confident',   w: '82%' },
      { ico: '🔎',  nm: 'RAG / Vector Retrieval',         lv: 'Learning',    w: '60%' },
      { ico: '🔗',  nm: 'REST API Development',           lv: 'Confident',   w: '75%' },
      { ico: '⚙️',  nm: 'System Design',                  lv: 'Familiar',    w: '68%' },
      { ico: '🤖',  nm: 'AI Agents (Basic)',              lv: 'Learning',    w: '60%' },
    ],

    projTitle: 'AI / ML Projects',

    projects: [
      {
        emoji: '💋',
        bg: 'linear-gradient(135deg, #040c04, #081208)',
        tags: ['Python', 'PyTorch', 'Deep Learning', 'Computer Vision','FASTAPI', 'KNN', 'OpenCV','Random Forest','ML'],
        title: 'AI-Lips-Aesthetic-Recommender',
        desc: 'Developed a modular AI system for aesthetic pre-consultation for lip enhancement planning',
        link: 'lipglow-ai-tryon.vercel.app',
      },
      {
        emoji: '📚',
        bg: 'linear-gradient(135deg, #030a03, #060f06)',
        tags: ['Python', 'RAG', 'Next.js', 'Qdrant', 'FastAPI', 'LLMs'],
        title: 'AI-policy-helper',
        desc: 'A local-first RAG (Retrieval-Augmented Generation) system that answers company policy questions with citations. Built with FastAPI, Next.js, and Qdrant.',
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
