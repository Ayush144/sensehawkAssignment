import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB-pvgdaOpGWvdUW2F3DqZV21iErjtLAyE",
    authDomain: "sensehawkblogs.firebaseapp.com",
    projectId: "sensehawkblogs",
    storageBucket: "sensehawkblogs.appspot.com",
    messagingSenderId: "995545177763",
    appId: "1:995545177763:web:dc887e7f53625dcd9a2916"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseapp.firestore();