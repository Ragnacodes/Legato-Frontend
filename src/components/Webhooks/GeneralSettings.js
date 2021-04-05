import React from "react";
import { TextField, Typography } from "@material-ui/core";

import InfoIcon from "@material-ui/icons/Info";

const GeneralSettings = ({ handleChange, info }) => {
  return (
    <div className="wh-general-settings">
      <TextField
        className="edit-wh-field"
        onChange={handleChange}
        name="name"
        label="Webhook Name"
        variant="outlined"
        size="small"
        defaultValue={info["name"]}
        error={!info["name"]}
        helperText={!info["name"] && "Required."}
      />
      <TextField
        className="edit-wh-field"
        onChange={handleChange}
        name="ip_restrictions"
        label="IP restrictions"
        variant="outlined"
        size="small"
      />
      <Typography className="help-text" variant="body2">
        <InfoIcon fontSize="small" className="help-icon" />A whitelist of IP
        addresses delimited by comma. You can use CIDR notation to whitelist a
        subnet. Leave empty if you don't want to check the IP address.
      </Typography>
    </div>
  );
};

export default GeneralSettings;
