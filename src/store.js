import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

// Without logging middleware
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
