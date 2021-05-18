import React, { useState, useEffect } from 'react';
import { Popover } from '@material-ui/core';
import WebhookSettings from './WebhookSettings';
const WebhookSettingsPopper = ({ webhook, anchor, setAnchor, handleSave }) => {
  const [info, setInfo] = useState(webhook);

  useEffect(() => {
    setInfo((prev) => ({ ...prev, ...webhook }));
  }, [webhook]);

  const handleCancel = () => {
    setInfo(webhook);
    setAnchor(null);
  };

  return (
    <Popover
      open={Boolean(anchor)}
      anchorEl={anchor}
      onClose={() => setAnchor(null)}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <WebhookSettings
        title={webhook.name}
        info={info}
        setInfo={setInfo}
        handleCancel={handleCancel}
        handleSave={() => {
          handleSave(info);
          setAnchor(null);
        }}
      />
    </Popover>
  );
};

export default WebhookSettingsPopper;
