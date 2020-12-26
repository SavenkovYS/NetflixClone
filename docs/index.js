if (module.hot) module.hot.accept()

import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';
import { GlobalStyles } from './global-styles';

ReactDOM.render(
    <>
        <GlobalStyles />
        <App />
    </>, 
    document.getElementById('root')
);

