import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import { Info } from '@material-ui/icons';

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
