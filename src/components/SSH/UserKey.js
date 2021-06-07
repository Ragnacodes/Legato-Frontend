import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import ExtractKey from './ExtractKey';

const UserKey = ({ info, handleChange }) => {
  const [extractKeyAnchor, setExtractKeyAnchor] = useState(null);

  const openExtractKey = (e) => {
    setExtractKeyAnchor(e.currentTarget);
  };

  return (
    <div className="private-key">
      <TextField
        value={info['sshKey']}
        name="sshKey"
        className="text-field"
        size="small"
        label="Private Key"
        multiline
        rowsMax={3}
        variant="outlined"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />

      <ExtractKey
        handleChange={handleChange}
        anchor={extractKeyAnchor}
        setAnchor={setExtractKeyAnchor}
      />
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
