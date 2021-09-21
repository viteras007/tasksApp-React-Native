import firebase from 'firebase';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA30PxlgfknZ1gUVOd_RIl-kMQ5RBX2CtY",
    authDomain: "task-d52d9.firebaseapp.com",
    projectId: "task-d52d9",
    storageBucket: "task-d52d9.appspot.com",
    messagingSenderId: "867007809739",
    appId: "1:867007809739:web:0049a07859e5551e46734e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore();
  export default database;