import React, { useState, useEffect } from 'react';
import { Popover } from '@material-ui/core';
import WebhookSettings from './WebhookSettings';
import PopoverForm from '../PopoverForm';
const WebhookSettingsPopper = ({
  title,
  webhook,
  anchor,
  setAnchor,
  handleSave,
}) => {
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
      <PopoverForm
        className="add-wh-popper"
        title={title}
        anchor={anchor}
        disabledSave={false}
        handleSave={() => {
          handleSave(info);
          setAnchor(null);
        }}
        handleCancel={handleCancel}
      >
        <WebhookSettings info={info} setInfo={setInfo} />
      </PopoverForm>
    </Popover>
  );
};

export default WebhookSettingsPopper;
