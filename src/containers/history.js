import { connect } from 'react-redux';
import History from '../components/history';
import { setExpression } from '../actions/expression';
import { toggleHistory } from '../actions/history';

const mapStateToProps = (state) => {
    return { history: state.history };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleHistory: () => dispatch(toggleHistory()),
        setExpression: (expression) => {
            dispatch(setExpression(expression));
            dispatch(toggleHistory());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
