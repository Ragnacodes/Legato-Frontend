import React, { useState, useEffect } from 'react';
import { MenuItem, IconButton, TextField } from '@material-ui/core';
import { Refresh, Search } from '@material-ui/icons';
import { connect } from 'react-redux';
import { startGetConnections } from '../../../../actions/connections';
import * as actions from '../../../../actions/spotify';
import ServiceForm from '../../../PopoverForm';
import TrackInfo from './TrackInfo';
import { errorNotification } from '../../../Layout/Notification';
export function Form({
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
}) {
  const [info, setInfo] = useState({
    connection: data.connection || '',
    PlaylistId: data.PlaylistId || '',
    TrackId: data.TrackId || '',
    trackUrl: data.trackUrl || '',
    position: data.position || '',
  });

  const [errors, setErrors] = useState({});
  const [playlistLoading, setPlaylistLoading] = useState(true);
  const [trackLoading, setTrackLoading] = useState(false);

  useEffect(() => {
    getPlaylists().then(() => {
      setPlaylistLoading(false);
    });
  }, [getPlaylists]);

  const ExtractIdFromUrl = (url) => {
    try {
      const id = info['trackUrl'].split('spotify.com/track/')[1].split('?')[0];
      return id;
    } catch (err) {
      throw new Error('Please enter valid url.');
    }
  };

  const handleError = (err) => {
    if (err.message === 'Please enter valid url.') {
      setErrors((prev) => ({
        ...prev,
        trackUrl: err.message,
      }));
    } else {
      errorNotification(err.message);
    }
    setTrackInfo('');
  };

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
      const TrackId = ExtractIdFromUrl(info['trackUrl']);
      const updates = {
        name: info.name,
        data: { ...data, ...info, TrackId },
      };
      editElement(id, updates);
      setAnchorEl(null);
    } catch (err) {
      handleError(err);
    }
  };

  const searchTrack = () => {
    try {
      const TrackId = ExtractIdFromUrl(info['trackUrl']);
      getTrackInfo(TrackId)
        .then(() => {
          setTrackLoading(false);
          setInfo((p) => ({ ...p, TrackId }));
          setErrors((prev) => ({
            ...prev,
            trackUrl: '',
          }));
        })
        .catch((err) => {
          handleError(err);
        });
    } catch (err) {
      handleError(err);
    }
  };

  let disabledSave =
    !info['PlaylistId'] || !info['trackUrl'] || errors['trackUrl'];

  return (
    <ServiceForm
      className="save-to-playlist"
      title="Save to a Playlist"
      disabledSave={disabledSave}
      handleSave={handleSave}
      handleCancel={handleCancel}
    >
      <div className="playlist-field">
        {playlistLoading ? (
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
        )}

        <IconButton
          name="refreshPlaylists"
          size="small"
          className="add-icon"
          diabled={playlistLoading}
          onClick={() => {
            getPlaylists();
            setPlaylistLoading(true);
          }}
        >
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
          helperText={errors['trackUrl']}
          onChange={handleChange}
        />

        <IconButton
          name="searchForTrack"
          disabled={!info['trackUrl'] || trackLoading}
          size="small"
          className="add-icon"
          onClick={() => {
            searchTrack();
            setTrackLoading(true);
          }}
        >
          <Search />
        </IconButton>
      </div>

      {!!track && <TrackInfo track={track} />}
    </ServiceForm>
  );
}
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
