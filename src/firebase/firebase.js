import firebase from 'firebase/app';
import 'firebase/auth'

const prodConfig = {
  apiKey: "AIzaSyDsTv2qow-6tglNHBtlt_ARqVHLMnZ2o28",
  authDomain: "react-firebase-auth-prod-61b2c.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-prod-61b2c.firebaseio.com",
  projectId: "react-firebase-auth-prod-61b2c",
  storageBucket: "react-firebase-auth-prod-61b2c.appspot.com",
  messagingSenderId: "908585883789"
};

const devConfig = {
  apiKey: "AIzaSyCezwcW0bDRJAS4Q56_nr3GTtJM_E-Be7w",
  authDomain: "react-firebase-authentic-afc77.firebaseapp.com",
  databaseURL: "https://react-firebase-authentic-afc77.firebaseio.com",
  projectId: "react-firebase-authentic-afc77",
  storageBucket: "react-firebase-authentic-afc77.appspot.com",
  messagingSenderId: "917829017220"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig

if (!firebase.app.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
