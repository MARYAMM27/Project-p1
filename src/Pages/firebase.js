// Import the Firebase functions you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

// Your Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDhbvunmOxmN5FrRAq62oS5yn7_o5X91FE',
  authDomain: 'vite-project-6b126.firebaseapp.com',
  projectId: 'vite-project-6b126',
  storageBucket: 'vite-project-6b126.appspot.com',
  messagingSenderId: '811500113931',
  appId: '1:811500113931:web:1eb49f7106668beecf370e',
  measurementId: 'G-DRFW76J0RN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app); // Firestore database initialization

export { auth, db }; // Export both auth and Firestore
