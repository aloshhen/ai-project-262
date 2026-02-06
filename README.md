# WEBSITE Project

> 🤖 Этот проект был автоматически сгенерирован с помощью AI Constructor Bot

## 📝 Описание

<b>ИСХОДНЫЙ ЗАПРОС:</b>
Create an ultra-immersive, aggressively styled landing page for a DeFi Neobank called "NEXUS PROTOCOL".
The aesthetic must be "Web3 Cyberpunk / Brutalist Future". It should feel like an exclusive, slightly dangerous underground crypto interface, not a traditional bank. Awwwards Site of the Day level execution is required.

1. THE "DARING" VIBE & PALETTE:
* Background: Deepest Void Black (#020204) with subtle, slow-moving "plasma" nebulae in deep indigo and violent violet.
* Acid Accents: Use sharp, high-contrast neon colors that pop aggressively against the dark background:
    * Primary Accent: "Toxic Lime" (#BFFF00 or similar vibrant chartreuse).
    * Secondary Accent: "Electric Magenta" (#FF00FF) and "Cyber Cyan" (#00FFFF).
* Texture & Noise: Add a subtle, animated "film grain" or "scanline" overlay across the entire screen to give it a raw, digital texture.
* Typography: Use heavy, wide, brutalist sans-serif headers (like 'Inter Tight' Black or 'Monument Extended'). Use a technical monospaced font (like 'JetBrains Mono') for sub-text and data displays.

2. UNIQUE HIGH-END ELEMENTS:

* HERO SECTION: The "Data Core"
    * Headline: "WEALTH UNCHAINED. THE PROTOCOL IS LIVE." (Massive, uppercase, maybe with a slight text-glitch animation).
    * Central Visual: NOT a credit card. Create a rotating, fragmented 3D "Hypercube" or "Data Prism" using CSS 3D transforms and gradients. It should look like raw energy trapped in a crystalline structure. It must slowly rotate and pulse with the Toxic Lime light.
    * Interaction: The cube speeds up its rotation and glows brighter when the cursor moves near it (use Framer Motion mouse move hooks).

* THE "INFINITE TICKER" TAPE:
    * Below the hero, create an infinite horizontal scrolling marquee (marquee band) displaying live-looking data like: "APY: 12.5% /// TX SPEED: <0.1s /// TOTAL VALUE LOCKED: $4.2B /// NEXUS_ID: ACTIVE". Use the monospaced font here.

* "GLITCH" FEATURE CARDS (Bento-style):
    * Create a grid of feature cards that look like holographic data plates.
    * Normal State: Dark glass, sharp borders colored in Toxic Lime.
    * Hover State: The card should experience a brief "digital glitch" effect (chromatic aberration shift, slight distortion, or flickering border) using Framer Motion variants before settling into an active glowing state.
    * *Card 1:* "Zero-Knowledge Privacy" (abstract shield icon).
    * *Card 2:* "Instant Fiat-to-Crypto Bridge" (wormhole icon).
    * *Card 3:* "NFT Collateral Loans" (abstract diamond icon).

* INTERACTIVE "STAKING CALCULATOR":
    * Instead of a slider, design a futuristic "Protocol Staking Interface".
    * User drags a glowing "energy bar" to set the amount.
    * The projected earnings shouldn't just update a number; they should fill up a complex, glowing data visualization graph in real-time.

Goal: The user should feel like they are jacking into a futuristic financial matrix. Make it loud, fast, and visually overwhelming in a good way.

<b>УТОЧНЕНИЯ:</b>
🎨 Какой тип анимации для 3D 'Hypercube' в Hero-секции предпочтителен?
→ Плавное вращение с пульсацией света

⚡ Какой уровень интерактивности для 'Staking Calculator' нужен?
→ Средняя: + звуковые эффекты при взаимодействии

🧩 Должен ли 'Infinite Ticker' отображать реальные данные или стилизованные?
→ Фейковые: рандомизированные, но правдоподобные значения

🎨 Какой тип навигации лучше соответствует 'опасному' vibe?
→ Минималистичная панель с 'битыми' иконками



## 🚀 Технологии

- React + Next.js (для SSR и производительности)  
- Framer Motion (для сложных анимаций и взаимодействий)  
- Three.js / react-three-fiber (для 3D-гиперкуба)  
- GSAP (для плавных анимаций тикера и эффектов)  
- Tailwind CSS (для агрессивного стиля с кастомными конфигами)  
- Web Audio API (для звуковых эффектов)

## 📁 Структура проекта

- `package.json`
- `index.html`
- `vite.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `src/main.jsx`
- `src/index.css`
- `src/App.jsx`
- `src/components/IconRegistry.tsx`
- `src/components/SafeIcon.tsx`
- `vercel.json`
- `.gitignore`
- `README.md`

## 🛠️ Установка

```bash
npm install
```

## ▶️ Запуск

```bash
npm start
# или
npm run dev
```

## 📋 План разработки

1.

## 📄 Лицензия

MIT

## 🤖 Создано с помощью

[AI Constructor Bot](https://t.me/construct_ai_bot) - Telegram бот для автоматической генерации проектов с помощью AI
