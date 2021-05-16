import React, { useState } from 'react';
import { Button, Typography, Popover, TextField } from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';

const ExtractKey = ({ anchor, setAnchor, info, setInfo }) => {
  const handleCancel = () => {
    setAnchor(null);
    setKeyFile('');
  };

  const handleSave = () => {
    setAnchor(null);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const [keyFile, setKeyFile] = useState('');

  const disabledSave = false;
  return (
    <Popover
      open={Boolean(anchor)}
      anchorEl={anchor}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <div className="sketchpad-popover">
        <CloseRounded className="close-icon" onClick={handleCancel} />
        <Typography variant="h5">Extract Key</Typography>
        <div className="private-key">
          <TextField
            disabled
            name="key"
            className="text-field"
            label="Private Key"
            variant="outlined"
            size="small"
            value={keyFile ? keyFile.name : ''}
          />

          <input
            name="key"
            accept="*"
            className="file-input"
            id="contained-button-file"
            type="file"
            onChange={(e) => setKeyFile(e.target.files[0])}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload
            </Button>
          </label>
        </div>
        <div className="actions">
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button
            disabled={disabledSave}
            onClick={handleSave}
            variant="contained"
            color="primary"
          >
            Extract
          </Button>
        </div>
      </div>
    </Popover>
  );
};

export default ExtractKey;
