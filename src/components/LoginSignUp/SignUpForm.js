import React from 'react';
import {useState,useEffect,useRef} from 'react';
import {TextField, Button} from '@material-ui/core'
import '../../styles/login-signup.scss'

import IconButton from '@material-ui/core/IconButton';

import InputAdornment from '@material-ui/core/InputAdornment';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ErrorIcon from '@material-ui/icons/Error';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import {connect} from 'react-redux';
import * as actions from '../../actions/signup';

function SignUpForm({info, errors,valid,
    updateInfo, validateInfo}) {

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [loading, setLoading] = useState(false)
    const [send, setSend] = useState(false)

    const noError = () =>
    {
        for (const [key, value] of Object.entries(errors)) {
          if(value)
              return false
        }
        return true
    }

    useEffect(() => {
      if(send)
      {
        if(noError())
        {
          sendData()
          console.log("send")
        }
      }
      return () => {
        setSend(false)
      }
    }, [errors])


    const sendData = () =>
    {
        setLoading(true)
        
        fetch('http://localhost:8080/api/auth/signup', {
          method: 'POST',
          body: JSON.stringify({
            ...info,
            confirm:"",
          })
        })
        .then((response) =>
        {
          setLoading(false)
          console.log("response",response)
        })
        .catch((error)=>
        {
          setLoading(false)
          console.log("error", error)
        })
    }


    const isEmpty = (object) =>
    {
        return Object.keys(object).length === 0 && object.constructor === Object
    }



    const validateAll = () =>
    {
        validateInfo("email",info["email"]);
        validateInfo("password",info["password"]);
        validateInfo("confirm",info["confirm"]);
        validateInfo("username",info["username"]);
    }

    const onChange = e =>
    {
        updateInfo(e.target.name,e.target.value.trim())
        validateInfo(e.target.name, e.target.value);
    }

    const onSubmit = e => {
        
        e.preventDefault();
        setSend(true)
        validateAll()
        //delay
        // if(noError())
        // {
        //   setSend(true)
        //   // sendData()
        // }
        // else
        // {
        //   console.log(errors)
        // }
    };

    
    
    
  return (
    <div>
      <Backdrop className="signup-backdrop" open={loading}>
        {loading &&<CircularProgress color="secondary" />}
      </Backdrop>
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
        size='small'
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
  size='small'
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
    size='small'
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
        size='small'
    />

    <Button
    disabled={loading}
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
    info : state.signup.signup_info,
    errors : state.signup.signup_errors,
});

const mapDispatchToProps = (dispatch) => ({
    updateInfo: (type,data) => dispatch(actions.updateInfo(type,data)),
    setError: (type,data) => dispatch(actions.setError(type,data)),
    deleteError: (type) => dispatch(actions.deleteError(type)),
    validateConfirmPassword: () => dispatch(actions.validateConfirmPassword()),
    validateInfo: (type,data) => dispatch(actions.validateInfo(type,data)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
  

