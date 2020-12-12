  import firebase from 'firebase';
  import 'firebase/firestore';
  
  const firebaseConfig = {
    apiKey: "AIzaSyAHix2sql1nakf1_VE1bCW9-jrdtW_tPZk",
    authDomain: "projetorn-fb-47c2f.firebaseapp.com",
    databaseURL: "https://projetorn-fb-47c2f.firebaseio.com",
    projectId: "projetorn-fb-47c2f",
    storageBucket: "projetorn-fb-47c2f.appspot.com",
    messagingSenderId: "241216843072",
    appId: "1:241216843072:web:dd15eee3e3576c464d1ea5",
    measurementId: "G-B8MX12TEW6"
  };
 
 var app = firebase.initializeApp(firebaseConfig);

 export const conexaoFS = app.firestore();