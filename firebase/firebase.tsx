import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Prod
// const firebaseConfig = {
//     apiKey: "AIzaSyCPmvU7zRdu-gxMhs_e2eufhm8K_Rha-o0",
//     authDomain: "ruleout-96a4d.firebaseapp.com",
//     projectId: "ruleout-96a4d",
//     storageBucket: "ruleout-96a4d.appspot.com",
//     messagingSenderId: "998387347723",
//     appId: "1:998387347723:web:76a24af49e3a5eea75f20e",
//     measurementId: "G-DQ3HJBEG76"
//   };

  // Dev
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