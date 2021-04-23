import React, { useState, useEffect } from 'react';
import Popover from '../Popover';
import WebhookSettings from './WebhookSettings';
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
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      className="add-wh-popper"
      title={title}
      anchor={anchor}
      disabledSave={false}
      setAnchor={setAnchor}
      handleSave={() => {
        handleSave(info);
        setAnchor(null);
      }}
      handleCancel={handleCancel}
    >
      <WebhookSettings info={info} setInfo={setInfo} />
    </Popover>
  );
};

export default WebhookSettingsPopper;
