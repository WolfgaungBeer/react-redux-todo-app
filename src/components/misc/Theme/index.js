import { connect } from 'react-redux';
import Theme from './Theme';

const mapStateToProps = state => ({
    theme: state.scado.theme,
});

export default connect(mapStateToProps)(Theme);
