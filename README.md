<p align="center">
  <img src="https://img.shields.io/badge/⚡-CampusBuddy-7c3aed?style=for-the-badge&logoColor=white" alt="CampusBuddy" />
</p>

<h1 align="center">CampusBuddy — Campus Notification Engine</h1>

<p align="center">
  <b>Your intelligent campus companion. Never miss a notification, event, placement, or deadline again.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2-61dafb?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/Vite-5.1-646cff?style=flat-square&logo=vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat-square&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" />
</p>

---

##  Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Pages & Routes](#-pages--routes)
- [Design System](#-design-system)
- [Screenshots](#-screenshots)
- [Author](#-author)

---

##  About

**CampusBuddy** is a premium, full-featured campus notification platform built with React. It aggregates university life — academic deadlines, placement drives, events, and administrative alerts — into a single, personalized, beautifully designed dashboard.

The platform features a fintech-grade editorial UI with hand-crafted CSS animations, a procedural Canvas-based hero section, an AI chatbot assistant, and a comprehensive design system built for real-world campus use.

---

##  Features

###  Landing Page
- **Procedural Canvas Hero** — Hand-drawn animated landscape with hot air balloon, mountains, trees, and drifting clouds using HTML5 Canvas API
- **Scroll-triggered Animations** — Sections fade and slide into view as you scroll via `IntersectionObserver`
- **Stats Bar** — Key metrics (10K+ Students, 500+ Events, 98% On-Time Alerts, 24/7 AI)
- **Demo Video Modal** — Click-to-play video modal with backdrop blur
- **CTA Section** — Full-width purple gradient call-to-action

###  Dashboard
- **Dynamic Greeting** — Changes based on time of day (Morning/Afternoon/Evening)
- **Smart Insight Cards** — Color-coded (Urgent/Placement/Trending) with glow borders
- **Upcoming Events Sidebar** — Event date badges transform on hover
- **Real-time Announcements** — Pulsing status dots for live updates

###  Notifications
- **Filterable Inbox** — Filter by All / Academics / Events / Placements / Administrative
- **Unread Counter** — Dynamic count of unread notifications
- **Read/Unread Toggle** — Click any notification to toggle read status
- **Mark All as Read** — Bulk action button
- **Staggered Card Animations** — Cards cascade in with 80ms delays

###  Events
- **6 Mock Events** — Competition, Tech Talk, Placement, Cultural, Academic, Workshop
- **Color-coded RSVP Buttons** — Each event type has its own gradient
- **Event Date Hover Effect** — Date badge transforms to gradient background on hover
- **Status Badges** — 🔥 Hot, 🟢 New, 🔴 Urgent floating badges

###  Login
- **Decorative Gradient Orbs** — Blurred purple/blue circles behind the form
- **Float-effect Inputs** — Inputs lift and glow on focus
- **Form Validation** — Required email + password with navigation to Dashboard

###  Profile
- **Notification Preferences** — Interactive toggle switches with spring animation
- **Stats Grid** — Notifications Read / Events Attended / Placements Applied
- **Edit Avatar** — Edit button appears on profile image hover
- **Active Counter Badge** — Shows how many preferences are enabled

###  AI Chatbot
- **Floating Widget** — Purple gradient bubble at bottom-right with bounce animation
- **Welcome Screen** — Avatar, greeting, and "Let's Chat!" CTA
- **Quick Replies** — 4 pre-set campus questions
- **Simulated AI Responses** — Contextual answers with bold text parsing
- **Typing Indicator** — Bouncing dots while "thinking"

###  Micro-interactions (Applied Globally)
- **Font-swap on Hover** — Buttons switch from Inter → Playfair Display italic on hover
- **Shimmer Effect** — Light sweep across buttons on hover
- **Spring Bounce Curve** — `cubic-bezier(0.34, 1.56, 0.64, 1)` on all transitions
- **Card Lift** — Cards elevate 6px with shadow expansion on hover
- **Card Glow** — Color-coded border glow (red/green/purple/blue/teal) per card type
- **Nav Link Underline** — Centered underline expands from 0 → 100% width on hover
- **Icon Rotation** — Sidebar icons rotate -5° and scale on hover
- **Settings Gear** — Rotates 45° on hover

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18.2 |
| **Build Tool** | Vite 5.1 |
| **Styling** | Tailwind CSS 3.4 + Custom CSS |
| **Routing** | React Router DOM 6.22 |
| **Icons** | Lucide React |
| **Animations** | CSS Keyframes + IntersectionObserver |
| **Typography** | Google Fonts (Inter + Playfair Display) |
| **UI Primitives** | Radix UI (Dialog, Switch, Tabs) |
| **State** | React useState / Zustand |

---

## 📁 Project Structure

```
campus_notification_engine/
├── index.html                    # Entry HTML with Google Fonts
├── package.json                  # Dependencies & scripts
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind theme (colors, fonts, animations)
├── postcss.config.js             # PostCSS plugins
│
├── src/
│   ├── main.jsx                  # React DOM entry point
│   ├── App.jsx                   # Router & route definitions
│   ├── index.css                 # Design system (buttons, cards, animations)
│   │
│   ├── components/
│   │   ├── Layout.jsx            # App shell (sidebar + header + outlet)
│   │   ├── HeroCanvas.jsx        # Procedural Canvas landscape animation
│   │   └── ChatBot.jsx           # AI chatbot floating widget
│   │
│   ├── pages/
│   │   ├── Landing.jsx           # Home / marketing page
│   │   ├── Login.jsx             # Authentication page
│   │   ├── Dashboard.jsx         # Main dashboard with insights
│   │   ├── Notifications.jsx     # Filterable notification inbox
│   │   ├── Events.jsx            # Campus events grid
│   │   └── Profile.jsx           # User settings & preferences
│   │
│   └── lib/
│       └── utils.js              # cn() utility (clsx + tailwind-merge)
```

---

##  Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/VivekRai-gif/campus_notification_engine-18214.git

# 2. Navigate to the project
cd campus_notification_engine-18214

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at **http://localhost:5173**

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🗺 Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Landing | Marketing page with Canvas hero, features, stats, CTA |
| `/login` | Login | Authentication form with gradient design |
| `/app/dashboard` | Dashboard | Smart insights, events, announcements |
| `/app/notifications` | Notifications | Filterable notification inbox |
| `/app/events` | Events | Campus events grid with RSVP |
| `/app/profile` | Profile | User settings & notification preferences |

---

##  Design System

### Color Palette
| Color | Hex | Usage |
|---|---|---|
| Purple 600 | `#7c3aed` | Primary brand, gradients, CTAs |
| Indigo 500 | `#6366f1` | Gradient endpoints, accents |
| Cream | `#FAF9F6` | Page backgrounds |
| Charcoal | `#1c1c1c` | Text, dark buttons |
| Warm Gray | `#F5F2EB` | Card backgrounds, inputs |

### Typography
| Font | Weight | Usage |
|---|---|---|
| **Inter** | 300–700 | Body text, buttons, labels |
| **Playfair Display** | 400–700, *italic* | Headings, hover states |

### Animation Curves
| Curve | Usage |
|---|---|
| `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring bounce — buttons, cards, toggles |
| `ease` | Fade animations |
| `ease-in-out` | Float/loop animations |

### Button Types
| Class | Style |
|---|---|
| `.btn-expand` | Widens + glows + shimmer + font-swap |
| `.btn-expand-outline` | Outline variant with fill on hover |
| `.btn-dark` | Dark charcoal with shimmer |
| `.link-swap` | Nav links with underline + font-swap |

---

> Run the app locally to see the full experience with animations:
>
> ```bash
> npm run dev
> ```
>
> Then open **http://localhost:5173** in your browser.

---

## 👤 Author

**Vivek Rai**
- GitHub: [@VivekRai-gif](https://github.com/VivekRai-gif)

---

<p align="center">
  Built with ❤️ using React + Vite + Tailwind CSS
</p>
