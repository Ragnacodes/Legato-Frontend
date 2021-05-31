import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

import ServiceForm from '../../../PopoverForm';
const Form = ({ id, data, editElement, setAnchorEl }) => {
  const [info, setInfo] = useState({
    count: data.count || 1,
  });

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancel = () => {
    setAnchorEl(null);
    setInfo({
      count: data.count || 1,
    });
  };

  const handleSave = () => {
    editElement(id, {
      data: { ...data, ...info, count: parseInt(info['count']) },
    });
    setAnchorEl(null);
  };

  let disabledSave = !(info['count'] && info['count'] > 0);
  return (
    <ServiceForm
      className="toolbox-repeater"
      title="Repeater"
      disabledSave={disabledSave}
      handleSave={handleSave}
      handleCancel={handleCancel}
    >
      <TextField
        type="number"
        value={info['count']}
        className="text-field"
        name="count"
        label="Count"
        variant="outlined"
        size="small"
        onChange={handleChange}
        helperText="Must be higher 0."
      />
    </ServiceForm>
  );
};

export default Form;
