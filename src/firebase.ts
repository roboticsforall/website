// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUDgpOaHjOC-Brw6Vn64xRlhDIJAI1sus",
  authDomain: "robotics-for-all-9009f.firebaseapp.com",
  projectId: "robotics-for-all-9009f",
  storageBucket: "robotics-for-all-9009f.appspot.com",
  messagingSenderId: "840899978250",
  appId: "1:840899978250:web:8cf6107693b8a327b16bf3",
  measurementId: "G-B9JHKTVCMP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
