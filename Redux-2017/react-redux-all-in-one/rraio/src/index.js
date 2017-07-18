import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import {Provider} from 'react-redux';
import ReduxApp from './redux/index.js';

ReactDOM.render(
    <ReduxApp />,
    document.getElementById('root')
);

// PWA
registerServiceWorker();
