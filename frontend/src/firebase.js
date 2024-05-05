// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "final-project-78376.firebaseapp.com",
  projectId: "final-project-78376",
  storageBucket: "final-project-78376.appspot.com",
  messagingSenderId: "768178016501",
  appId: "1:768178016501:web:4e473339deaf7aa165b5bc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);