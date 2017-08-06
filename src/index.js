// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// Our Dependencies
import './index.css';
import App from './components/App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
<App />,
document.getElementById('root'));
registerServiceWorker();
