import { connect } from 'react-redux';
import Operators from '../components/operators';
import { updateExpression } from '../actions/expression/update';

const mapStateToProps = (state) => {
    return { expression: state.expression };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateExpression: (value) => dispatch(updateExpression(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Operators);
