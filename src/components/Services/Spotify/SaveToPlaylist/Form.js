import React, { useState, useEffect } from 'react';
import { MenuItem, IconButton, TextField } from '@material-ui/core';
import { Refresh, Add } from '@material-ui/icons';
import { connect } from 'react-redux';
import { startGetConnections } from '../../../../actions/connections';
import { startGetPlaylists } from '../../../../actions/spotify';
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
    PlaylistId: data.PlaylistId || '',
    TrackId: data.TrackId || '',
    position: data.position || '',
  });

  const [errors, setErrors] = useState({
    connection: !!data.connection,
    PlaylistId: !!data.PlaylistId,
    TrackId: !!data.TrackId,
  });

  useEffect(() => {
    console.log(info);
    if (!info['TrackId']) {
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

    if (!!info['PlaylistId']) {
      setErrors((prev) => ({
        ...prev,
        PlaylistId: false,
      }));
    }
  }, [info]);

  useEffect(() => {
    if (info.connection) getPlaylists();
  }, [info.connection, getPlaylists]);

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
      PlaylistId: data.PlaylistId || '',
      TrackId: data.TrackId || '',
    });
    setErrors({
      TrackId: !!data.TrackId,
      PlaylistId: !!data.PlaylistId,
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
      className="save-to-playlist"
      title="Save to a Playlist"
      // disabledSave={errors['connection']}
      handleSave={handleSave}
      handleCancel={handleCancel}
    >
      {/* <div className="connection-field">
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
          {connections.map((wh) => (
            <MenuItem key={wh.id} value={wh.id}>
              {wh.name}
            </MenuItem>
          ))}
        </TextField>

        <IconButton size="small" className="add-icon">
          <Add />
        </IconButton>
      </div> */}

      <div className="playlist-field">
        <TextField
          name="PlaylistId"
          className="text-field"
          size="small"
          select
          label="Playlist"
          value={info['PlaylistId']}
          onChange={handleChange}
          variant="outlined"
          // disabled={!info['connection']}
        >
          {playlists.map((p) => (
            <MenuItem key={p.id} value={p.id}>
              {p.name}
            </MenuItem>
          ))}
        </TextField>

        <IconButton
          size="small"
          className="add-icon"
          disabled={!info['connection']}
          onClick={getPlaylists}
        >
          <Refresh />
        </IconButton>
      </div>

      <TextField
        name="TrackId"
        className="text-field"
        label="Track ID"
        variant="outlined"
        size="small"
        value={info['TrackId']}
        error={errors['TrackId']}
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
  connections: state.connections,
  playlists: state.spotify.playlists,
});

const mapDispatchToProps = (dispatch) => ({
  getConnections: () => dispatch(startGetConnections()),
  getPlaylists: () => dispatch(startGetPlaylists()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
