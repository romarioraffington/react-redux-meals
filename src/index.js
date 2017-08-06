// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Our Dependencies
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<App />,
document.getElementById('root'));
registerServiceWorker();
