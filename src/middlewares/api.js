import { EVAL_EXPRESSION } from '../actions/expression/constants';
import { setExpression } from '../actions/expression';
import { evaluateExpression } from '../services/api';

const apiMiddleware = (store) => (next) => (action) => {
    if (action.type === EVAL_EXPRESSION) {
        // Evaluate the expression and set the result as the new expression.
        evaluateExpression(store.getState().expression)
            .then(result => result && store.dispatch(setExpression(result)));
    }

    next(action)
}

export default apiMiddleware;
