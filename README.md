# Project: Content Delivery Web Application

A professional React-based web application designed to dynamically fetch and display content from a Firebase backend.

## Overview

This application serves as a content delivery platform, utilizing a responsive grid layout to present various types of media, including project details and interactive video content.

## Technical Architecture and Flow

1.  **System Initialization**: The frontend, built with React 19 and Vite, initializes the Firebase SDK using project-specific credentials.
2.  **Data Retrieval**: Upon component mounting, the application performs an asynchronous fetch from a Firebase Firestore collection ('tiles').
3.  **State and Error Handling**: Data is managed within the application state. The system includes robust error handling that falls back to a predefined local dataset if the remote fetch fails, ensuring continuous availability.
4.  **Component Rendering**: A higher-order 'Grid' component orchestrates the display of individual content blocks:
    *   **Standard Tiles**: Display project metadata and images.
    *   **Video Tiles**: Incorporate interactive YouTube embeds for video-based content.
5.  **User Experience**: The interface employs modern CSS techniques, including glassmorphism and smooth transitions, to provide a premium user experience without sacrificing performance.

## Firebase Integration

The application leverages Firebase for backend-as-a-service (BaaS) functionality:

*   **Firestore**: Acts as the primary document store for content metadata.
*   **Services Layer**: All Firebase-related logic is encapsulated within `src/services/firebase.js`.

### Configuration Steps

1.  Configure credentials in `src/services/firebase.js`.
2.  Populate a `tiles` collection in the Firestore Database.
3.  Install dependencies and start the development server:
    ```bash
    npm install
    npm run dev
    ```

## Technology Stack

*   **Frontend**: React 19, Vite, Tailwind CSS v4
*   **Backend**: Google Firebase (Firestore)
*   **Icons**: Lucide React
