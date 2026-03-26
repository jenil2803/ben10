import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

// Configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Fetches tile content from Firestore.
 * Expects a collection named 'tiles'
 */
export const fetchContentTiles = async () => {
  try {
    const tilesCollection = collection(db, 'tiles');
    // We can order by a field like 'order' or 'createdAt' if defined
    // const q = query(tilesCollection, orderBy('order', 'asc'), limit(6));
    
    // For simplicity, just grabbing docs
    const querySnapshot = await getDocs(tilesCollection);
    
    const tilesData = [];
    querySnapshot.forEach((doc) => {
      tilesData.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return tilesData;
  } catch (error) {
    console.error("Error fetching tiles from Firebase:", error);
    // Return empty array or throw error depending on how you want to handle it
    throw error;
  }
};

export { db, app };
