// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDRWdAvBrUA0yD5OWD8t7nRk2CZf8JuDs",
  authDomain: "coffee-app-f9c1f.firebaseapp.com",
  projectId: "coffee-app-f9c1f",
  storageBucket: "coffee-app-f9c1f.firebasestorage.app",
  messagingSenderId: "884357043393",
  appId: "1:884357043393:web:3d8a4f32f3ce7af1cbf040"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);