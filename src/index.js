import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Game from "./App";

const appRoot = document.getElementById('root');
ReactDOM.render(<Game />, appRoot);
registerServiceWorker();
