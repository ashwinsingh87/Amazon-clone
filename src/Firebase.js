import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAXLdlcoaUEHcYpQcoExwnXC2xMbpsQ-Cg",
  authDomain: "clone-96f16.firebaseapp.com",
  projectId: "clone-96f16",
  storageBucket: "clone-96f16.appspot.com",
  messagingSenderId: "954505006586",
  appId: "1:954505006586:web:725f921cbbce3f6ec26843",
  measurementId: "G-7D4S99S10Y",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
