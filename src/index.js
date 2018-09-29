import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App.js';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers.js'
import 'tachyons';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots});
const store =
  createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App/>
    </Provider>
  </div>, document.getElementById('root'));
registerServiceWorker();
