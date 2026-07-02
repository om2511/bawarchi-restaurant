# Bawarchi Restaurant & Banquet

A premium, modern web application for **Bawarchi Restaurant & Banquet** — a family-friendly, 100% vegetarian, Jain, and Swaminarayan dining destination located in Kalol, Gujarat.

This project features a fully responsive customer website, interactive 3D elements, and a comprehensive admin management panel.

---

## 🚀 Key Features

* **3D Food Scene (Home Page)**: An interactive 3D scene built with React Three Fiber featuring floating serving plates, bowls, spices, saffron gems, sauce drops, steam particles, and golden lighting.
* **Menu Manager & Viewer**: Comprehensive menu categorization (Punjabi, Tandoori, Chinese, Mexican, Continental Sizzlers, Desserts, etc.) with mobile-responsive sticky category selectors and admin creation/edit controls.
* **Gallery Manager**: Categorized photo gallery with interactive 3D hover effects, responsive fullscreen lightbox viewer, and Cloudinary media upload integration.
* **Reservations Viewer**: Table booking reservation viewer with search, status filters (Pending, Confirmed, Cancelled), and instant approval/rejection actions.
* **Aesthetics & Styling**: Built on a modern Teal, Olive, Amber, and Cream color palette with custom SVGs (no emoji), smooth scroll animations, and premium styling tokens.
* **Custom 404 Page**: A food-themed "Empty Plate" fallback page for non-existent paths.
* **Responsiveness**: Entire layout (both public site and admin dashboards) optimized to prevent horizontal overflow and display beautifully on all screen resolutions.

---

## 🛠️ Tech Stack

### Frontend (Client)
* **Framework**: React 19 + Vite 8
* **Styling**: Tailwind CSS
* **Animations**: Framer Motion
* **3D Rendering**: Three.js + React Three Fiber + Drei
* **Routing**: React Router DOM (SPA routing configured)
* **HTTP Client**: Axios

### Backend (Server)
* **Runtime**: Node.js
* **Framework**: Express (v5)
* **Database**: MongoDB (Mongoose ORM)
* **Media Storage**: Cloudinary (Multer file parsing)
* **Authentication**: JWT (JSON Web Tokens) + Bcryptjs

---

## 📁 Repository Structure

```text
├── client/                 # Frontend React Application
│   ├── src/
│   │   ├── admin/          # Admin dashboard & management components
│   │   ├── components/     # Reusable layout and interactive modules
│   │   ├── pages/          # Main website pages (Home, Menu, About, etc.)
│   │   └── api/            # API connection handlers
│   └── vercel.json         # Vercel SPA routing configuration
│
├── server/                 # Backend Node.js API
│   ├── config/             # Database connection setup
│   ├── routes/             # Express API endpoints
│   ├── models/             # Mongoose database schemas
│   ├── seed/               # Database seeder scripts
│   └── index.js            # Express server entry point
│
├── render.yaml             # Render Blueprint configuration
├── DEPLOYMENT.md           # Live server deployment guide
└── README.md               # Main project documentation
```

---

## ⚙️ Local Development

### Prerequisites
* Node.js (v18+)
* MongoDB database (local or Atlas cluster)
* Cloudinary account (for gallery uploads)

### 1. Setup Backend
1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file inside `server/` with the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```
4. Seed default menu items and admin credentials (admin credentials default to `admin@bawarchi.com` / `Bawarchi@2025`):
   ```bash
   npm run seed:admin
   npm run seed
   ```
5. Start development server:
   ```bash
   npm run dev
   ```

### 2. Setup Frontend
1. Navigate to the client folder:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

---

## 🌐 Live Deployment
Detailed instructions for hosting the frontend on **Vercel** and the backend API on **Render** can be found in **[DEPLOYMENT.md](file:///mnt/c/Users/Om Prajapati/Desktop/bawarchi-restaurant/bawarchi-restaurant/DEPLOYMENT.md)**.
