// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMrLUy5uHuXk-EDkeoOsPpgnZEBbxhFW4",
    authDomain: "lesan-el-arab-78ac5.firebaseapp.com",
    projectId: "lesan-el-arab-78ac5",
    storageBucket: "lesan-el-arab-78ac5.firebasestorage.app",
    messagingSenderId: "266648015549",
    appId: "1:266648015549:web:15513e09c6e5214275ddd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
