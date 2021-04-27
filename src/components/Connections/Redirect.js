import { useEffect } from 'react';
import { connect } from 'react-redux';
import { startAddConnection } from '../../actions/connections';


const Redirect = ({addConnection}) => {
    useEffect(() => {
        addConnection();
        window.close();
    },[addConnection]);

    return null;
}

const mapDispatchToProps = (dispatch) => ({
    addConnection: (type, data) => dispatch(startAddConnection(type, data)),
  });

export default connect(null, mapDispatchToProps)(Redirect);