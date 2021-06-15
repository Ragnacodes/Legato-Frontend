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
    connectionId: data.connectionId || '',
    command: data.command || '',
  });

  const [addAnchor, setAddAnchor] = useState(null);
  const [connectionLoading, setConnectionLoading] = useState(true);

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
    checkSSHConnection(connection.data).then((check) => {
      if (!check) return;
    });

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
  };

  const handleAddConnection = (e) => {
    setAddAnchor(e.currentTarget);
  };

  let disabledSave = !info['connectionId'] || !info['command'];

  return (
    <ServiceForm
      className="execute-command"
      title="Execute a command"
      disabledSave={disabledSave}
      handleSave={handleSave}
      handleCancel={handleCancel}
    >
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
                return <MenuItem value={c.id}>{c.name}</MenuItem>;
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

      <TextField
        multiline
        rowsMax={5}
        name="command"
        className="text-field"
        label="Command"
        variant="outlined"
        size="small"
        value={info['command']}
        onChange={handleChange}
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
  checkSSHConnection: (c) => dispatch(startCheckSSHConnection(c)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
