import { connect } from 'react-redux';
import Operators from '../components/operators';
import { appendOperator, evalExpression } from '../actions/expression';

const mapDispatchToProps = (dispatch) => {
    return {
        appendOperator: (value) => dispatch(appendOperator(value)),
        evalExpression: () => dispatch(evalExpression())
    };
};

export default connect(null, mapDispatchToProps)(Operators);
