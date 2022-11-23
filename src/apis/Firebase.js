// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//authentication
import {getAuth} from "firebase/auth"
//firebase database
import {getDatabase} from "firebase/database"
//firebase storage
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrfr0oSdhBon8VCWWxG2nqM6fOv6hGBtQ",
  authDomain: "makemytravel-9d0e5.firebaseapp.com",
  projectId: "makemytravel-9d0e5",
  storageBucket: "makemytravel-9d0e5.appspot.com",
  messagingSenderId: "1076926694188",
  appId: "1:1076926694188:web:8e265b4523355fae432289",
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export let auth = getAuth(firebaseApp);
export let database = getDatabase(firebaseApp);
export let storage = getStorage(firebaseApp);

export default firebaseApp;