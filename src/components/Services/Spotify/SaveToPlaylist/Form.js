import React, { useState, useEffect } from 'react';
import { MenuItem, IconButton, TextField } from '@material-ui/core';
import { Refresh, Search } from '@material-ui/icons';
import { connect } from 'react-redux';
import { startGetConnections } from '../../../../actions/connections';
import * as actions from '../../../../actions/spotify';
import ServiceForm from '../../../PopoverForm';
import TrackInfo from './TrackInfo';
import { errorNotification } from '../../../Layout/Notification';
import ConnectionField from '../ConnectionField';
export function Form({
  id,
  data,
  track,
  connections,
  editElement,
  playlists,
  setAnchorEl,
  getConnections,
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
  const [connectionLoading, setConnectionLoading] = useState(true);
  const [playlistLoading, setPlaylistLoading] = useState(false);
  const [trackLoading, setTrackLoading] = useState(false);

  useEffect(() => {
    getConnections().then(() => {
      setConnectionLoading(false);
    });
  }, [getConnections]);

  useEffect(() => {
    if(info.connection)
    {
      getPlaylists(info.connection).then(() => {
        setPlaylistLoading(false);
      });
    }
  }, [info.connection, getPlaylists]);

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
      getTrackInfo(TrackId, info.connection)
        .then(() => {
          setTrackLoading(false);
          setInfo((p) => ({ ...p, TrackId }));
          setErrors((prev) => ({
            ...prev,
            trackUrl: '',
          }));
        })
        .catch((err) => {
          setTrackLoading(false);
          handleError(err);
        });
    } catch (err) {
      handleError(err);
      setTrackLoading(false);
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
      <ConnectionField
        connection={info['connection']}
        connections={connections}
        connectionLoading={connectionLoading}
        handleChange={handleChange}
      />

      {info['connection'] && (
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
            disabled={playlistLoading}
            onClick={() => {
              setPlaylistLoading(true);
              getPlaylists(info.connection).then(() => {
                setPlaylistLoading(false);
              });
            }}
          >
            <Refresh />
          </IconButton>
        </div>
      )}

      {info['PlaylistId'] && (
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
              setTrackLoading(true);
              searchTrack();
            }}
          >
            <Search />
          </IconButton>
        </div>
      )}

      {!!track && <TrackInfo track={track} />}
    </ServiceForm>
  );
}
const mapStateToProps = (state) => ({
  connections: state.connections.filter((c) => c.type === 'spotifies'),
  playlists: state.spotify.playlists,
  track: state.spotify.track,
});

const mapDispatchToProps = (dispatch) => ({
  getConnections: () => dispatch(startGetConnections()),
  getPlaylists: (c) => dispatch(actions.startGetPlaylists(c)),
  getTrackInfo: (track, c) => dispatch(actions.startGetTrackInfo(track, c)),
  setTrackInfo: (track) => dispatch(actions.setTrackInfo(track)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
