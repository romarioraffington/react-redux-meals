// External Dependencies
import { createStore } from 'redux';

// Our Dependencies
import reducers from './reducers';

export default createStore (
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)