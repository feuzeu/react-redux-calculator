import {
    APPEND_DIGIT,
    APPEND_OPERATOR,
    CHOP_EXPRESSION,
    EVAL_EXPRESSION,
    SET_EXPRESSION } from './constants';

// Append a character to the current expression
export const appendDigit = (value) => {
    return { type: APPEND_DIGIT, payload: value };
}

// Append an operator to the current expression
export const appendOperator = (value) => {
    return { type: APPEND_OPERATOR, payload: value };
}

// Delete the last char from the current expression
export const chopExpression = () => {
    return { type: CHOP_EXPRESSION, payload: true };
}

// Evaluate the current expression
export const evalExpression = () => {
    return { type: EVAL_EXPRESSION, payload: true };
}

// Set the current expression
export const setExpression = (value) => {
    return { type: SET_EXPRESSION, payload: value };
}
