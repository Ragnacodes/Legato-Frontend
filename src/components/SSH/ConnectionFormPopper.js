import React, { useState } from 'react';
import { Popover } from '@material-ui/core';
import ConnectionForm from './ConnectionForm';
const ConnectionFormPopper = ({ anchor, setAnchor }) => {
  const [info, setInfo] = useState({
    name: 'My SSH connection',
    host: '',
    authType: 0,
    username: '',
  });
  const handleChange = (name, value) => {
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setAnchor(null);
    setInfo({
      name: 'My SSH connection',
      host: '',
      authType: 0,
      username: '',
    });
  };

  const handleSave = () => {
    setAnchor(null);
    setInfo({
      name: 'My SSH connection',
      host: '',
      authType: 0,
      username: '',
    });
  };

  return (
    <Popover
      open={Boolean(anchor)}
      anchorEl={anchor}
      onClose={handleCancel}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      className="ssh-connection-modal"
    >
      <ConnectionForm
        info={info}
        handleChange={handleChange}
        handleCancel={handleCancel}
        handleSave={handleSave}
      />
    </Popover>
  );
};

export default ConnectionFormPopper;
