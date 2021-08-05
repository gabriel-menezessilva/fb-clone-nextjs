import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDh7bLtUHmHTeuiNBDAlcuh8-m7IMI2L8Y",
    authDomain: "facebook-clone-d9b5e.firebaseapp.com",
    projectId: "facebook-clone-d9b5e",
    storageBucket: "facebook-clone-d9b5e.appspot.com",
    messagingSenderId: "570391695811",
    appId: "1:570391695811:web:175aefa891588cba26ed76"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage =  firebase.storage();

export { db, storage };