import { connect } from 'react-redux';
import Display from '../components/display';

const mapStateToProps = (state) => {
    return { expression: state.expression };
};

export default connect(mapStateToProps)(Display);
