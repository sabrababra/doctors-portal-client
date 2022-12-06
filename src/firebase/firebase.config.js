// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env. REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// apiKey: "AIzaSyDDBdXtTqaIo9B4u_2OtibFVXyClp-LSmo",
//   authDomain: "doctors-portal-75a5f.firebaseapp.com",
//   projectId: "doctors-portal-75a5f",
//   storageBucket: "doctors-portal-75a5f.appspot.com",
//   messagingSenderId: "237577139509",
//   appId: "1:237577139509:web:2afcccde35fc69e992487c"