// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI9ZYmqDfKhs-Y7CmjSi2M2qeElPLXDF0",
  authDomain: "help-chameleon.firebaseapp.com",
  projectId: "help-chameleon",
  storageBucket: "help-chameleon.appspot.com",
  messagingSenderId: "513285773034",
  appId: "1:513285773034:web:13d1505835f696a6442993",
  measurementId: "G-CB3DZGNYS6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
