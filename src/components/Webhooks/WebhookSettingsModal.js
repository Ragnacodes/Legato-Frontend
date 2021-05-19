import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
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
    <Dialog disableBackdropClick open={visible} onClose={handleCancel}>
      <DialogContent className="wh-settings-modal">
        <WebhookSettings
          title={webhook.name}
          info={info}
          setInfo={setInfo}
          handleCancel={handleCancel}
          handleSave={() => {
            handleSave(info);
            setVisible(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default WebhookSettingsModal;
