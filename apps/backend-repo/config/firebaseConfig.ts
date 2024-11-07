// Import the functions you need from the SDKs you need
import * as admin from "firebase-admin";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  credential: admin.credential.cert('config/ebuddy-tes-firebase-adminsdk-abici-d7ab83f2f5.json')
};

// Initialize Firebase
const app = admin.initializeApp(firebaseConfig);
export default app;