import React, { useState, useEffect } from 'react';
import { MenuItem, IconButton, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { connect } from 'react-redux';
import { getConnection } from '../../../../actions/ssh';
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
  getConnection,
  getSshConnections,
  checkSSHConnection,
  editElement,
  setAnchorEl,
}) => {
  const [info, setInfo] = useState({
    connection: data.connection || '',
    command: data.command || '',
  });

  const [errors, setErrors] = useState({
    connection: !!data.connection,
    command: !!data.command,
  });

  const [addAnchor, setAddAnchor] = useState(null);

  useEffect(() => {
    getSshConnections();
  }, [getSshConnections]);

  useEffect(() => {
    if (!info['command']) {
      setErrors((prev) => ({
        ...prev,
        command: true,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        command: false,
      }));
    }
    if (!!info['connection']) {
      setErrors((prev) => ({
        ...prev,
        connection: false,
      }));
    }
  }, [info]);

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancel = () => {
    setAnchorEl(null);
    setInfo({
      connection: data.connection || '',
      command: data.command || '',
    });
    setErrors({
      command: !!data.command,
      connection: !!data.connection,
    });
  };

  const handleSave = () => {
    checkSSHConnection(JSON.parse(info['connection'].Data).data).then(
      (check) => {
        if (!check) return;
      }
    );

    const updates = {
      name: info.name,
      data: {
        ...data,
        ...info,
        commands: info['command'].split('\n'),
        ...JSON.parse(info['connection'].Data).data,
      },
    };
    editElement(id, updates);
    setAnchorEl(null);
  };

  const handleAddConnection = (e) => {
    setAddAnchor(e.currentTarget);
  };

  useEffect(() => {
    console.log(info);
  }, [info]);

  let disabledSave = errors['connection'] || errors['command'];

  return (
    <ServiceForm
      className="execute-command"
      title="Execute a command"
      disabledSave={disabledSave}
      handleSave={handleSave}
      handleCancel={handleCancel}
    >
      <div className="connection-field">
        <TextField
          name="connection"
          className="text-field"
          size="small"
          select
          label="Connection"
          value={info['connection']}
          onChange={handleChange}
          variant="outlined"
        >
          {sshConnections &&
            sshConnections.map((c) => {
              return <MenuItem value={c}>{c.Name}</MenuItem>;
            })}
        </TextField>

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
  sshConnections: state.connections.filter((c) => c.Type === 'ssh'),
});

const mapDispatchToProps = (dispatch) => ({
  getConnection: (id) => dispatch(getConnection(id)),
  getSshConnections: () => dispatch(startGetConnections()),
  checkSSHConnection: (c) => dispatch(startCheckSSHConnection(c)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
