# Muhammad Rehan — Portfolio (MERN Stack)

A professional, animation-rich full-stack portfolio built with the MERN stack.

---

## ✨ Features

- **Dark theme** with neon/gradient accents and glassmorphism
- **Framer Motion** animations — scroll-triggered, hover, stagger effects
- **Custom cursor** with magnetic hover on interactive elements
- **React Type Animation** in hero section
- **Swiper.js** project carousel with autoplay
- **Responsive** navbar with animated hamburger menu
- **Working contact form** connected to Node/Express/MongoDB backend
- **Rate limiting**, validation, and security headers (helmet)
- Deployment-ready: **Vercel** (frontend) + **Render** (backend)

---

## 📁 Project Structure

```
portfolio/
├── frontend/          # React + Vite + Tailwind
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── SectionHeader.jsx
│   │   │   ├── CustomCursor.jsx
│   │   │   └── BackToTop.jsx
│   │   ├── hooks/
│   │   │   └── useScrollAnimation.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── .env.example
│
└── backend/           # Node.js + Express + MongoDB
    ├── models/
    │   └── Contact.js
    ├── routes/
    │   └── contact.js
    ├── server.js
    └── .env.example
```

---

## 🚀 Local Setup

### 1. Clone & Install

```bash
# Backend
cd portfolio/backend
npm install
cp .env.example .env
# Fill in your MONGODB_URI in .env

# Frontend
cd ../frontend
npm install
cp .env.example .env
# Set VITE_API_URL=http://localhost:5000
```

### 2. Run Development Servers

```bash
# Terminal 1 — Backend
cd backend
npm run dev   # runs on port 5000

# Terminal 2 — Frontend
cd frontend
npm run dev   # runs on port 5173
```

Open **http://localhost:5173**

---

## 🌐 Deployment

### Frontend → Vercel

1. Push `frontend/` to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Set environment variable: `VITE_API_URL=https://your-backend.onrender.com`
4. Deploy

### Backend → Render

1. Push `backend/` to GitHub
2. Create a **Web Service** on [render.com](https://render.com)
3. Set environment variables:
   - `MONGODB_URI` — your MongoDB Atlas connection string
   - `NODE_ENV=production`
   - `FRONTEND_URL` — your Vercel frontend URL
4. Start command: `node server.js`

### MongoDB Atlas Setup

1. Create a free cluster at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create a database user
3. Whitelist all IPs (`0.0.0.0/0`) for Render deployment
4. Copy the connection string to your backend `.env`

---

## 🔧 Technologies

| Layer | Tech |
|-------|------|
| Frontend | React 18, Vite, Tailwind CSS |
| Animations | Framer Motion |
| Carousel | Swiper.js |
| Backend | Node.js, Express 4 |
| Database | MongoDB + Mongoose |
| Security | Helmet, express-rate-limit, express-validator |
| Deployment | Vercel + Render |

---

## 📞 Contact

**Muhammad Rehan**
- Email: connectmrehan@gmail.com
- Phone: +92-334-1147986
- Location: Lahore, Pakistan
