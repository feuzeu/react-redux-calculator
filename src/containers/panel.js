import { connect } from 'react-redux';
import ControlPanel from '../components/panel';
import { chopExpression, setExpression } from '../actions/expression';
import { toggleHistory } from '../actions/history';

const mapDispatchToProps = (dispatch) => {
    return {
        chopExpression: () => dispatch(chopExpression()),
        resetExpression: () => dispatch(setExpression(0)),
        toggleHistory: () => dispatch(toggleHistory()),
    };
};

export default connect(null, mapDispatchToProps)(ControlPanel);
