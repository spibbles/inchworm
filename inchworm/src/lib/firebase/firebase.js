// @ts-nocheck

import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyBuwbZMkwmkuSecqVFzYAmncGcRm_nfypY",
    authDomain: "inchwormapp.firebaseapp.com",
    databaseURL: "https://inchwormapp-default-rtdb.firebaseio.com",
    projectId: "inchwormapp",
    storageBucket: "inchwormapp.appspot.com",
    messagingSenderId: "424325577063",
    appId: "1:424325577063:web:71198646d0b154ac4857c2",
    measurementId: "G-VYFFTJ6P15"
  };
  
  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const provider = new GoogleAuthProvider();