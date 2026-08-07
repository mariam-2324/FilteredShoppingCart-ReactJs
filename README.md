# React Learning App

A React application built with **Vite**, **React Router v7**, and **Bootstrap 5** — part of the MERN+AI learning journey.

---

## Tech Stack

| Technology      | Version |
|-----------------|---------|
| React           | ^19.2.7 |
| React Router    | ^7.18.1 |
| Vite            | ^8.1.1  |
| Bootstrap       | 5.3.8   |
| ESLint          | ^10.6.0 |

---

## Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- npm (comes with Node.js)

### Steps

```bash
# 1. Navigate to the project directory
cd ReactJsLearnings/react-learning

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

---

## Available Scripts

| Script          | Description                              |
|-----------------|------------------------------------------|
| `npm run dev`   | Start the development server with HMR    |
| `npm run build` | Build the app for production             |
| `npm run preview` | Locally preview the production build   |
| `npm run lint`  | Run ESLint to check code quality         |

---

## Project Structure

```
react-learning/
├── index.html                # HTML entry point (Bootstrap CDN included)
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
├── package.json              # Dependencies & scripts
├── public/                   # Static assets
└── src/
    ├── main.jsx              # React DOM entry (BrowserRouter wrapper)
    ├── App.jsx               # Root component with route definitions
    ├── assets/               # Images, fonts, etc.
    ├── Components/
    │   ├── Navbar/
    │   │   ├── Navbar.jsx    # Navigation bar component
    │   │   └── Navbar.css    # Navbar styles
    │   └── Footer/
    │       ├── Footer.jsx    # Footer component (placeholder)
    │       └── Footer.css    # Footer styles
    └── Pages/
        ├── Home.jsx          # Home page      → `/`
        ├── About.jsx         # About page     → `/about`
        ├── Features.jsx      # Features page  → `/features`
        ├── Blog.jsx          # Blog page      → `/blog`
        ├── Pricing.jsx       # Pricing page   → `/pricing`
        ├── Outlets.jsx       # Outlets page   → `/outlets`
        └── OnlineShopping.jsx # OnlineShopping → `/onlineShopping`
```

---

## Routing Table

| Path               | Component        | Navbar Link      |
|--------------------|------------------|------------------|
| `/`                | `<Home/>`        | Home             |
| `/about`           | `<About/>`       | About            |
| `/features`        | `<Features/>`    | Features         |
| `/blog`            | `<Blog/>`        | More Facilities → Blog |
| `/pricing`         | `<Pricing/>`     | Pricing          |
| `/outlets`         | `<Outlets/>`     | More Facilities → Our Outlets |
| `/onlineShopping`  | `<OnlineShopping/>` | More Facilities → Online Shopping |

---

## Usage Guide

1. **Start the dev server** with `npm run dev`.
2. **Navigate** using the Bootstrap navbar at the top of the page.
3. The **Home** link takes you to the landing page.
4. Use the **More Facilities** dropdown to access Blog, Our Outlets, and Online Shopping.
5. All pages are rendered dynamically using React Router — no full-page reloads.

### Building for Production

```bash
npm run build
```

The output will be in the `dist/` directory, ready to deploy to any static hosting provider (Netlify, Vercel, GitHub Pages, etc.).

---

## ESLint

This project uses ESLint with the React Hooks plugin. Run:

```bash
npm run lint
```

---

## Troubleshooting

**"Failed to resolve import" errors:**
- Ensure all import paths in `App.jsx` match the actual file locations (case-sensitive on some systems).
- All page components live in `src/Pages/`, not nested subdirectories.

**Blank page / no routes working:**
- Verify `BrowserRouter` wraps `<App />` in `src/main.jsx`.
- Check that `react-router-dom` is installed (`npm list react-router-dom`).

