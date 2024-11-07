// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsq9H_WUy3IoIu-LPagQrh3PIQkaGipNg",
  authDomain: "ebuddy-tes.firebaseapp.com",
  projectId: "ebuddy-tes",
  storageBucket: "ebuddy-tes.firebasestorage.app",
  messagingSenderId: "229978970711",
  appId: "1:229978970711:web:2c19726fa26e607e166112",
  measurementId: "G-96WPY4FRX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };