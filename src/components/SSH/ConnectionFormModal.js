import React, { useState } from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
import ConnectionForm from './ConnectionForm';
const ConnectionFormModal = ({ visible, setVisible }) => {
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
    setVisible(false);
    setInfo({
      name: 'My SSH connection',
      host: '',
      authType: 0,
      username: '',
    });
  };

  const handleSave = () => {
    setVisible(false);
    setInfo({
      name: 'My SSH connection',
      host: '',
      authType: 0,
      username: '',
    });
  };

  return (
    <Dialog disableBackdropClick open={visible} onClose={handleCancel}>
      <DialogContent className="ssh-connection-modal">
        <ConnectionForm
          info={info}
          handleChange={handleChange}
          handleCancel={handleCancel}
          handleSave={handleSave}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ConnectionFormModal;
