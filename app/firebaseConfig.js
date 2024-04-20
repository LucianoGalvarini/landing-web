import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRBd3-Cwi9XBgIayntVnM14KKLrbQpTcw",
  authDomain: "landing-test-8ed23.firebaseapp.com",
  projectId: "landing-test-8ed23",
  storageBucket: "landing-test-8ed23.appspot.com",
  messagingSenderId: "16604613191",
  appId: "1:16604613191:web:a72179762d4b80d7557f62",
  measurementId: "G-GGX178X78F",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
