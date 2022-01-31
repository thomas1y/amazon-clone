import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAiqwOqZ0UHevYlh9XWnxCvt2s1yYopICw",
  authDomain: "clone-c6250.firebaseapp.com",
  projectId: "clone-c6250",
  storageBucket: "clone-c6250.appspot.com",
  messagingSenderId: "693761227272",
  appId: "1:693761227272:web:1e4889da2216fcf1f0afbd",
  measurementId: "G-HPHTCMGKR9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };