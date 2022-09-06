// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCllbbpiLmp71_PoXyG6XEcwZ5MvCcinos",
  authDomain: "react-curso-a96fd.firebaseapp.com",
  projectId: "react-curso-a96fd",
  storageBucket: "react-curso-a96fd.appspot.com",
  messagingSenderId: "938292154947",
  appId: "1:938292154947:web:a83cd75d1cd851c488faf6",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
