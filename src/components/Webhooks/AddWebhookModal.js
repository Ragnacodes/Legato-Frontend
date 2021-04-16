import React from 'react';
import {
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import WebhookSettings from './WebhookSettings';

const AddWebhookModal = ({ visible, handleSave, setVisible }) => {
  const webhook = {
    name: "New Webhook",
    ip_restrictions: "",
    get_request_headers: false,
    get_request_http: false,
    json_passthrough: false,
  };
  return (
    <Dialog
      disableBackdropClick
      className="edit-wh-dialog"
      open={visible}
      onClose={() => setVisible(false)}
      aria-labelledby="edit-wh-dialog"
    >
      <DialogTitle disableTypography={true} className="edit-wh-dialog-title">
        <Typography variant="h5">Create a Webhook</Typography>
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

export default AddWebhookModal;
