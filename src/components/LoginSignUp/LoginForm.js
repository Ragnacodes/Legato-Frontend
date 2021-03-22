import React from 'react';
import {useState} from 'react';
import {TextField, Button} from '@material-ui/core'
import '../../styles/login-signup.scss'

import {connect} from 'react-redux';
import * as actions from '../../actions/login';
import {login} from '../../actions/auth';
import axios from 'axios';
function LoginForm({info, updateInfo, saveToken}) {

    const sendData = () =>
    {
        axios.post('http://localhost:8080/api/auth/login', {
            ...info,
          })
          .then(function (response) {
            console.log(response);
            saveToken(response.data.access_token)
          })
          .catch(function (error) {
            console.log(error);
          });

        // fetch('http://localhost:8080/api/auth/login', {
        // method: 'POST',
        // body: JSON.stringify({
        //     ...info,
        // })
        // })
        // .then((response) =>
        // {
        //     console.log("response",response.json())
        //     // saveToken(response.data.access_token)
        // })
        // .then(data =>{
        //     console.log("data",data)
        // });
    }

    const onChange = e =>
    {
        updateInfo(e.target.name,e.target.value.trim())  
    }
    const onSubmit = e => {
        
        e.preventDefault();
        console.log(info)
        sendData()

    };


  return (
    <div className="App">
     <form noValidate autoComplete="off" onSubmit={e => onSubmit(e)}
     className="login-form">

     <TextField
        className="text-field"
        onChange={onChange}
        name="username"
        label="Username"
        variant="outlined"
        size="small"
    />

    <TextField
        type="password"
        className="text-field"
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
        color="primary"
        className="form-button"
        >
        Sign In
    </Button>
     </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
    info : state.login.login_info,
});

const mapDispatchToProps = (dispatch) => ({
    updateInfo: (type,data) => dispatch(actions.updateLoginInfo(type,data)),
    saveToken: (token) => dispatch(login(token)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

