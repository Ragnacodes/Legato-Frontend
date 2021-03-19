import React from 'react';
import {useState} from 'react';
import {TextField, Button} from '@material-ui/core'
import '../../styles/login-signup.scss'

import {connect} from 'react-redux';
import * as actions from '../../actions/signup';
import {login} from '../../actions/auth';

function LoginForm({info, updateInfo, saveToken}) {

    const sendData = () =>
    {
        fetch('http://localhost:8080/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
            ...info,
        })
        })
        .then((response) =>
        {
            console.log("response",response)
            saveToken(response.access_token)
        })
    }

    const onChange = e =>
    {
        updateInfo(e.target.name,e.target.value.trim())  
    }
    const onSubmit = e => {
        
        e.preventDefault();
        console.log(info)

    };

    
    
    
  return (
    <div className="App">
     <form noValidate autoComplete="off" onSubmit={e => onSubmit(e)}
     className="login-form">

     <TextField
        className="text-field"
        required
        onChange={onChange}
        name="email"
        label="Email"
        variant="outlined"
        size="small"
    />

    <TextField
        className="text-field"
        required
        onChange={onChange}
        name="password"
        label="Password"
        variant="outlined"
        size="small"
    />

    <Button
        type='submit'
        fullWidth
        variant='contained'
        color="secondary"
        className="form-button"
        >
        Sign In
    </Button>
     </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
    info : state.signup.info,
});

const mapDispatchToProps = (dispatch) => ({
    updateInfo: (type,data) => dispatch(actions.updateInfo(type,data)),
    saveToken: (token) => dispatch(login(token)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

