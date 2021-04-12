import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCvi9NYCK59_aynS_QC_M0ROpR_NikBLu0",
    authDomain: "react-slack-clone-b6eb7.firebaseapp.com",
    databaseURL: "https://react-slack-clone-b6eb7-default-rtdb.firebaseio.com",
    projectId: "react-slack-clone-b6eb7",
    storageBucket: "react-slack-clone-b6eb7.appspot.com",
    messagingSenderId: "963016432945",
    appId: "1:963016432945:web:845b8d6209d75a1d9ae410",
    measurementId: "G-C02F7QDJV6"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;