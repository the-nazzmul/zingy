# Zingy

A modern, scroll-driven product landing page for Zingy soda, built with Next.js, React Three Fiber, Drei, and GSAP.

**Live Site:** [zingy-drink.vercel.app](https://zingy-drink.vercel.app/)  
**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, GSAP, Three.js, React Three Fiber, Drei

---

## Preview

![Zingy Hero Preview](public/thumbnails/hero.png)

---

## Highlights

- Immersive 3D product storytelling using React Three Fiber and Drei
- Scroll-driven timeline animations powered by GSAP and ScrollTrigger
- Interactive hero and sky-dive sections with animated soda cans and cloud motion
- Responsive layout with mobile and desktop-specific behavior
- Component-driven architecture for scenes, sections, and reusable UI primitives
- Type-safe codebase with TypeScript strict mode

---

## Core Features

### Hero Experience

- Animated heading reveal (`Live Gutsy`)
- Multi-can 3D composition with motion choreography
- Scroll-synced transitions and background color interpolation

### Sky Dive Scene

- Floating and rotating featured can
- Procedural cloud movement and atmospheric lighting
- Scroll-pinned section with timeline-based transforms

### Performance and UX

- Split section responsibility between 2D UI and 3D scene layers
- Progressive scene readiness with shared state management
- Clean animation orchestration through GSAP timelines

---

## Project Structure

```txt
src/
  app/
    page.tsx
  components/
    scenes/
      hero-scene.tsx
      sky-dive-scene.tsx
    sections/
      hero.tsx
      sky-dive.tsx
      header.tsx
    bubbles.tsx
    floating-can.tsx
    soda-can.tsx
    view-canvas.tsx
  hooks/
  lib/
public/
  thumbnails/
    hero.png
```

---

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **UI:** React, Tailwind CSS
- **3D:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animation:** GSAP, ScrollTrigger, `@gsap/react`
- **Language:** TypeScript
- **State:** Zustand

---

## Deployment

Deployed on Vercel:

- **Production URL:** [https://zingy-drink.vercel.app/](https://zingy-drink.vercel.app/)

---

## License

This project is intended for portfolio and learning purposes unless stated otherwise by the repository owner.
