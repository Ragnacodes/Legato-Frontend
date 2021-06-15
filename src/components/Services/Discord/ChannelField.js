import React from 'react';
import { MenuItem, TextField, IconButton } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';

export default function ConnectionField({
  channel,
  channels,
  channelLoading,
  handleChange,
  reloadChannels,
}) {
  return (
    <div className="channel-field">
      {channelLoading ? (
        <TextField
          disabled
          className="text-field"
          size="small"
          label="Channel"
          value="Loading..."
          variant="outlined"
        />
      ) : (
        <TextField
          name="channelId"
          className="text-field"
          size="small"
          select
          label="Channel"
          value={channel}
          onChange={handleChange}
          variant="outlined"
        >
          {channels.map((c) => (
            <MenuItem key={c.id} value={c.id}>
              {c.name}
            </MenuItem>
          ))}
        </TextField>
      )}

      <IconButton
        name="refreshChannels"
        size="small"
        className="add-icon"
        onClick={reloadChannels}
        disabled={channelLoading}
      >
        <Refresh />
      </IconButton>
    </div>
  );
}
