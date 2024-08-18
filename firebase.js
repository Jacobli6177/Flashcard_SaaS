// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvUdmR60QPUopBcJKBIVEFnN8S_0q1AGM",
  authDomain: "flashcardsaas-24ae5.firebaseapp.com",
  projectId: "flashcardsaas-24ae5",
  storageBucket: "flashcardsaas-24ae5.appspot.com",
  messagingSenderId: "672273831012",
  appId: "1:672273831012:web:abe0254b464bd6843c3b71",
  measurementId: "G-CTR70PQZDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}