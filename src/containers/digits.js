import { connect } from 'react-redux';
import Digits from '../components/digits';
import { updateExpression } from '../actions/expression/update';

const mapStateToProps = (state) => {
    return { expression: state.expression };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateExpression: (value) => dispatch(updateExpression(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Digits);
