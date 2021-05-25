import Rull from './Rull';
import Reducer from '../Reducer';
import {connect} from 'react-redux';
import {roll,changeSpin,changeBet} from '../Reducer';

const mapStateToProps = (state) => {
    return{
      rotation: state.combine.rotation,
      i : state.combine.i
    }
}

const mapDispatchToProps = {
    roll,changeSpin,changeBet
}

const RullContainer = connect(mapStateToProps,mapDispatchToProps)(Rull);

export default RullContainer;
