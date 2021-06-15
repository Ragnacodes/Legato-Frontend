import React from 'react';
import { MenuItem, TextField, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';

export default function ConnectionField({
  connection,
  connections,
  connectionLoading,
  handleChange,
}) {
  return (
    <div className="connection-field">
      {connectionLoading ? (
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
          name="connection"
          className="text-field"
          size="small"
          select
          label="Connection"
          value={connection}
          onChange={handleChange}
          variant="outlined"
        >
          {connections &&
            connections.map((c) => {
              return (
                <MenuItem key={c.id} value={c.data.guildId}>
                  {c.name}
                </MenuItem>
              );
            })}
        </TextField>
      )}

      <IconButton
        name="addConnection"
        size="small"
        className="add-icon"
        // onClick={handleAddConnection}
      >
        <Add />
      </IconButton>
    </div>
  );
}
