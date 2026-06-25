# 🌿 CareConnect — Healthcare Support Platform

A React (Vite) healthcare NGO platform connecting patients with volunteers across Tamil Nadu.

## Tech Stack
- **React 18** with Vite
- **Claude AI API** (Anthropic) for the CareBot assistant
- Vanilla CSS with CSS variables (no Tailwind, no component libraries)

## Project Structure

```
careconnect/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx          # React entry point
│   ├── App.jsx           # Root component
│   ├── index.css         # Global styles (all CSS variables, animations, layout)
│   └── components/
│       ├── Navbar.jsx           # Sticky navigation
│       ├── Hero.jsx             # Hero section with stat cards
│       ├── RegistrationSection.jsx  # 3-tab forms (Patient / Volunteer / Contact)
│       ├── ChatAssistant.jsx    # Claude AI-powered chatbot
│       ├── HowItWorks.jsx       # 3-step process section
│       └── Footer.jsx           # Footer
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- ✅ **3-Tab Registration Forms** — Patient support, Volunteer registration, Contact us
- ✅ **Real-time form validation** with success banners
- ✅ **CareBot AI Assistant** — Claude-powered FAQ chatbot with:
    - Quick reply buttons
    - Typing indicators
    - Conversation history / context-aware responses
- ✅ **Animated Hero** with stat cards
- ✅ **Scroll-triggered fade-in animations** using IntersectionObserver
- ✅ **Sticky navigation** with backdrop blur
- ✅ **Fully responsive** (mobile-first)
- ✅ **How It Works** 3-step section

## Notes

- The Claude API key is handled by the Anthropic proxy in the artifact environment.
- For local development, you'll need to add your own `x-api-key` header to the fetch call in `ChatAssistant.jsx`.