import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Prod
const firebaseConfig = {
    apiKey: "AIzaSyCPmvU7zRdu-gxMhs_e2eufhm8K_Rha-o0",
    authDomain: "ruleout-96a4d.firebaseapp.com",
    projectId: "ruleout-96a4d",
    storageBucket: "ruleout-96a4d.appspot.com",
    messagingSenderId: "998387347723",
    appId: "1:998387347723:web:76a24af49e3a5eea75f20e",
    measurementId: "G-DQ3HJBEG76"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, firebaseConfig };