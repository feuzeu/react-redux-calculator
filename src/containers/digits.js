import { connect } from 'react-redux';
import Digits from '../components/digits';
import { appendDigit } from '../actions/expression';

const mapDispatchToProps = (dispatch) => {
    return {
        appendDigit: (value) => dispatch(appendDigit(value))
    };
};

export default connect(null, mapDispatchToProps)(Digits);
