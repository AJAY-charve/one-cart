import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-c14e1.firebaseapp.com",
  projectId: "loginonecart-c14e1",
  storageBucket: "loginonecart-c14e1.firebasestorage.app",
  messagingSenderId: "998331951957",
  appId: "1:998331951957:web:8d39087124aab32deddddc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
