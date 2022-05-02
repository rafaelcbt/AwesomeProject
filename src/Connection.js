import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjePYVnqULesuaUk_-fkt7t2sPyDFnJXQ",
  authDomain: "meuapp-518ee.firebaseapp.com",
  databaseURL: "https://meuapp-518ee-default-rtdb.firebaseio.com",
  projectId: "meuapp-518ee",
  storageBucket: "meuapp-518ee.appspot.com",
  messagingSenderId: "170760098080",
  appId: "1:170760098080:web:61d788f7aeda9f3f9fc745",
  measurementId: "G-4CQT3RHRS6"
};

// Initialize Firebase
if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
}
export default firebase;