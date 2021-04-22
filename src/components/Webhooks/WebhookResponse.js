import React, { useState, useEffect } from 'react';
import { Typography, TextField } from '@material-ui/core';
import Popover from '../Popover';
import { Info } from '@material-ui/icons';

const WebhookResponse = ({ anchor, handleSave, setAnchor }) => {
  const [info, setInfo] = useState({
    status: 200,
    body: '',
  });
  const [errors, setErrors] = useState({
    status: false,
  });

  useEffect(() => {
    console.log(info);
    if (info['status'] < 100) {
      setErrors((prev) => ({
        ...prev,
        status: true,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        status: false,
      }));
    }
  }, [info]);

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Popover
      className="webhook-response"
      title="Webhook Response"
      anchor={anchor}
      disabledSave={errors['status']}
      setAnchor={setAnchor}
      handleSave={() => {}}
      handleCancel={() => {}}
    >
      <TextField
        defaultValue={info['status']}
        className="text-field"
        name="status"
        label="Status"
        type="number"
        variant="outlined"
        size="small"
        onChange={handleChange}
        error={errors['status']}
        helperText="Must be higher than or equal to 100."
      />

      {/* <Typography className="help-text" variant="body2">
        <Info fontSize="small" className="help-icon" />
        Must be higher than or equal to 100.
      </Typography> */}

      <TextField
        name="body"
        className="text-field"
        size="small"
        label="Body"
        multiline
        rows={3}
        variant="outlined"
        onChange={handleChange}
      />
    </Popover>
  );
};

export default WebhookResponse;
