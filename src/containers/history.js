import { connect } from 'react-redux';
import History from '../components/history';
import { updateExpression } from '../actions/expression/update';
import { toggleHistory } from '../actions/history/toggle';

const mapStateToProps = (state) => {
    return { history: state.history };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateExpression: (value) => dispatch(updateExpression(value)),
        toggleHistory: () => dispatch(toggleHistory()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
