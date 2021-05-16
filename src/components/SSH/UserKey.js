import React, { useState } from 'react';
import { TextField, Button, Popover } from '@material-ui/core';
import { Info } from '@material-ui/icons';
import ExtractKey from './ExtractKey';

const UserKey = ({ info, handleChange }) => {
  const [extractKeyAnchor, setExtractKeyAnchor] = useState(null);

  const openExtractKey = (e) => {
    setExtractKeyAnchor(e.currentTarget);
  };

  const handleClose = () => {
    setExtractKeyAnchor(null);
  };

  return (
    <div className="private-key">
      <TextField
        value={info['key']}
        name="key"
        className="text-field"
        size="small"
        label="Private Key"
        multiline
        rowsMax={3}
        variant="outlined"
        onChange={handleChange}
      />

      <ExtractKey anchor={extractKeyAnchor} setAnchor={setExtractKeyAnchor} />
      <Button
        onClick={openExtractKey}
        variant="contained"
        color="primary"
        className="extract-key"
      >
        Extract
      </Button>
    </div>
  );
};

export default UserKey;
