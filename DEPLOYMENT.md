# Deployment Guide: Bawarchi Restaurant & Banquet

This guide outlines the step-by-step deployment instructions for hosting the **Bawarchi Restaurant & Banquet** project. 

- **Frontend (Vite/React)**: Hosted on **Vercel**
- **Backend (Node.js/Express)**: Hosted on **Render**

---

## 🌐 Part 1: Deploying the Backend on Render

Render will host the Node.js API, connect to your MongoDB database, and manage Cloudinary media uploads.

### Step 1: Create a Render Account
1. Go to [Render](https://render.com) and sign up (GitHub integration is recommended).

### Step 2: Deploy using Render Blueprint (Recommended & Easiest)
We have added a `render.yaml` configuration file to the root of your project. This allows Render to configure the service automatically.
1. In your Render Dashboard, click **New +** and select **Blueprint**.
2. Connect your Git repository.
3. Render will automatically read the `render.yaml` file, detect the `bawarchi-backend` service, and prompt you to enter the environment variables.

### Step 3: Enter Environment Variables on Render
Fill in the following key-value pairs (you can copy values from your local `/server/.env` file):

| Variable Key | Suggested Value / Action | Description |
|---|---|---|
| `MONGO_URI` | `mongodb+srv://...` | Connection string to your MongoDB cluster |
| `JWT_SECRET` | *(Any secure random string)* | Used to sign tokens for Admin Authentication |
| `CLOUDINARY_CLOUD_NAME` | `dqyqut4cg` | Cloudinary storage account name |
| `CLOUDINARY_API_KEY` | `271194895775242` | Cloudinary access API key |
| `CLOUDINARY_API_SECRET` | `bN2ANpsODdf...` | Cloudinary access API secret |
| `PORT` | `5000` | Render defaults to this port |

4. Click **Approve** or **Deploy**.
5. Once deployment is complete, Render will provide you with a live URL (e.g., `https://bawarchi-backend.onrender.com`). **Save this URL.**

---

## 💻 Part 2: Deploying the Frontend on Vercel

Vercel will build and distribute the React frontend. It will communicate with the live Render URL.

### Step 1: Create a Vercel Account
1. Go to [Vercel](https://vercel.com) and sign up using GitHub.

### Step 2: Import your Repository
1. Click **Add New** -> **Project**.
2. Select your Bawarchi Restaurant repository.

### Step 3: Configure Project Settings
In the configuration screen, configure the following settings:
- **Framework Preset**: Select **Vite** (Vercel usually auto-detects this).
- **Root Directory**: Click *Edit* and select the **`client`** directory.
- **Build & Development Settings**: Keep defaults (Build Command: `npm run build`, Output Directory: `dist`).

### Step 4: Add Environment Variables on Vercel
Expand the **Environment Variables** section and add the API connection URL:

- **Key**: `VITE_API_URL`
- **Value**: `https://<your-render-backend-url>/api` (Replace with your actual live Render backend URL, e.g., `https://bawarchi-backend.onrender.com/api`)

### Step 5: Deploy
1. Click **Deploy**.
2. Vercel will build the frontend assets (using the `vercel.json` rewrite file we configured to prevent SPA 404 page reloads).
3. Once completed, Vercel will provide your live website URL (e.g. `https://bawarchi-restaurant.vercel.app`).

---

## 🔒 Part 3: Verify the Setup
1. Open your live Vercel URL.
2. Navigate to `/admin` to verify that routing works.
3. Try logging in with your admin credentials to verify connection with the Render database.
4. Try uploading a photo in the Gallery Manager to verify file transfer to Cloudinary.
