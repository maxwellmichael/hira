import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAkzeCDkbf3eIkWd8bmAi9WcjJwqIoWAYc",
  authDomain: "hira-backend.firebaseapp.com",
  projectId: "hira-backend",
  storageBucket: "hira-backend.appspot.com",
  messagingSenderId: "940862859574",
  appId: "1:940862859574:web:e49695980680caa72f2b97",
  measurementId: "G-Q38QFRMTFE",
  };

export const reactReduxFirebaseConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {firebase, timestamp, googleAuthProvider};