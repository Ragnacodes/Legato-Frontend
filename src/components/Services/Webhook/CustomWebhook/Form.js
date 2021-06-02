import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/webhooks';
import { Button, Tooltip, Typography } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import {
  errorNotification,
  successNotification,
} from '../../../Layout/Notification';
import WebhookSettingsPopper from '../../../Webhooks/WebhookSettingsPopper';

import ServiceForm from '../../../PopoverForm';
const Form = ({ id, data, editElement, setAnchorEl, updateWebhook }) => {
  const [info, setInfo] = useState({
    name: data.name || '',
    webhook: data.webhook || {},
  });

  const [editWhPopper, setEditWhPopper] = useState(null);
  const [copied, setCopied] = useState(false);

  // useEffect(() => {
  //   setInfo(data);
  // }, [data]);

  const handleUpdateWebhook = (updates) => {
    if (info.webhook.id) {
      updateWebhook(info.webhook.id, updates)
        .then((res) => {
          successNotification(res.message);
        })
        .catch((err) => {
          errorNotification(err.message);
        });
    }
  };

  const CopyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(function () {
      setCopied(true);
    });
  };

  const handleCancel = () => {
    setAnchorEl(null);
  };

  const handleSave = () => {
    editElement(id, { name: info.name, data: { ...data, ...info } });
    setAnchorEl(null);
  };

  return (
    <ServiceForm
      className="custom-webhook"
      title="Custom Webhook"
      disabledSave={false}
      handleSave={handleSave}
      handleCancel={handleCancel}
    >
      <div className="name-field">
        <Typography variant="h6" noWrap>
          Webhook Name
        </Typography>
        <Button
          size="small"
          className="edit-icon"
          startIcon={<Edit />}
          variant="outlined"
          // disabled={!info.webhook.id}
          onClick={(e) => setEditWhPopper(e.currentTarget)}
        >
          Edit
        </Button>
      </div>
      <Tooltip
        onClose={() => setCopied(false)}
        title={copied ? 'Copied!' : 'Copy to Clipboard'}
        placement="bottom"
        arrow
        classes={{
          popper: 'custom-helper-tooltip',
        }}
      >
        <Typography
          variant="body2"
          className="webhook-url"
          onClick={() =>
            CopyToClipboard(
              `http://localhost:8080/api/services/webhook/${data.url}`
            )
          }
        >
          {`http://localhost:8080/api/services/webhook/${data.url}`}
        </Typography>
      </Tooltip>
      <WebhookSettingsPopper
        title={info.webhook.name}
        webhook={info.webhook}
        anchor={editWhPopper}
        setAnchor={setEditWhPopper}
        handleSave={handleUpdateWebhook}
      />
    </ServiceForm>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  updateWebhook: (id, data) => dispatch(actions.startUpdateWebhook(id, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
