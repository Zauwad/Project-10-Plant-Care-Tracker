// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9RCrXdEgnbtZri_zFL9nNn_xeE2sBo28",
    authDomain: "plant-track-4558e.firebaseapp.com",
    projectId: "plant-track-4558e",
    storageBucket: "plant-track-4558e.firebasestorage.app",
    messagingSenderId: "27222255240",
    appId: "1:27222255240:web:f95b669eed9ab4cd1da13d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
