# Content Delivery Web App

A modern, responsive ReactJS web application that dynamically loads and displays content tiles from Firebase Firestore. Built with Vite and Tailwind CSS.

## Features

- 📱 Responsive CSS Grid layout with 6 dynamic tiles
- 🔥 Firebase Firestore integration for dynamic content delivery
- 🎨 Premium UI design with hover effects, glassmorphism, and smooth transitions
- 🎥 Special Video Tile (Tile 6) featuring an embedded YouTube player
- ⏳ Loading skeletons while content fetches
- 🌙 Modern, clean aesthetic utilizing Tailwind CSS v4

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation
```bash
# Navigate to the project directory
cd "Task 4"

# Install dependencies
npm install
```

### 3. Firebase Setup

To connect to your own Firebase project:

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or select an existing one.
3. Navigate to **Project Settings** > **General** and register a Web App.
4. Copy your Firebase Configuration object.
5. Open `src/services/firebase.js` in this project.
6. Replace the `firebaseConfig` object with your actual credentials:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```
7. In the Firebase Console, go to **Firestore Database** and create a database (Start in Test Mode for development).
8. Create a new collection named **`tiles`**.

### 4. Sample Firestore Data

Add documents to your `tiles` collection using the following schema format:

```json
{
  "title": "Deep Learning Sumo Robot",
  "imageUrl": "https://placehold.co/600x400/94a3b8/fff?text=Sumo+Robot",
  "type": "project"
}
```

**For the 6th Tile (YouTube Video):**
```json
{
  "title": "How to Build a Drone",
  "imageUrl": "https://placehold.co/600x400/fbbf24/fff?text=Drone+Tutorial",
  "type": "video",
  "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
```
*(You can use the provided `sample_firestore_data.json` file as a reference.)*

### 5. Running the App Locally

Start the Vite development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`. 
(*Note: If Firebase is not configured or data is missing, the app will gracefully fall back to displaying mock data so you can preview the UI instantly.*)

---

## 📁 Project Structure

```text
├── src/
│   ├── components/
│   │   ├── Grid.jsx       # Responsive grid layout logic
│   │   ├── Tile.jsx       # Standard content tile UI
│   │   └── VideoTile.jsx  # Tile with interactive YouTube embed
│   ├── services/
│   │   └── firebase.js    # Firebase initialization & generic fetch logic
│   ├── App.jsx            # Main app page & state management
│   ├── index.css          # Tailwind CSS global import
│   └── main.jsx           # React app entry point
├── sample_firestore_data.json # Example DB schema
├── tailwind.config.js     # Tailwind 4 config (Integrated in Vite)
└── package.json           # Dependencies & Scripts
```

## Tech Stack
- **React 19** (Functional Components, Hooks)
- **Vite** (Build Tool)
- **Tailwind CSS v4** (Styling System)
- **Firebase** (Firestore + SDK)
- **Lucide React** (Icons)
