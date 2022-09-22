// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnviroments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyCllbbpiLmp71_PoXyG6XEcwZ5MvCcinos",
//   authDomain: "react-curso-a96fd.firebaseapp.com",
//   projectId: "react-curso-a96fd",
//   storageBucket: "react-curso-a96fd.appspot.com",
//   messagingSenderId: "938292154947",
//   appId: "1:938292154947:web:a83cd75d1cd851c488faf6",
// };

const env = getEnviroments();
console.log(env);

// console.log(process.env);
// console.log(import.meta.env);

//Testing
const firebaseConfig = {
  apiKey: "AIzaSyDYldhNxYAd5T0ZvZzR-xtMdcXPSw5QTSk",
  authDomain: "test-react-211fa.firebaseapp.com",
  projectId: "test-react-211fa",
  storageBucket: "test-react-211fa.appspot.com",
  messagingSenderId: "584703150276",
  appId: "1:584703150276:web:17952f354d8c2c976e2191",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
