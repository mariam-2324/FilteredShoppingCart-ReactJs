# React Learning App

A React application built with **Vite**, **React Router v7**, and **Bootstrap 5** — part of the MERN+AI learning journey.

---

## Tech Stack

| Technology      | Version |
|-----------------|---------|
| React           | ^19.2.7 |
| React Router    | ^7.18.1 |
| Vite            | ^8.1.1  |
| TailwindCSS     | 4.3.8   |
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
    │   
```

