import Present from './Present';
import Reducer from '../Reducer';
import {connect} from 'react-redux';
import {roll,betNumber} from '../Reducer';

const mapStateToProps = (state) => {
    return{

    }
}

const mapDispatchToProps = {
    roll,betNumber
}

const Container = connect(mapStateToProps,mapDispatchToProps)(Present);

export default Container;
