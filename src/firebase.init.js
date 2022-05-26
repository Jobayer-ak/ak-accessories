// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgH46GoiTD6tINxXhGMHvLtpQpoYU3jCI",
  authDomain: "ak-accessories.firebaseapp.com",
  projectId: "ak-accessories",
  storageBucket: "ak-accessories.appspot.com",
  messagingSenderId: "61544117349",
  appId: "1:61544117349:web:a101db18b115baa020428c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
