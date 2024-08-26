// firebase.js
// import firebase from 'firebase/app';
// import 'firebase/firestore';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUsmdRnnVdlqWYDGsAjytJu0V3t91ob7I",
    authDomain: "charity-project-d0459.firebaseapp.com",
    projectId: "charity-project-d0459",
    storageBucket: "charity-project-d0459.appspot.com",
    messagingSenderId: "232757928303",
    appId: "1:232757928303:web:6306ed6cf58606ad96489a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

export { db };

