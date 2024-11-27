import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA43ybircVFuT2By_L6sVbJLsRHdN-_15g",
  authDomain: "mase-ecommerce-app.firebaseapp.com",
  projectId: "mase-ecommerce-app",
  storageBucket: "mase-ecommerce-app.firebasestorage.app",
  messagingSenderId: "506848178950",
  appId: "1:506848178950:web:12579bfd91ef611dfb6487",
  measurementId: "G-W95R30L14J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app);

export {db, auth};