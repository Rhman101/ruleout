import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC44U1QJ1hboUnm2CPE9WA12YCkkYbe4eM",
    authDomain: "ruleoutdev.firebaseapp.com",
    projectId: "ruleoutdev",
    storageBucket: "ruleoutdev.appspot.com",
    messagingSenderId: "813494117332",
    appId: "1:813494117332:web:cae31e3ace8cab0bf36c41",
    measurementId: "G-JQC0KXRYR3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, firebaseConfig };