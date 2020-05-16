import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from './middlewares/logging';

// Without logging middleware
// const store = createStore(rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// With logging middleware
const store = createStore(rootReducer, compose(applyMiddleware(loggingMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
