import React from 'react';
import {
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import WebhookSettings from './WebhookSettings';

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

const WebhookSettingsModal = ({ webhook, visible, handleSave, setVisible }) => {
  return (
    <Dialog
      disableBackdropClick
      className="edit-wh-dialog"
      open={visible}
      onClose={() => setVisible(false)}
      aria-labelledby="edit-wh-dialog"
    >
      <DialogTitle disableTypography={true} className="edit-wh-dialog-title">
        <Typography variant="h5">{webhook.name}</Typography>
      </DialogTitle>
      <DialogContent>
        <WebhookSettings
          webhook={webhook}
          visible={visible}
          handleSave={handleSave}
          setVisible={setVisible}
        />
      </DialogContent>
    </Dialog>
  );
};

export default WebhookSettingsModal;
