import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';

import ServiceForm from '../../../PopoverForm';
const Form = ({ id, data, editElement, setAnchorEl }) => {
  const [info, setInfo] = useState({
    status: data.status || 200,
    body: data.body || '',
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

  const handleCancel = () => {
    setAnchorEl(null);
    setInfo({
      status: data.status || 200,
      body: data.body || '',
    });
    setErrors({
      status: false,
    });
  };

  const handleSave = () => {
    editElement(id, { data: { ...data, ...info } });
    setAnchorEl(null);
  };

  return (
    <ServiceForm
      className="webhook-response"
      title="Webhook Response"
      disabledSave={errors['status']}
      handleSave={handleSave}
      handleCancel={handleCancel}
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
    </ServiceForm>
  );
};

export default Form;
