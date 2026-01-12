// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDeqnFVf3st0Zcwc4Pff3qQVxuf1QHeTew",
  authDomain: "insta-clone-man.firebaseapp.com",
  projectId: "insta-clone-man",
  storageBucket: "insta-clone-man.firebasestorage.app",
  messagingSenderId: "78658891053",
  appId: "1:78658891053:web:7939f169da0ae038c837a4",
  measurementId: "G-QT5ZCNXTPR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage}
