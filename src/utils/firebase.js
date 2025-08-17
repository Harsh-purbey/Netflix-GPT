// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTRDJAvrM_ZAM_HyMvGx4kTNLamHNzrY4",
    authDomain: "netflix-gpt-c3f70.firebaseapp.com",
    projectId: "netflix-gpt-c3f70",
    storageBucket: "netflix-gpt-c3f70.firebasestorage.app",
    messagingSenderId: "913369459719",
    appId: "1:913369459719:web:c17a7e253272b90ccdcea2",
    measurementId: "G-PKE65KEECM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth()