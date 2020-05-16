import { connect } from 'react-redux';
import ControlPanel from '../components/panel';
import { updateExpression } from '../actions/expression/update';
import { toggleHistory } from '../actions/history/toggle';

const mapStateToProps = (state) => {
    return { expression: state.expression };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateExpression: (value) => dispatch(updateExpression(value)),
        resetExpression: () => dispatch(updateExpression(0)),
        toggleHistory: () => dispatch(toggleHistory()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
