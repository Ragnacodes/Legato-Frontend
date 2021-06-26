import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TextField, MenuItem } from '@material-ui/core';
import PopoverForm from '../PopoverForm';
import UserPass from './UserPass';
import UserKey from './UserKey';
import {
  startAddSSHConnection,
  startCheckSSHConnection,
} from '../../actions/connections';
import { errorNotification } from '../Layout/Notification';
const SSHConnection = ({
  info,
  handleChange,
  handleCancel,
  handleSave,
  addConnection,
  checkSSHConnection,
}) => {
  const [loading, setLoading] = useState(false);

  const handleAddConnection = () => {
    setLoading(true);
    const authType = info['authType'] == 0? 'password' : 'sshKey';
    checkSSHConnection(info, authType).then((res) => {
      if (res) {
        setLoading(false);
        addConnection(info);
        handleSave();
      } else {
        setLoading(false);
        errorNotification('Service is not available.');
      }
    });
  };

  let disabledSave =
    loading ||
    !info['name'] ||
    !info['host'] ||
    !info['username'] ||
    !(info['authType'] === 0 ? info['password'] : info['sshKey']);

  return (
    <PopoverForm
      className="ssh-connection "
      title="New SSH Connection"
      disabledSave={disabledSave}
      handleSave={handleAddConnection}
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

const mapStateToProps = (state) => ({
  sshConnections: state.connections,
});

const mapDispatchToProps = (dispatch) => ({
  addConnection: (info) => dispatch(startAddSSHConnection(info)),
  checkSSHConnection: (info, type) => dispatch(startCheckSSHConnection(info, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SSHConnection);
