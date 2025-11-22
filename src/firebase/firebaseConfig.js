// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAf5zb6bv2VxEGJ-IGrBmytopY5-sgHSgk",
  authDomain: "desainkuy-backend.firebaseapp.com",
  projectId: "desainkuy-backend",
  storageBucket: "desainkuy-backend.appspot.com", // ✅ ubah: ".app" → ".appspot.com"
  messagingSenderId: "313484491317",
  appId: "1:313484491317:web:efffaa7ac73da6c7b68f7c",
  measurementId: "G-STZGF297M1",
};

// 🔥 Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// 🔑 Inisialisasi Auth & Firestore
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// Export supaya bisa dipakai di LoginPage.js
export { auth, provider, db };
