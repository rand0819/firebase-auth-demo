import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: proccess.env.REACT_APP_FIREBASE_KEY,
    authDomain: proccess.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: proccess.env.REACT_APP_FIREBASE_DATABASE,
    projectId: proccess.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: proccess.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: proccess.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: proccess.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: proccess.env.REACT_APP_FIREBASE_MEASURMENT_ID
});

export default app;