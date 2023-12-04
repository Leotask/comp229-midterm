
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5afWTgUIS59vOxITb995XdEELoCfWIes",
  authDomain: "clinic-9d88a.firebaseapp.com",
  projectId: "clinic-9d88a",
  storageBucket: "clinic-9d88a.appspot.com",
  messagingSenderId: "616533498917",
  appId: "1:616533498917:web:b96fa77804c099b8d1f3cc",
  measurementId: "G-7LEJNYSECR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);