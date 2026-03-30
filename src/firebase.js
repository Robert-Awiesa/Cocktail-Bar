// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5wtdYPpQ-yNccHzR0Ium1qkKC6BVTuBY",
  authDomain: "tropical-sips.firebaseapp.com",
  projectId: "tropical-sips",
  storageBucket: "tropical-sips.firebasestorage.app",
  messagingSenderId: "627380176774",
  appId: "1:627380176774:web:b146847e7949a7f04fce07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);