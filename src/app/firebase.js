import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAXsLD2wshwu-Mql6vWgdhkwtXtmILXitM",
    authDomain: "rgv-elite.firebaseapp.com",
    databaseURL: "https://rgv-elite.firebaseio.com",
    storageBucket: "rgv-elite.appspot.com",
    messagingSenderId: "670684505884"
};

var firebaseApp = firebase.initializeApp(config);

export default firebaseApp.database();