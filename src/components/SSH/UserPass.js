import React from 'react';
import { TextField } from '@material-ui/core';

const UserPass = ({ info, handleChange }) => {
  return (
    <div className="password">
      <TextField
        type="password"
        name="password"
        className="text-field"
        label="Password"
        variant="outlined"
        size="small"
        value={info['password']}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
    </div>
  );
};

export default UserPass;
