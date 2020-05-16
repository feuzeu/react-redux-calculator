import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from './middlewares/logging';
import historyMiddleware from './middlewares/history';

// Without logging middleware
// const store = createStore(rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// With logging and history middlewares
let middlewares = applyMiddleware(loggingMiddleware, historyMiddleware);
const store = createStore(rootReducer, compose(middlewares,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
