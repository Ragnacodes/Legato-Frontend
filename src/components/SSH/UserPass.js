import React,{ useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const UserPass = ({ info, handleChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password">
      <TextField
        type={showPassword ? 'text' : 'password'}
        name="password"
        className="text-field"
        label="Password"
        variant="outlined"
        size="small"
        value={info['password']}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((prev) => !prev)}
                onMouseDown={(e) => e.preventDefault()}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default UserPass;
