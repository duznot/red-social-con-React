import * as firebase from 'firebase'
// import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "api de firebase", // aqui poner su api de firebase de su base de datos 
    authDomain: "redsocialreact-ed89f.firebaseapp.com",
    databaseURL: "https://redsocialreact-ed89f.firebaseio.com",
    projectId: "redsocialreact-ed89f",
    storageBucket: "",
    messagingSenderId: "463873443383",
    appId: "1:463873443383:web:673ec9f6e0434940"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
