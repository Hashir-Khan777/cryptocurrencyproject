// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3V31yuqUmnYoXuhS3qHsonU0Zc3jEpFQ",
  authDomain: "inventonbtc.firebaseapp.com",
  projectId: "inventonbtc",
  storageBucket: "inventonbtc.appspot.com",
  messagingSenderId: "156709926526",
  appId: "1:156709926526:web:234c569d17937951bbca2f",
  measurementId: "G-BMYLCXFEB7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const db = getFirestore(app);
