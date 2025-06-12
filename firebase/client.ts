// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB__olme-O0oXAKeJUhvSDJQ8xRMd5HAis",
  authDomain: "prepwise-c0d9c.firebaseapp.com",
  projectId: "prepwise-c0d9c",
  storageBucket: "prepwise-c0d9c.firebasestorage.app",
  messagingSenderId: "8172505377",
  appId: "1:8172505377:web:f3af208fec0ea0142c5660",
  measurementId: "G-J4FRYNP21X"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
