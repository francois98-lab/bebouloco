import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getFirestore }  from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey:            "AIzaSyBuCLlpBqxc9y9TU4rWsmCAlJNrHN20yz8",
  authDomain:        "lesbebouslocos.firebaseapp.com",
  projectId:         "lesbebouslocos",
  storageBucket:     "lesbebouslocos.firebasestorage.app",
  messagingSenderId: "498635002834",
  appId:             "1:498635002834:web:df35b7451f1413d3442e0b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
