import React, { useState, useEffect } from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { Info } from '@material-ui/icons';
import PopoverForm from '../PopoverForm';
import UserPass from './UserPass';
import UserKey from './UserKey';
const SSHConnection = ({ info, handleChange, handleCancel, handleSave }) => {
  return (
    <PopoverForm
      className="ssh-connection "
      title="New SSH Connection"
      disabledSave={false}
      handleSave={() => {
        handleSave(info);
      }}
      handleCancel={handleCancel}
    >
      <TextField
        name="name"
        className="text-field"
        label="Connection name"
        variant="outlined"
        size="small"
        value={info['name']}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />

      <TextField
        name="host"
        className="text-field"
        label="Host"
        variant="outlined"
        size="small"
        value={info['host']}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />

      <TextField
        name="authType"
        className="text-field"
        size="small"
        select
        label="Authorization type"
        value={info['authType']}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        variant="outlined"
      >
        <MenuItem value={0}>Username and password</MenuItem>
        <MenuItem value={1}>Username and private key</MenuItem>
      </TextField>

      <TextField
        name="username"
        className="text-field"
        label="Username"
        variant="outlined"
        size="small"
        value={info['username']}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />

      {info['authType'] === 0 ? (
        <UserPass info={info} handleChange={handleChange} />
      ) : (
        <UserKey info={info} handleChange={handleChange} />
      )}
    </PopoverForm>
  );
};

export default SSHConnection;
