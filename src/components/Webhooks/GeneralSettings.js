import React from 'react';
import { TextField } from '@material-ui/core';
const GeneralSettings = ({ handleChange, info }) => {
  return (
    <div className="wh-general-settings">
      <TextField
        className="edit-wh-field text-field"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        name="name"
        label="Webhook Name"
        variant="outlined"
        size="small"
        defaultValue={info['name']}
        error={!info['name']}
        helperText={!info['name'] && 'Required.'}
      />
    </div>
  );
};

export default GeneralSettings;
