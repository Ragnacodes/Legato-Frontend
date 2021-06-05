import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { Info } from '@material-ui/icons';

const AdvancedSettings = ({ handleChange, info }) => {
  return (
    <div className="wh-advanced-settings">
      <FormControlLabel
        control={
          <Checkbox
            name="getHeaders"
            checked={info['getHeaders']}
            color="primary"
            onChange={(e) => handleChange(e.target.name, e.target.checked)}
          />
        }
        label="Get request headers"
      />
      <Typography className="help-text" variant="body2">
        <Info fontSize="small" className="help-icon" />
        The headers will be added to the request body.
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            name="getMethod"
            checked={info['getMethod']}
            color="primary"
            onChange={(e) => handleChange(e.target.name, e.target.checked)}
          />
        }
        label="Get request HTTP method"
      />
      <Typography className="help-text" variant="body2">
        <Info fontSize="small" className="help-icon" />
        The HTTP method (verb) will be added to the request body.
      </Typography>
    </div>
  );
};

export default AdvancedSettings;
