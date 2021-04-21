import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { startAddConnection } from '../../actions/connections';


const Redirect = ({addConnection}) => {
    useEffect(() => {
        addConnection();
    },[addConnection]);
    return (
        <div style={{textAlign:"center", position:"center", padding:40, margin:"auto", marginTop:100}}>
            <form
                autoComplete="off"
                className="login-form"
                style = {{width:300, margin:"auto"}}
            >
                <Typography variant="h5">
                    service successfully added
                </Typography>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addConnection: (type, data) => dispatch(startAddConnection(type, data)),
  });

export default connect(null, mapDispatchToProps)(Redirect);