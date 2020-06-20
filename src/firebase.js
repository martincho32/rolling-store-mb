import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBfSw-wef2NTzqqppNjVw_l6ai3TcWR6UM",
  authDomain: "rolling-store-mb.firebaseapp.com",
  databaseURL: "https://rolling-store-mb.firebaseio.com",
  projectId: "rolling-store-mb",
  storageBucket: "rolling-store-mb.appspot.com",
  messagingSenderId: "917642968817",
  appId: "1:917642968817:web:2b280219822e394db3f350"
};

firebase.initializeApp(firebaseConfig);

const firebaseApp = firebase;

export { firebaseApp };
