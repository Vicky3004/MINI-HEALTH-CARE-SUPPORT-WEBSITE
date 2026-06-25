# 🌿 CareConnect — Healthcare Support Web App

> A healthcare NGO platform connecting patients with volunteers across Tamil Nadu, powered by Gemini AI.

**Developed by [Vignesh Mahendran R](https://github.com/vicky3004)**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Gemini AI](https://img.shields.io/badge/Gemini-AI-4285F4?style=flat&logo=google)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🚀 Live Demo

🔗 **[View Live](https://your-vercel-link.vercel.app)** &nbsp;|&nbsp; 💻 **[GitHub Repo](https://github.com/vicky3004/MINI-HEALTH-CARE-SUPPORT-WEBSITE)**

---

## 📌 About

CareConnect bridges patients in need with dedicated volunteers and healthcare professionals — making quality support accessible to everyone across 12 districts in Tamil Nadu.

---

## ✨ Features

- 🧑‍⚕️ **3-Tab Registration System** — Patient Support, Volunteer Registration, Contact Us
- ✅ **Real-time Form Validation** — inline error messages, required field checks
- 🤖 **AI-Powered CareBot** — Gemini AI chatbot with context-aware healthcare responses
- ⚡ **Quick Reply Buttons** — instant FAQ answers with one click
- 💬 **Typing Indicator** — smooth chat experience with animated dots
- 📱 **Fully Responsive** — 95% mobile compatibility across all devices
- 🎨 **Animated UI** — scroll-triggered fade-ins, sticky navbar, hero section
- 🔄 **How It Works** — 3-step workflow cards

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Frontend | React 18, Vite, JavaScript (ES6+) |
| Styling | CSS3, CSS Modules, CSS Variables |
| AI Integration | Google Gemini AI API (`gemini-2.5-flash-lite`) |
| Fonts | Google Fonts (Playfair Display, DM Sans) |
| Deployment | Vercel |

---

## 📁 Project Structure

```
MINI-HEALTH-CARE-SUPPORT-WEBSITE/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── RegistrationSection.jsx
│   │   ├── ChatAssistant.jsx
│   │   ├── HowItWorks.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env               ← API key (never commit)
├── .env.example       ← Template for contributors
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- A free [Google Gemini API key](https://aistudio.google.com/app/apikey)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/vicky3004/MINI-HEALTH-CARE-SUPPORT-WEBSITE.git

# 2. Navigate into the project
cd MINI-HEALTH-CARE-SUPPORT-WEBSITE

# 3. Install dependencies
npm install

# 4. Create your .env file
cp .env.example .env
```

### Configure Environment

Open `.env` and add your Gemini API key:
```env
VITE_GEMINI_KEY=your_gemini_api_key_here
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🌍 Deployment on Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import your repo
3. Add environment variable:
    - Key: `VITE_GEMINI_KEY`
    - Value: your Gemini API key
4. Click **Deploy**

---

## 📊 Stats

| Metric | Value |
|---|---|
| Patients Supported | 1,240+ |
| Active Volunteers | 380 |
| Districts Covered | 12 |
| Average Rating | 4.9 ⭐ |

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GEMINI_KEY=your_gemini_api_key_here
```

> ⚠️ Never commit your `.env` file. It's already in `.gitignore`.

---

## 👨‍💻 Developer

**Vignesh Mahendran R**
- 🌐 Email: [vignesh.org.in@gmail.com](mailto:vignesh.org.in@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/-vignesh-mahendran-](https://linkedin.com/in/-vignesh-mahendran-/)
- 🐙 GitHub: [github.com/vicky3004](https://github.com/vicky3004)

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">
  Made with ♥ in Tamil Nadu by <strong>Vignesh Mahendran R</strong>
</div>