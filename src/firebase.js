import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBgxDv9EB90lGR29yIU4rePXaHjB6vga5k",
    authDomain: "twitterbysharjeel.firebaseapp.com",
    projectId: "twitterbysharjeel",
    storageBucket: "twitterbysharjeel.appspot.com",
    messagingSenderId: "805464365495",
    appId: "1:805464365495:web:55038ceaf979cf29b2b032",
    measurementId: "G-Q4546XEHR5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;