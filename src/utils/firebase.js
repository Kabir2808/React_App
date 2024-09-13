// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr9jMDK52SmIcRR26wEksn3zUl1glu85s",
  authDomain: "ecommerce-f42fd.firebaseapp.com",
  projectId: "ecommerce-f42fd",
  storageBucket: "ecommerce-f42fd.appspot.com",
  messagingSenderId: "514824173827",
  appId: "1:514824173827:web:9db30d2bfabca692c81136",
  measurementId: "G-D8S7W3NGDP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
