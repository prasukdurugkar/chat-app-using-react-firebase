import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chatx70.firebaseapp.com",
  projectId: "chatx70",
  storageBucket: "chatx70.appspot.com",
  messagingSenderId: "530790046322",
  appId: "1:530790046322:web:8a39c9923bed06d50440eb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
