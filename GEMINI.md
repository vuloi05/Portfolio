# GEMINI.md

This file provides a comprehensive overview of the portfolio project, its structure, and key components to provide context for AI-assisted development.

## Project Overview

This is a personal portfolio website for Vu Tien Loi, a full-stack developer. It's built with [Next.js](https://nextjs.org/) and showcases a strong emphasis on creative and interactive web experiences. The site features a space-themed design with particle backgrounds, 3D animations, and smooth page transitions.

### Key Technologies

*   **Framework:** Next.js (React)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS with `tailwind-merge` and `clsx` for utility class management. SCSS modules are also used for component-specific styles.
*   **UI Libraries:** Shadcn UI, Aceternity UI
*   **Animation:** GSAP (GreenSock Animation Platform), Framer Motion, and Spline for 3D interactive scenes.
*   **Backend:** Next.js API Routes are used for backend functionality.
    *   **Contact Form:** An API endpoint at `src/app/api/send/route.ts` handles form submissions, validates input with Zod, and sends emails using Resend.
*   **Real-time Features:** Socket.IO is used for real-time features like showing online users and remote cursors.

## Building and Running

The project uses `npm` as its package manager. The following scripts are defined in `package.json`:

*   **`npm install`**: Installs all the necessary dependencies.
*   **`npm run dev`**: Starts the development server on `http://localhost:3000`.
*   **`npm run build`**: Creates a production-ready build of the application.
*   **`npm run start`**: Starts the production server.
*   **`npm run lint`**: Lints the codebase using Next.js's built-in ESLint configuration.

## Development Conventions

*   **Component-Based Architecture:** The UI is built with React components located in `src/components`. Reusable UI elements are found in `src/components/ui`.
*   **Routing:** The application uses the Next.js App Router. Pages and their corresponding routes are defined as directories within the `src/app` directory.
*   **Configuration:** Project-wide configuration, such as site title, metadata, and social media links, is centralized in `src/data/config.ts`.
*   **Styling:**
    *   Global styles are in `src/app/globals.css`.
    *   Utility-first styling is handled by Tailwind CSS.
    *   Component-specific styles are often co-located with the component in `.module.scss` files.
*   **Type Safety:** TypeScript is used throughout the project, with type definitions located in `src/types/index.ts`.
*   **Animations:** Animations are a core part of the user experience.
    *   `framer-motion` is used for component-level animations (e.g., in the header and navigation).
    *   `gsap` is used for more complex or timeline-based animations.
    *   Interactive 3D scenes are created with Spline and integrated using `@splinetool/react-spline`.
*   **API:** Backend logic is implemented using Next.js API Routes within the `src/app/api` directory.
