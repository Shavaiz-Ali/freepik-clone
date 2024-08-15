// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBeP-AxOA7TyA5LQU_QncrgxMXnXAXfIE",
  authDomain: "freepik-4a8da.firebaseapp.com",
  projectId: "freepik-4a8da",
  storageBucket: "freepik-4a8da.appspot.com",
  messagingSenderId: "774324908881",
  appId: "1:774324908881:web:f9d2d1d0c979bf57b95970",
  measurementId: "G-Q1013JRDBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only if supported and in client-side environment
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
