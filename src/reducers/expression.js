import {
    APPEND_DIGIT,
    APPEND_OPERATOR,
    CHOP_EXPRESSION,
    EVAL_EXPRESSION,
    SET_EXPRESSION } from '../actions/expression/constants';

const initialState = 0;

export const expressionReducer = (state = initialState, {type, payload = null}) => {
    // Important de mettre ceci, car React appelle
    // initialement tous les reducers avec un payload indefini
    if(payload === null) {
        return state;
    }

    switch(type) {
    case APPEND_DIGIT:
        // Append the digit to the expression, or set the expression to the digit if it is '0'.
        return (state === '0' || state === 0) ? payload : `${state}${payload}`;
    case APPEND_OPERATOR:
        // Append the operator, wrapped with spaces, to the expression.
        return `${state} ${payload} `
    case CHOP_EXPRESSION:
        // Remove the last char and trim the expression.
        const curExpression = String(state).trim();
        const newExpression = curExpression.substring(0, (curExpression.length - 1)).trim();
        return newExpression === '' ? 0 : newExpression;
    case EVAL_EXPRESSION:
        // An api call is made to the server. Meanwhile, keep the same expression.
        return state;
    case SET_EXPRESSION:
        // Replace the expression with the incoming value.
        return payload;
    default:
        return state;
    }
}

export default expressionReducer;
