import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCjRDrXPfY2QG9fIif0hGD16KWD2mxphkg",
    authDomain: "fir-b091f.firebaseapp.com",
    projectId: "fir-b091f",
    storageBucket: "fir-b091f.appspot.com",
    messagingSenderId: "707237631212",
    appId: "1:707237631212:web:b7974d90e973dcad56c1c9",
    measurementId: "G-Z70GT1QH89"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };