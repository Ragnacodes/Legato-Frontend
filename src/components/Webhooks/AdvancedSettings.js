import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { Info } from '@material-ui/icons';

// import AddDataStructure from "./AddDataStructure";
const AdvancedSettings = ({ handleChange, info }) => {
  return (
    <div className="wh-advanced-settings">
      <FormControlLabel
        control={
          <Checkbox
            name="get_request_headers"
            checked={info['get_request_headers']}
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
            name="get_request_http"
            checked={info['get_request_http']}
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
      <FormControlLabel
        control={
          <Checkbox
            name="json_passthrough"
            checked={info['json_passthrough']}
            color="primary"
            onChange={(e) => handleChange(e.target.name, e.target.checked)}
          />
        }
        label="JSON pass-through"
      />
      <Typography className="help-text" variant="body2">
        <Info fontSize="small" className="help-icon" />
        If enabled, JSON payloads are returned as a string.
      </Typography>
    </div>
  );
};

export default AdvancedSettings;
