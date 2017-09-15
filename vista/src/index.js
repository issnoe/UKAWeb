import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import RouterHandle from './components/RouterHandle';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterHandle />, document.getElementById('root'));
registerServiceWorker();
