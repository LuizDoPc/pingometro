import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyChl-FM7Ogo9e047lSqB-yXxR8AHoWXHdo",
  authDomain: "pingometro-9102f.firebaseapp.com",
  databaseURL: "https://pingometro-9102f.firebaseio.com",
  projectId: "pingometro-9102f",
  storageBucket: "pingometro-9102f.appspot.com",
  messagingSenderId: "1012599295825",
  appId: "1:1012599295825:web:b29f7f39c689d95703cd70",
  measurementId: "G-GCYZQTQ8MV"
};

export const firebaseImpl = firebase.initializeApp(config);
//export const firebaseDatabase = firebase.database();
