import { combineReducers } from 'redux';
import expressionReducer from './expression';
import historyReducer from './history';

export default combineReducers({
    expression: expressionReducer,
    history: historyReducer
});
