import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBFTx9ys0ZPZVjBPx7AzXqfXyuyZaC8fRA",
    authDomain: "fireblogsyt-6afaa.firebaseapp.com",
    projectId: "fireblogsyt-6afaa",
    storageBucket: "fireblogsyt-6afaa.appspot.com",
    messagingSenderId: "123481748059",
    appId: "1:123481748059:web:4944ad2a96f928a6c1457e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();