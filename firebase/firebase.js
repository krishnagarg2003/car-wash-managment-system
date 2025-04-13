// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRGZIV5oUqBsZBkvMkiZkOwdsh_T3E8wU",
  authDomain: "car-wash-managment.firebaseapp.com",
  projectId: "car-wash-managment",
  storageBucket: "car-wash-managment.appspot.com",
  messagingSenderId: "579258805778",
  appId: "1:579258805778:web:bd5e22f77146d2ebd332cb",
  measurementId: "G-S0VYQ7T75D"
};

const app = initializeApp(firebaseConfig);
console.log("✅ Firebase initialized");

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
