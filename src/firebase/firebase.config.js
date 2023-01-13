// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO6U4pDE-UfNjhE_xZBPWzZ45v8quPpZo",
  authDomain: "hotel-website-authentication.firebaseapp.com",
  projectId: "hotel-website-authentication",
  storageBucket: "hotel-website-authentication.appspot.com",
  messagingSenderId: "1056446783970",
  appId: "1:1056446783970:web:6e1404d58cc3ca061cd9bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;