import React, { useState, useEffect } from 'react';
import { MenuItem, IconButton, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { connect } from 'react-redux';
import {
  startGetConnections,
  startCheckSSHConnection,
} from '../../../../actions/connections';
import ServiceForm from '../../../PopoverForm';
import ConnectionFormPopper from '../../../SSH/ConnectionFormPopper';
import { errorNotification } from '../../../Layout/Notification';
import AutoSuggestField from '../../../AutoSuggestField';

const Form = ({
  id,
  data,
  sshConnections,
  getSshConnections,
  checkSSHConnection,
  editElement,
  setAnchorEl,
}) => {
  const [info, setInfo] = useState({
    name: data.name || '',
    connectionId: data.connectionId || '',
    command: data.command || '',
  });

  const [addAnchor, setAddAnchor] = useState(null);
  const [connectionLoading, setConnectionLoading] = useState(true);
  const [checkingConnection, setCheckingConnection] = useState(false);
  useEffect(() => {
    getSshConnections().then(() => {
      setConnectionLoading(false);
    });
  }, [getSshConnections]);

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCommandChange = (value) => {
    setInfo((prev) => ({
      ...prev,
      command: value,
    }));
  };

  const handleCancel = () => {
    setAnchorEl(null);
    setInfo({
      connection: data.connectionId || '',
      command: data.command || '',
    });
  };

  const handleSave = () => {
    const connection =
      sshConnections.find((c) => c.id === info['connectionId']) || {};
    const authType = connection.data['password']
      ? 'password'
      : connection.data['sshKey']
      ? 'sshKey'
      : '';
    setCheckingConnection(true);
    checkSSHConnection(connection.data, authType).then((check) => {
      if (!check) {
        errorNotification('Service is not available.');
        setCheckingConnection(false);
      } else {
        setCheckingConnection(false);
        const updates = {
          name: info.name,
          data: {
            ...data,
            ...connection.data,
            ...info,
            commands: info['command'].split('\n'),
          },
        };
        editElement(id, updates);
        setAnchorEl(null);
      }
    });
  };

  const handleAddConnection = (e) => {
    setAddAnchor(e.currentTarget);
  };

  let disabledSave =
    !info['connectionId'] || !info['command'] || checkingConnection;

  return (
    <ServiceForm
      className="execute-command"
      title="Execute a command"
      disabledSave={disabledSave}
      handleSave={handleSave}
      handleCancel={handleCancel}
    >
      <TextField
        name="name"
        className="text-field"
        label="Name"
        variant="outlined"
        size="small"
        value={info['name']}
        onChange={handleChange}
      />
      <div className="connection-field">
        {connectionLoading ? (
          <TextField
            className="text-field"
            size="small"
            label="Connection"
            value="Loading..."
            variant="outlined"
            disabled
          />
        ) : (
          <TextField
            name="connectionId"
            className="text-field"
            size="small"
            select
            label="Connection"
            value={info['connectionId']}
            onChange={handleChange}
            variant="outlined"
          >
            {sshConnections &&
              sshConnections.map((c) => {
                return (
                  <MenuItem key={c.id} value={c.id}>
                    {c.name}
                  </MenuItem>
                );
              })}
          </TextField>
        )}

        <IconButton
          name="addConnection"
          size="small"
          className="add-icon"
          onClick={handleAddConnection}
        >
          <Add />
        </IconButton>
      </div>

      <ConnectionFormPopper anchor={addAnchor} setAnchor={setAddAnchor} />
      <AutoSuggestField
        class="text-field"
        ancestors={data.ancestors}
        onChange={handleCommandChange}
        fullWidth
        multiline
        rowsMax={5}
        name="command"
        className="text-field"
        label="Command"
        variant="outlined"
        size="small"
        value={info['command']}
        helperText="Write each command in a line."
      />
    </ServiceForm>
  );
};
const mapStateToProps = (state) => ({
  sshConnections: state.connections.filter((c) => c.type === 'sshes'),
});

const mapDispatchToProps = (dispatch) => ({
  getSshConnections: () => dispatch(startGetConnections()),
  checkSSHConnection: (c, type) => dispatch(startCheckSSHConnection(c, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
