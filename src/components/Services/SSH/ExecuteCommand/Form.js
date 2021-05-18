import React, { useState, useEffect } from 'react';
import { MenuItem, IconButton, TextField } from '@material-ui/core';
import { Refresh, Search } from '@material-ui/icons';
import { connect } from 'react-redux';
import { startGetConnections } from '../../../../actions/connections';
import ServiceForm from '../../../PopoverForm';

const Form = ({
  id,
  data,
  connections,
  editElement,
  playlists,
  setAnchorEl,
  getPlaylists,
}) => {
  const [info, setInfo] = useState({
    connection: data.connection || '',
    mode: data.mode || 0,
    command: data.command || '',
  });

  const [errors, setErrors] = useState({
    connection: !!data.connection,
    mode: !!data.mode,
    command: !!data.command,
  });

  useEffect(() => {
    console.log(info);
    if (!info['command']) {
      setErrors((prev) => ({
        ...prev,
        TrackId: true,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        TrackId: false,
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
      mode: data.mode || 0,
      command: data.command || '',
    });
    setErrors({
      mode: !!data.mode,
      command: !!data.command,
      connection: !!data.connection,
    });
  };

  const handleSave = () => {
    const updates = {
      name: info.name,
      data: { ...data, ...info },
    };
    console.log(updates);
    editElement(id, updates);
    setAnchorEl(null);
  };


  return (
    <ServiceForm
      className="execute-command"
      title="Execute a command"
      disabledSave={errors['command']}
      handleSave={handleSave}
      handleCancel={handleCancel}
    >
      <TextField
        name="command"
        className="text-field"
        label="Command"
        variant="outlined"
        size="small"
        value={info['command']}
        onChange={handleChange}
      />
    </ServiceForm>
  );
};
const mapStateToProps = (state) => ({
  // connections: state.connections,
  // playlists: state.spotify.playlists,
});

const mapDispatchToProps = (dispatch) => ({
  // getConnections: () => dispatch(startGetConnections()),
  // getPlaylists: () => dispatch(startGetPlaylists()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
