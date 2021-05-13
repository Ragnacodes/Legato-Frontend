import React, { useState, useEffect } from 'react';
import { MenuItem, IconButton, TextField, Popover } from '@material-ui/core';
import { Refresh, Search } from '@material-ui/icons';
import { connect } from 'react-redux';
import { startGetConnections } from '../../../../actions/connections';
import * as actions from '../../../../actions/spotify';
import ServiceForm from '../../../PopoverForm';
import TrackInfo from './TrackInfo';

const Form = ({
  id,
  data,
  track,
  connections,
  editElement,
  playlists,
  setAnchorEl,
  getPlaylists,
  getTrackInfo,
  setTrackInfo,
}) => {
  const [trackInfoVisible, setTrackInfoVisible] = useState(null);

  const [info, setInfo] = useState({
    connection: data.connection || '',
    PlaylistId: data.PlaylistId || '',
    TrackId: data.TrackId || '',
    trackUrl: data.trackUrl || '',
    position: data.position || '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log(errors);
  }, [errors]);

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
      PlaylistId: data.PlaylistId || '',
      TrackId: data.TrackId || '',
      trackUrl: data.trackUrl || '',
      position: data.position || '',
    });
    setErrors({});
  };

  const handleSave = () => {
    try {
      const TrackId = info['trackUrl']
        .split('spotify.com/track/')[1]
        .split('?')[0];
      const updates = {
        name: info.name,
        data: { ...data, ...info, TrackId },
      };
      editElement(id, updates);
      setAnchorEl(null);
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        trackUrl: 'Please enter valid url.',
      }));
      setTrackInfo('');
      return;
    }
  };

  const searchTrack = (e) => {
    setTrackInfoVisible(e.currentTarget);
    try {
      const TrackId = info['trackUrl']
        .split('spotify.com/track/')[1]
        .split('?')[0];
      getTrackInfo(TrackId);
      setInfo((p) => ({ ...p, TrackId }));
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        trackUrl: 'Please enter valid url.',
      }));
      setTrackInfo('');
      return;
    }
  };

  const disabledSave =
    !info['PlaylistId'] || !info['trackUrl'] || errors['trackUrl'];

  return (
    <ServiceForm
      className="save-to-playlist"
      title="Save to a Playlist"
      disabledSave={false}
      handleSave={handleSave}
      handleCancel={handleCancel}
    >
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
        >
          {playlists.map((p) => (
            <MenuItem key={p.id} value={p.id}>
              {p.name}
            </MenuItem>
          ))}
        </TextField>

        <IconButton size="small" className="add-icon" onClick={getPlaylists}>
          <Refresh />
        </IconButton>
      </div>

      <div className="track-field">
        <TextField
          name="trackUrl"
          className="text-field"
          label="Track URL"
          variant="outlined"
          size="small"
          value={info['trackUrl']}
          error={!!errors['trackUrl']}
          helperText={'Please enter valid url.'}
          onChange={handleChange}
        />

        <IconButton size="small" className="add-icon" onClick={searchTrack}>
          <Search />
        </IconButton>
      </div>

      {/* <Popover
        open={Boolean(trackInfoVisible)}
        anchorEl={trackInfoVisible}
        onClose={() => {
          setTrackInfoVisible(null);
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      > */}
      {!!track && <TrackInfo track={track} />}
      {/* </Popover> */}
    </ServiceForm>
  );
};
const mapStateToProps = (state) => ({
  connections: state.connections,
  playlists: state.spotify.playlists,
  track: state.spotify.track,
});

const mapDispatchToProps = (dispatch) => ({
  getConnections: () => dispatch(startGetConnections()),
  getPlaylists: () => dispatch(actions.startGetPlaylists()),
  getTrackInfo: (track) => dispatch(actions.startGetTrackInfo(track)),
  setTrackInfo: (track) => dispatch(actions.setTrackInfo(track)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
