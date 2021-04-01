import React from "react";
import { connect } from "react-redux";
import {
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  TextField,
  Button,
  Tab,
  Tabs,
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import InfoIcon from "@material-ui/icons/Info";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import AdvancedSettings from "./AdvancedSettings";
export function TabPanel(props) {
  const { children, value, index, className, ...other } = props;

  return (
    <div
      className={"edit-webhook-tab " + className}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

const Webhooks = ({ webhook, visible, setVisible }) => {
  const [value, setValue] = React.useState(0);
  const handleClose = () => {};
  const handleSave = () => {};
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Dialog
      disableBackdropClick
      className="edit-webhook-dialog"
      open={visible}
      onClose={() => setVisible(false)}
      aria-labelledby="edit-webhook-dialog-title"
    >
      <DialogTitle disableTypography={true} id="edit-webhook-dialog-title">
        <Typography variant="h5">{webhook.name}</Typography>
      </DialogTitle>
      <DialogContent>
        <CloseRoundedIcon
          className="close-icon"
          onClick={() => setVisible(false)}
        />
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Settings" />
          <Tab label="Advanced Settings" />
        </Tabs>
        <TabPanel className="settings" value={value} index={0}>
          <TextField
            className="edit-field"
            //   onChange={onChange}
            name="username"
            label="Webhook Name"
            variant="outlined"
            size="small"
            defaultValue={webhook.name}
            //   error={!!errors["username"]}
            //   helperText={errors["username"]}
          />
          <TextField
            className="edit-field"
            //   onChange={onChange}
            name="ip-restriction"
            label="IP restrictions"
            variant="outlined"
            size="small"
            //   error={!!errors["username"]}
            //   helperText={errors["username"]}
          />
          <Typography className="help-text" variant="body2">
            <InfoIcon fontSize="small" className="help-icon" />A whitelist of IP
            addresses delimited by comma. You can use CIDR notation to whitelist
            a subnet. Leave empty if you don't want to check the IP address.
          </Typography>
        </TabPanel>
        <AdvancedSettings value={value} />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  //   webhooks: state.webhooks.webhooks,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Webhooks);
