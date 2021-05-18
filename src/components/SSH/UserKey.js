import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { Info } from '@material-ui/icons';

const UserKey = ({ info, handleChange }) => {
  return (
    <div className="private-key">
      <TextField
        disabled
        name="key"
        className="text-field"
        label="Private Key"
        variant="outlined"
        size="small"
        value={info['key'] ? info['key'].name : ''}
      />

      <input
        name="key"
        accept="*"
        className="file-input"
        id="contained-button-file"
        type="file"
        onChange={(e) => handleChange(e.target.name, e.target.files[0])}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
};

export default UserKey;
