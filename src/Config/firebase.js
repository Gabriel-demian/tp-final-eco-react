import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4s8LaGDr8GaD4v3tHNQI4YfzebTDmbkE",
    authDomain: "react-test-d634c.firebaseapp.com",
    databaseURL: "https://react-test-d634c.firebaseio.com",
    projectId: "react-test-d634c",
    storageBucket: "react-test-d634c.appspot.com",
    messagingSenderId: "437836540011",
    appId: "1:437836540011:web:8f819df1d4d72009ad292e"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.auth = firebase.auth();
firebase.db=db;
export default firebase;