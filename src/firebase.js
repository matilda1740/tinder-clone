// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBDuheI5qV-7DS7tBLaYMkPPo4dO9E01M4",
  authDomain: "tinder-clone-e3404.firebaseapp.com",
  databaseURL: "https://tinder-clone-e3404.firebaseio.com",
  projectId: "tinder-clone-e3404",
  storageBucket: "tinder-clone-e3404.appspot.com",
  messagingSenderId: "752899468107",
  appId: "1:752899468107:web:01535b1744faaae213d6ce",
  measurementId: "G-M73SC11ST3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
