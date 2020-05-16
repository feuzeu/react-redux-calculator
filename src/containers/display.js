import { connect } from 'react-redux';
import Display from '../components/display';
import { updateHistory } from '../actions/history';

const mapStateToProps = (state) => {
    return { expression: state.expression };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateHistory: (expression) => dispatch(updateHistory(expression))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
