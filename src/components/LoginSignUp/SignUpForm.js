import React from 'react';
import {useState,useEffect,useRef} from 'react';
import {TextField, Button} from '@material-ui/core'
import '../../styles/login-signup.scss'

import IconButton from '@material-ui/core/IconButton';

import InputAdornment from '@material-ui/core/InputAdornment';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


import {connect} from 'react-redux';
import * as actions from '../../actions/signup';

function SignUpForm({info, errors,
    updateInfo, validateInfo}) {

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const sendData = () =>
    {
        fetch('http://localhost:8080/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
            ...info,
            confirm:"",
        })
        })
        .then((response) =>
        {
            console.log("response",response)
        })
    }


    const isEmpty = (object) =>
    {
        return Object.keys(object).length === 0 && object.constructor === Object
    }

    const noError = () =>
    {
        for (const [key, value] of Object.entries(errors)) {
            if(value)
                return false
        }
        return true
    }

    const validateAll = () =>
    {
        validateInfo("email",info["email"]);
        validateInfo("password",info["password"]);
        validateInfo("confirm",info["confirm"]);
    }

    const onChange = e =>
    {
        updateInfo(e.target.name,e.target.value.trim())
        validateInfo(e.target.name, e.target.value);
    }

    const onSubmit = e => {
        
        e.preventDefault();
        validateAll()
        if(noError())
        {
            sendData()
        }
        else
        {
            console.log(errors)
        }
    };

    
    
    
  return (
    <div>
     <form noValidate autoComplete="off" onSubmit={e => onSubmit(e)}
     className="signup-form">

     <TextField
        className="text-field"
        required
        onChange={onChange}
        name="email"
        error={!!errors["email"]}
        label="Email"
        helperText={errors["email"]}
        variant="outlined"
    />

    <TextField
    type={showPassword ? 'text' : 'password'}
    autoComplete="false"
    className="text-field"
    required
    onChange={onChange}
    name="password"
    error={!!errors["password"]}
    label="Password"
    helperText={errors["password"]}
    variant="outlined"
    InputProps={{
        endAdornment:(
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={()=>setShowPassword((prev)=>!prev)}
            onMouseDown={(e)=>e.preventDefault()}
            edge="end"
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
  )}}
    />

    <TextField
    type={showPasswordConfirm ? 'text' : 'password'}
    className="text-field"
    required
    onChange={onChange}
    name="confirm"
    error={!!errors["confirm"]}
    label="Confirm Password"
    helperText={errors["confirm"]}
    variant="outlined"
    InputProps={{
        endAdornment:(
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={()=>setShowPasswordConfirm((prev)=>!prev)}
            onMouseDown={(e)=>e.preventDefault()}
            edge="end"
          >
            {showPasswordConfirm ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
  )
    }}
    />

<TextField
        className="text-field"
        required
        onChange={onChange}
        name="username"
        error={!!errors["username"]}
        label="Username"
        helperText={errors["username"]}
        variant="outlined"
    />

    <Button
        type='submit'
        fullWidth
        variant='contained'
        className="form-button"
        color="primary"
        >
        Sign Up
    </Button>
     </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
    info : state.signup.info,
    errors : state.signup.errors,
});

const mapDispatchToProps = (dispatch) => ({
    updateInfo: (type,data) => dispatch(actions.updateInfo(type,data)),
    setError: (type,data) => dispatch(actions.setError(type,data)),
    deleteError: (type) => dispatch(actions.deleteError(type)),
    validateConfirmPassword: () => dispatch(actions.validateConfirmPassword()),
    validateInfo: (type,data) => dispatch(actions.validateInfo(type,data)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
  

