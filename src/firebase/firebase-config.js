import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_Jg4JUwzwxX7wptOlZGsGt4ejn_S8PXI",
  authDomain: "react-journalapp-redux-17a56.firebaseapp.com",
  projectId: "react-journalapp-redux-17a56",
  storageBucket: "react-journalapp-redux-17a56.appspot.com",
  messagingSenderId: "196945577356",
  appId: "1:196945577356:web:8a4bbbbe66ea495a9742a9",
  measurementId: "G-NHRTLHSLCN",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
