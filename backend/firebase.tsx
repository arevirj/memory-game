import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { addDoc } from "firebase/firestore";  //testing

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyClUUJROc5SD00NwPmTXbZ7ZYlTBjheRyQ",
    authDomain: "memory-app-10e6b.firebaseapp.com",
    projectId: "memory-app-10e6b",
    storageBucket: "memory-app-10e6b.firebasestorage.app",
    messagingSenderId: "694618445473",
    appId: "1:694618445473:web:9954b60b3d4066761f82e0",
    measurementId: "G-MLQD1J6P3J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app;
  

