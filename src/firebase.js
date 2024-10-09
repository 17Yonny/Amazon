import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA_Zvh3IJFSlCrsIQNRFTg-s-sKieTJYqE",
    authDomain: "clone-project-d8bac.firebaseapp.com",
    projectId: "clone-project-d8bac",
    storageBucket: "clone-project-d8bac.appspot.com",
    messagingSenderId: "157794410138",
    appId: "1:157794410138:web:1a2722d4f8e39ebcff8923",
    measurementId: "G-XCGZB8GT3R"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth}

 
