  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD5NV585ouZO8p3LcCiEvUcHL0YO92j3xo",
    authDomain: "react-groupplanner.firebaseapp.com",
    projectId: "react-groupplanner",
    storageBucket: "react-groupplanner.appspot.com",
    messagingSenderId: "604272598097",
    appId: "1:604272598097:web:02d3669055afc5d2772c70"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;