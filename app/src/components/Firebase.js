import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDHrlWrFrGE1ZnavB4xbwsAlB5Q3uyLykg",
    authDomain: "cursoreact-25426.firebaseapp.com",
    projectId: "cursoreact-25426",
    storageBucket: "cursoreact-25426.appspot.com",
    messagingSenderId: "627085357401",
    appId: "1:627085357401:web:937295e36004c70f369c48"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);