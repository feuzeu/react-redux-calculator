import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from './middlewares/logging';
import historyMiddleware from './middlewares/history';
import apiMiddleware from './middlewares/api';

// Without middlewares
// const store = createStore(rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// With logging, history and api middlewares
let middlewares = applyMiddleware(historyMiddleware, loggingMiddleware, apiMiddleware);
// Add the Redux Devtools extension to the middlewares if it is installed.
if ((window.__REDUX_DEVTOOLS_EXTENSION__)) {
    middlewares = compose(middlewares, window.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(rootReducer, middlewares);

export default store;
