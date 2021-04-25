import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';

import ServiceForm from '../../../PopoverForm';
const Form = ({ id, data, editElement, setAnchorEl }) => {
  const [info, setInfo] = useState({
    connection: data.connection || '',
    playlist: data.playlist || '',
    max: data.max || 2,
  });

  const [errors, setErrors] = useState({
    max: !!data.max,
    playlist: !!data.playlist,
    connection: !!data.connection,
  });

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
  }, [info['connection']]);

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
      className="watch-playlist"
      title="Watch a Playlist"
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
          {webhooks.map((wh) => (
            <MenuItem key={wh.id} value={wh.id}>
              {wh.name}
            </MenuItem>
          ))}
        </TextField>

        <IconButton size="small" className="add-icon" onClick={() => {}}>
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
        name="max"
        className="text-field"
        label="Maximum number of tracks"
        type="number"
        variant="outlined"
        size="small"
        value={info['max']}
        error={errors['max']}
        helperText="We recommend that you set a low value."
        onChange={handleChange}
      />
    </ServiceForm>
  );
};

export default Form;
