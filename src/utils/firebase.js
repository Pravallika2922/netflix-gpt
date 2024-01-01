// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI5yML9klqV4qK9Qag1M2FkeLwg82CGxY",
  authDomain: "netflix-gpt-d6b5e.firebaseapp.com",
  projectId: "netflix-gpt-d6b5e",
  storageBucket: "netflix-gpt-d6b5e.appspot.com",
  messagingSenderId: "634916567825",
  appId: "1:634916567825:web:cc0b54def824704564eab0",
  measurementId: "G-C5G70KMWFQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
