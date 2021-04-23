import React, { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';

import WebhookSettings from './WebhookSettings';
const WebhookSettingsModal = ({ webhook, visible, handleSave, setVisible }) => {
  const [info, setInfo] = useState(webhook);

  useEffect(() => {
    setInfo((prev) => ({ ...prev, ...webhook }));
  }, [webhook]);

  const handleCancel = () => {
    setInfo(webhook);
    setVisible(false);
  };

  return (
    <Dialog
      disableBackdropClick
      className="edit-wh-dialog"
      open={visible}
      onClose={handleCancel}
    >
      <DialogTitle disableTypography={true} className="edit-wh-dialog-title">
        <Typography variant="h5">{webhook.name}</Typography>
      </DialogTitle>
      <CloseRounded className="close-icon" onClick={handleCancel} />
      <DialogContent>
        <WebhookSettings info={info} setInfo={setInfo} />
      </DialogContent>
      <div className="actions">
        <Button autoFocus onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleSave(info);
            setVisible(false);
          }}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </div>
    </Dialog>
  );
};

export default WebhookSettingsModal;
