import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID

    // apiKey: "AIzaSyAUsmdRnnVdlqWYDGsAjytJu0V3t91ob7I",
    // authDomain: "charity-project-d0459.firebaseapp.com",
    // projectId: "charity-project-d0459",
    // storageBucket: "charity-project-d0459.appspot.com",
    // messagingSenderId: "232757928303",
    // appId: "1:232757928303:web:6306ed6cf58606ad96489a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

export { db };

