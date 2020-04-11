import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAKh08PWZt59L_VG7D-DWbL99_5p-reC9c",
  authDomain: "scheduler-firebase-860f0.firebaseapp.com",
  databaseURL: "https://scheduler-firebase-860f0.firebaseio.com",
  projectId: "scheduler-firebase-860f0",
  storageBucket: "scheduler-firebase-860f0.appspot.com",
  messagingSenderId: "126991552564",
  appId: "1:126991552564:web:f23b3f8cb0a5b2a260ba61",
  measurementId: "G-LC22BL874W"
};

firebase.initializeApp(firebaseConfig);
export default firebase;