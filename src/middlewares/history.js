import {
    APPEND_DIGIT,
    APPEND_OPERATOR,
    CHOP_EXPRESSION } from '../actions/expression/constants';
import { updateHistory } from '../actions/history';

const historyMiddleware = (store) => (next) => (action) => {
    next(action)
    // Run after the reducers
    if (action.type === APPEND_DIGIT ||
        action.type === APPEND_OPERATOR ||
        action.type === CHOP_EXPRESSION) {
        store.dispatch(updateHistory(store.getState().expression));
    }
}

export default historyMiddleware;
