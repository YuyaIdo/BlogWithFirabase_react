import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAv3jliECiW05nCSvo7nHN5sPkXJDTkS9g",
  authDomain: "blog-72f5c.firebaseapp.com",
  projectId: "blog-72f5c",
  storageBucket: "blog-72f5c.appspot.com",
  messagingSenderId: "132002389152",
  appId: "1:132002389152:web:d9a273e1d3acca139c3dc5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
