// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBpv2UGi9hbz8iEXKbg-gzp3QoPt-zTIVI",
    authDomain: "linkedln-clone-6a283.firebaseapp.com",
    projectId: "linkedln-clone-6a283",
    storageBucket: "linkedln-clone-6a283.appspot.com",
    messagingSenderId: "29779108156",
    appId: "1:29779108156:web:bea47afb1386a6c3a7fe39",
    measurementId: "G-C84CT69QXD"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
