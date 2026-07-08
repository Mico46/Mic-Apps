import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig2 = {
  apiKey: "AIzaSyABurHtyHsiDGL_K4qCtbbtP9YAyPe1NCU",
  authDomain: "menaherya-3a20b.firebaseapp.com",
  databaseURL: "https://menaherya-3a20b-default-rtdb.firebaseio.com",
  projectId: "menaherya-3a20b",
  storageBucket: "menaherya-3a20b.appspot.com",
  messagingSenderId: "941606001064",
  appId: "1:941606001064:web:bcae70cc80471440f6659d",
  measurementId: "G-7HDL7QSR5Z"
};
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

export const db = getFirestore(app)
