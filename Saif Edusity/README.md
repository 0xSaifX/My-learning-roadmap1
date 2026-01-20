# Edusity - Full-Stack Educational Platform

A modern, responsive educational platform built with React, Vite, TailwindCSS, and Node.js.

## Features
- **Modern UI**: Clean and premium design with glassmorphism and animations.
- **Authentication**: JWT-based login/signup with role-based access.
- **Role-based Dashboards**: Specific views for Students, Teachers, and Admins.
- **Course Management**: Create, browse, and filter courses.
- **Responsive**: Fully mobile-friendly layout.
- **Tech Stack**: 
  - Frontend: React, Vite, TailwindCSS, Framer Motion, Lucide-React.
  - Backend: Node.js, Express, MongoDB, JWT.

## Quick Start (Root Directory)

You can manage both frontend and backend from the root directory:

1. **Install all dependencies**:
   ```bash
   npm run scripts-install
   ```
2. **Start both in development mode**:
   ```bash
   npm run dev
   ```

## Deployment

This project is configured for easy deployment (e.g., to platforms like Heroku, Render, or Vercel).

1. **Build the frontend**:
   ```bash
   npm run build
   ```
2. **Set environment variables** on your hosting provider (refer to `server/.env.example`).
3. **Start the production server**:
   ```bash
   npm start
   ```

The server is configured to serve the frontend's static assets from `client/dist` when `NODE_ENV` is set to `production`.

## Key Deliverables
- ✅ Full-stack architecture (Client & Server)
- ✅ React + Vite frontend with premium Tailwind styles
- ✅ Express API with MongoDB integration
- ✅ Secure Authentication system
- ✅ Responsive Course portal and Dashboards
- ✅ Database seeding script
