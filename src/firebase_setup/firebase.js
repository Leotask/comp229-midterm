// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore"
// //import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA2xhc_aA8mWuYU34zqEO5AyRztSZpKPZ4",
//   authDomain: "my-project-1531702898498.firebaseapp.com",
//   databaseURL: "https://my-project-1531702898498-default-rtdb.firebaseio.com",
//   projectId: "my-project-1531702898498",
//   storageBucket: "my-project-1531702898498.appspot.com",
//   messagingSenderId: "38039037147",
//   appId: "1:38039037147:web:47d089daa5c016f81298fe",
//   measurementId: "G-SBPW7H55B0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const firestore = getFirestore(app)
// //const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need

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