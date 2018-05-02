import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './circle.css';
import App from './components/App';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
