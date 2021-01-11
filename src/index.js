import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';
import { GlobalStyles } from './global-styles';
import { FirebaseContext } from './context/firebase.js';

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

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <>
        <FirebaseContext.Provider value = {{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
        
    </>, 
    document.getElementById('root')
);

