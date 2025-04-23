// public/js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage.js";

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
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
