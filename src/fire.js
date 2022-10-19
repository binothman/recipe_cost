import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfi07e20wGSRaUGjEXJYSL3kE853kdG6k",
  authDomain: "recipe-cost-c1ee2.firebaseapp.com",
  projectId: "recipe-cost-c1ee2",
  storageBucket: "recipe-cost-c1ee2.appspot.com",
  messagingSenderId: "808257732418",
  appId: "1:808257732418:web:adc4be7977ee4643d412db"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const itemsRef = collection(db, "items");

export {
  db,
  itemsRef,
}
