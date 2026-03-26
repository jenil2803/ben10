import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

// TODO: Replace with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl820PQq30T6eTtN37w3ogqxqOG0mMfRU",
  authDomain: "content-delivery-app-9271a.firebaseapp.com",
  projectId: "content-delivery-app-9271a",
  storageBucket: "content-delivery-app-9271a.firebasestorage.app",
  messagingSenderId: "192100626235",
  appId: "1:192100626235:web:4a439da06c0a481e52111e"
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
