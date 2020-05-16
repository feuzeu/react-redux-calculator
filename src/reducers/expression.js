import {
    APPEND_DIGIT,
    APPEND_OPERATOR,
    CHOP_EXPRESSION,
    EVAL_EXPRESSION,
    SET_EXPRESSION } from '../actions/expression/constants';

const initialState = 0;

const evalExpression = (expression) => {
    /* eslint-disable */
    // This rule is important in production apps!
    // Read more: https://eslint.org/docs/rules/no-eval
    // To simplify the functionality in this course we use eval
    const calcFunc = eval;
    /* eslint-enable */
    try {
        return calcFunc(expression);
    } catch (e) {
        console.error("Error: Incorrect Expression of digits & operators :(");
        return expression;
    }
}

const chopExpression = (expression) => {
    const curExpression = String(expression).trim();
    const newExpWithRemovedChar = curExpression.substring(0, (curExpression.length - 1)).trim();

    return newExpWithRemovedChar === '' ? 0 : newExpWithRemovedChar;
}

export const expressionReducer = (state = initialState, {type, payload = null}) => {
    // Important de mettre ceci, car React appelle
    // initialement tous les reducers avec un payload indefini
    if(payload === null) {
        return state;
    }

    switch(type) {
    case APPEND_DIGIT:
        return (state === '0' || state === 0) ? payload : `${state}${payload}`;
    case APPEND_OPERATOR:
        return `${state} ${payload} `
    case CHOP_EXPRESSION:
        return chopExpression(state);
    case EVAL_EXPRESSION:
        return evalExpression(state);
    case SET_EXPRESSION:
        return payload;
    default:
        return state;
    }
}

export default expressionReducer;
