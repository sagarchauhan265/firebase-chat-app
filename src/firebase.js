// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAh5hinYErEVM7AZMcXUpG2UwtGBjSzBvA",
  authDomain: "chat-me-722cf.firebaseapp.com",
  databaseURL: "https://chat-me-722cf-default-rtdb.firebaseio.com",
  projectId: "chat-me-722cf",
  storageBucket: "chat-me-722cf.appspot.com",
  messagingSenderId: "305755175685",
  appId: "1:305755175685:web:a132233a6d1f9b8602556c",
  measurementId: "G-738ZW091BX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
