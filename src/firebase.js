import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_Zvh3IJFSlCrsIQNRFTg-s-sKieTJYqE",
    authDomain: "clone-project-d8bac.firebaseapp.com",
    projectId: "clone-project-d8bac",
    storageBucket: "clone-project-d8bac.appspot.com",
    messagingSenderId: "157794410138",
    appId: "1:157794410138:web:1a2722d4f8e39ebcff8923",
    measurementId: "G-XCGZB8GT3R"
  };

  const app = initializeApp(firebaseConfig);
  //const db = getFirestore(app);
  //const firebaseApp = firebase.initializeApp(firebaseConfig)
  //const db = getFirestore(firebaseApp)
//const db = firestore()
const auth = firebase.auth()
const firestore = firebase.firestore(); 
 
export { firestore, auth }

 
