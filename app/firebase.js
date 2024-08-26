// firebase.js
// import firebase from 'firebase/app';
// import 'firebase/firestore';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC57ojWRxljN2mGw1Ub0XMswqentSfJ4uk",
    authDomain: "donation-project-5c8dc.firebaseapp.com",
    projectId: "donation-project-5c8dc",
    storageBucket: "donation-project-5c8dc.appspot.com",
    messagingSenderId: "560871968255",
    appId: "1:560871968255:web:6bd9c9f8e21242f76b2bca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

export { db };


// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//      match /donations/{document=**} {
//       allow read, write: if false;
//     }
//   }
// }