// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from '../reducer/reducer.js';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router-dom'


// const history = syncHistoryWithStore(browserHistory, store)

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware();
// 
const middlewares = [thunk, myRouterMiddleware]

export const store = createStore(
  reducer, applyMiddleware(...middlewares));
