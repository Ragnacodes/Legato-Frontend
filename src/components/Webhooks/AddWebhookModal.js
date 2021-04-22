import React from 'react';
import {
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import WebhookSettingsModal from './WebhookSettingsModal';

const AddWebhookModal = ({ visible, handleSave, setVisible }) => {
  const webhook = {
    name: 'New Webhook',
    ip_restrictions: '',
    get_request_headers: false,
    get_request_http: false,
    json_passthrough: false,
  };
  return (
    <WebhookSettingsModal
      webhook={webhook}
      visible={visible}
      handleSave={handleSave}
      setVisible={setVisible}
    />
  );
};

export default AddWebhookModal;
