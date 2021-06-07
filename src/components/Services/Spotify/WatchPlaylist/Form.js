import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TextField, MenuItem, IconButton } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';
import ServiceForm from '../../../PopoverForm';
import { startGetPlaylists } from '../../../../actions/spotify';

export function Form({
  id,
  data,
  playlists,
  getPlaylists,
  editElement,
  setAnchorEl,
}) {
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
    getPlaylists();
  }, [getPlaylists]);

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
      disabledSave={errors['playlist']}
      handleSave={handleSave}
      handleCancel={handleCancel}
    >
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
        >
          {playlists.map((wh) => (
            <MenuItem key={wh.id} value={wh.id}>
              {wh.name}
            </MenuItem>
          ))}
        </TextField>

        <IconButton size="small" className="add-icon" onClick={getPlaylists}>
          <Refresh />
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
}

const mapStateToProps = (state) => ({
  playlists: state.spotify.playlists,
});

const mapDispatchToProps = (dispatch) => ({
  getPlaylists: () => dispatch(startGetPlaylists()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
