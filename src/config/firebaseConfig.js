// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxQTKH35dO4DyrpvXEMi1QEfJ6i7taNGM",
  authDomain: "notespane-19f22.firebaseapp.com",
  projectId: "notespane-19f22",
  storageBucket: "notespane-19f22.appspot.com",
  messagingSenderId: "356092294638",
  appId: "1:356092294638:web:2b58503ea26ce32a3a4aff",
  measurementId: "G-MC6HJ7TDXD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
