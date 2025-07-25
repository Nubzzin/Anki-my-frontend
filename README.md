# Anki-My

A simple, modern, full-stack flashcard app inspired by Anki, built with **React**, **TypeScript**, and **Rust (Rocket)**.

Host your own spaced repetition learning platform — no ads, no tracking, just study.

## Screenshots

### Login Page

![Login Screenshot](./public/screenshots/login.png)

### Home Page

![Home Screenshot](./public/screenshots/decks.png)

### Decks View

![Decks Screenshot](./public/screenshots/decks.png)

### Shared Decks

![Shared Decks Screenshot](./public/screenshots/shared.png)

### Add Deck

![Add Deck Screenshot](./public/screenshots/new.png)

### Cards Page

![Cards Screenshot](./public/screenshots/cards.png)
![Cardsback Screenshot](./public/screenshots/cardsback.png)

## Features

- 🔐 User authentication (JWT-based)
- 📚 Create, manage and review decks
- 🃏 Add and edit cards
- 🔍 Filter decks by name
- ☁️ Hosted frontend and backend (Railway)

## Tech Stack

### Frontend

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- TailwindCSS

### Backend

- [Rust](https://www.rust-lang.org/) with [Rocket](https://rocket.rs/)
- JWT for authentication
- PostgreSQL (via Railway)
- CORS & API endpoints for frontend

## 🚀 Getting Started

### Prerequisites

- Node.js + npm
- Rust + Cargo
- PostgreSQL

---

## 📦 Installation

### Clone the repo

```bash
git clone https://github.com/yourusername/anki-my.git
cd anki-my
```

### Setup Frontend

```bash
cd frontend
npm install
cp .env.example .env  # Set VITE_API_URL to your backend URL
npm run dev            # Or: npm run build && npm run preview
```

### Setup Backend

```bash
cd backend
cargo build
# Set environment variables (e.g., DATABASE_URL, JWT_SECRET)
cargo run
```

[Link to frontend](https://github.com/Nubzzin/Anki-my-frontend)
