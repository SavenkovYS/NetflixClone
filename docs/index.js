import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import App from './App.js';
import { GlobalStyles } from './global-styles';
import { FirebaseContext } from './context/firebase.js';

import { seedDatabase } from './seed';

const config = {
    apiKey: "AIzaSyCNQ5d0BfpML-bzEngvycxxjLxlRtlv4xU",
    authDomain: "netflixclone-f8668.firebaseapp.com",
    databaseURL: "https://netflixclone-f8668-default-rtdb.firebaseio.com",
    projectId: "netflixclone-f8668",
    storageBucket: "netflixclone-f8668.appspot.com",
    messagingSenderId: "841203964269",
    appId: "1:841203964269:web:42f4ff02fca3b7580f6264",
    measurementId: "G-4V50JEN99Z"
}

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

ReactDOM.render(
    <>
        <FirebaseContext.Provider value = {{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
        
    </>, 
    document.getElementById('root')
);

