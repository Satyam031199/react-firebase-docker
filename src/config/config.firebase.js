import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFFe2ZS3o0qlnVURUfdygBbTXF4ntCXfA",
  authDomain: "react-firebase-6272f.firebaseapp.com",
  projectId: "react-firebase-6272f",
  storageBucket: "react-firebase-6272f.appspot.com",
  messagingSenderId: "76281556920",
  appId: "1:76281556920:web:6f1c7e66f7f6d7853d694d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
