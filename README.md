# Sunday Mba — Portfolio

A modern single‑page portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. It showcases my skills, ranked projects, and DevOps work, with smooth interactions and a mobile‑friendly layout.

## Highlights
- Single‑page experience with sections for Overview, Skills, Projects, DevOps, and Contact
- Dedicated pages for About and Book a Call
- Animated hero, glowing borders, and subtle motion effects
- Project list ranked by complexity
- Mobile drawer navigation

## Tech Stack
- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- React Router

## Getting Started
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Customize
- Update content in `src/data/portfolio.ts`
- Update hero copy and skills list in `src/components/Hero.tsx`
- Replace the portrait image in `src/assets/photo.png`
- Edit global styles in `src/index.css`

## Deploy
Optimized for Vercel deployment.

## Folder Structure
```text
src/
  components/   UI sections and shared components
  pages/        Page layouts (Home, About, Book)
  data/         Portfolio content
  assets/       Images
```

## Notes
- If you replace the portrait image, keep the filename or update the import in `src/components/Hero.tsx`.
- Motion can be reduced for accessibility by OS preferences.

