import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';

import ServiceForm from '../../../PopoverForm';
const Form = ({ id, data, editElement, setAnchorEl }) => {
  const [info, setInfo] = useState({
    connection: data.connection || '',
  });

  const [errors, setErrors] = useState({
    connection: !!data.connection,
  });


  useEffect(() => {
    if (!!info['connection']) {
      setErrors((prev) => ({
        ...prev,
        connection: false,
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
      connection: data.connection || '',

    });
    setErrors({
      connection: !!data.connection,
    });
  };

  const handleSave = () => {
    editElement(id, { data: { ...data, ...info } });
    setAnchorEl(null);
  };

  return (
    <ServiceForm
      className="watch-playlist"
      title="Watch a Playlist"
      disabledSave={errors['connection'] || errors['max']}
      handleSave={handleSave}
      handleCancel={handleCancel}
    >
      <div className="connection-field">
        <TextField
          name="connection"
          className="text-field"
          size="small"
          select
          label="Connection"
          value={info['connection']}
          onChange={handleChange}
          variant="outlined"
        >
          {webhooks.map((wh) => (
            <MenuItem key={wh.id} value={wh.id}>
              {wh.name}
            </MenuItem>
          ))}
        </TextField>

        <IconButton size="small" className="add-icon" onClick={() => {}}>
          <Add />
        </IconButton>
      </div>

      
    </ServiceForm>
  );
};

export default Form;
