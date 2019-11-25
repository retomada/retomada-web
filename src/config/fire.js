import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA9RbQ0MUjKR--Y0doRTuyKPfuF9c-HJE4",
    authDomain: "retomada-iep.firebaseapp.com",
    databaseURL: "https://retomada-iep.firebaseio.com",
    projectId: "retomada-iep",
    storageBucket: "retomada-iep.appspot.com",
    messagingSenderId: "715005384129",
    appId: "1:715005384129:web:e0c014b48a9d999ac54b40"
};

const fire = firebase.initializeApp(config);

export default fire;