import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

try {
  firebase.initializeApp({
    apiKey: "AIzaSyC_nwCxhlCfoPjxsOpkoCfyzIg6vzgbJuU",
    authDomain: "fir-auth-change-45922.firebaseapp.com",
    projectId: "fir-auth-change-45922",
    storageBucket: "fir-auth-change-45922.appspot.com",
    messagingSenderId: "980822422938",
    appId: "1:980822422938:web:3f84d73b7de9f20ba53623",
  });
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const fire = firebase;
export default fire;
