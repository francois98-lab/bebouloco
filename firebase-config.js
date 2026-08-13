import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getFirestore }  from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey:            "AIzaSyDpDr29d3kz5_4PYTe7xnAFWOtjaWCaTCY",
  authDomain:        "lesbebouslocos.firebaseapp.com",
  projectId:         "lesbebouslocos",
  storageBucket:     "lesbebouslocos.firebasestorage.app",
  messagingSenderId: "498635002834",
  appId:             "1:498635002834:web:786eb34d0b78a7ab442e0b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

