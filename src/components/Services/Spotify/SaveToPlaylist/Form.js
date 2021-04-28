import React, { useState, useEffect } from 'react';
import { MenuItem, Typography, IconButton, TextField } from '@material-ui/core';
import { Refresh, Add } from '@material-ui/icons';
import { connect } from 'react-redux';
import { startGetConnections } from '../../../../actions/connections';
import ServiceForm from '../../../PopoverForm';
const Form = ({
  id,
  data,
  connections,
  editElement,
  webhooks,
  setAnchorEl,
}) => {
  const [info, setInfo] = useState({
    connection: data.connection || '',
    playlist: data.playlist || '',
    id: data.id || '',
    position: data.position || '',
  });

  const [errors, setErrors] = useState({
    connection: !!data.connection,
    playlist: !!data.playlist,
    id: !!data.id,
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  useEffect(() => {
    console.log(info);
    if (!info['max']) {
      setErrors((prev) => ({
        ...prev,
        max: true,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        max: false,
      }));
    }
    if (!!info['connection']) {
      setErrors((prev) => ({
        ...prev,
        connection: false,
      }));
    }

    if (!!info['playlist']) {
      setErrors((prev) => ({
        ...prev,
        playlist: false,
      }));
    }
  }, [info]);

  useEffect(() => {
    handleGetPlaylist();
  }, [info.connection]);

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGetPlaylist = () => {};

  const handleCancel = () => {
    setAnchorEl(null);
    setInfo({
      connection: data.connection || '',
      playlist: data.playlist || '',
      max: data.max || 2,
    });
    setErrors({
      max: !!data.max,
      playlist: !!data.playlist,
      connection: !!data.connection,
    });
  };

  const handleSave = () => {
    editElement(id, { data: { ...data, ...info } });
    setAnchorEl(null);
  };

  return (
    <ServiceForm
      className="save-to-playlist"
      title="Save to a Playlist"
      disabledSave={errors['connection'] || errors['max']}
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
          {/* {connections.map((wh) => (
            <MenuItem key={wh.id} value={wh.id}>
              {wh.name}
            </MenuItem>
          ))} */}
        </TextField>

        <IconButton size="small" className="add-icon">
          <Add />
        </IconButton>
      </div>

      <div className="playlist-field">
        <TextField
          name="playlist"
          className="text-field"
          size="small"
          select
          label="Playlist"
          value={info['playlist']}
          onChange={handleChange}
          variant="outlined"
          disabled={!info['connection']}
        >
          {webhooks.map((wh) => (
            <MenuItem key={wh.id} value={wh.id}>
              {wh.name}
            </MenuItem>
          ))}
        </TextField>

        <IconButton
          size="small"
          className="add-icon"
          onClick={() => {}}
          disabled={!info['connection']}
        >
          <Refresh onClick={handleGetPlaylist} />
        </IconButton>
      </div>

      <TextField
        name="ID"
        className="text-field"
        label="ID"
        variant="outlined"
        size="small"
        value={info['id']}
        error={errors['id']}
        onChange={handleChange}
      />

      <TextField
        name="position"
        className="text-field"
        label="Position"
        type="number"
        variant="outlined"
        size="small"
        value={info['position']}
        error={errors['position']}
        helperText="If you leave this field empty, the track will be added to the end of the playlist."
        onChange={handleChange}
      />
    </ServiceForm>
  );
};
const mapStateToProps = (state) => ({
  webhooks: state.webhooks.webhooks,
  connections: state.connections,
});

const mapDispatchToProps = (dispatch) => ({
  getConnections: () => dispatch(startGetConnections()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
