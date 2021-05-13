import React, { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';

import ConnectionForm from './ConnectionForm';
const ConnectionFormModal = ({ visible, setVisible }) => {
  const [info, setInfo] = useState({
    name: 'My SSH connection',
    host: '',
    authType: 0,
    username: '',
  });
  const handleChange = (name, value) => {
    console.log(value);
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSave = () => {};

  return (
    <Dialog disableBackdropClick open={visible} onClose={handleCancel}>
      <DialogContent className="ssh-connection-modal">
        <ConnectionForm
          info={info}
          handleChange={handleChange}
          handleCancel={handleCancel}
          handleSave={handleSave}
          handleChange={handleChange}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ConnectionFormModal;
