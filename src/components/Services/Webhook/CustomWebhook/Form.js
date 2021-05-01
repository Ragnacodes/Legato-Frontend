import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/webhooks';
import { MenuItem, IconButton, TextField, Tooltip } from '@material-ui/core';
import { Add, Edit } from '@material-ui/icons';
import {
  errorNotification,
  successNotification,
} from '../../../Layout/Notification';
import WebhookSettingsPopper from '../../../Webhooks/WebhookSettingsPopper';

import ServiceForm from '../../../PopoverForm';
const Form = ({
  id,
  data,
  editElement,
  setAnchorEl,
  webhooks,
  getWebhooks,
  addWebhook,
  updateWebhook,
}) => {
  const [info, setInfo] = useState({
    name: data.name || '',
    webhook: data.webhook || '',
    max: data.max || '',
  });

  const [errors, setErrors] = useState({
    webhook: !!data.webhook,
  });

  const [editWhPopper, setEditWhPopper] = useState(null);
  const [addWhPopper, setAddWhPopper] = useState(null);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    getWebhooks()
      .then(() => {})
      .catch(() => {});
  }, [getWebhooks]);

  const handleUpdateWebhook = (data) => {
    if (info['webhook']) {
      updateWebhook(info['webhook'], data)
        .then((res) => {
          successNotification(res.message);
        })
        .catch((err) => {
          errorNotification(err.message);
        });
    }
  };

  const addNewWebhook = (data) => {
    addWebhook(data)
      .then((res) => {
        successNotification(res.message);
      })
      .catch((err) => {
        errorNotification(err.message);
      });
  };

  useEffect(() => {
    if (!!info['webhook']) {
      setErrors((prev) => ({
        ...prev,
        webhook: false,
      }));
    }
  }, [info]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const CopyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(function () {
      setCopied(true);
    });
  };

  const handleCancel = () => {
    setAnchorEl(null);
    setInfo({
      webhook: data.webhook || '',
      max: data.webhook || '',
    });
    setErrors({
      webhook: !!data.webhook,
    });
  };

  const handleSave = () => {
    editElement(id, { name: info.name, data: { ...data, ...info } });
    setAnchorEl(null);
  };

  const FindWebhook = (id) => {
    if (id === '') return {};
    return webhooks.find((w) => w.id === id);
  };

  const HelperTextComponent = React.forwardRef((props, ref) => {
    return (
      <Tooltip
        onClose={() => setCopied(false)}
        title={copied ? 'Copied!' : 'Copy to Clipboard'}
        placement="bottom"
        arrow
        classes={{
          popper: 'custom-helper-tooltip',
        }}
      >
        <span
          onClick={() => CopyToClipboard(FindWebhook(info['webhook']).url)}
          ref={ref}
          {...props}
        />
      </Tooltip>
    );
  });
  const FormHelperTextProps = {
    component: HelperTextComponent,
    classes: {
      root: 'url-helper-text MuiFormHelperText-root',
    },
  };

  return (
    <ServiceForm
      className="custom-webhook"
      title="Custom Webhook"
      disabledSave={errors['webhook']}
      handleSave={handleSave}
      handleCancel={handleCancel}
    >
      <div className="connection-field">
        <TextField
          disabled={Boolean(editWhPopper)}
          name="webhook"
          className="text-field"
          size="small"
          select
          label="Webhook"
          value={info['webhook']}
          onChange={handleChange}
          helperText={
            info['webhook']
              ? FindWebhook(info['webhook']).url
              : 'Please select a webhook.'
          }
          FormHelperTextProps={info['webhook'] ? FormHelperTextProps : {}}
          variant="outlined"
        >
          {webhooks.map((wh) => (
            <MenuItem key={wh.id} value={wh.id}>
              {wh.name}
            </MenuItem>
          ))}
        </TextField>

        <IconButton
          size="small"
          className="edit-icon"
          disabled={!info['webhook']}
          onClick={(e) => setEditWhPopper(e.currentTarget)}
        >
          <Edit />
        </IconButton>
        <WebhookSettingsPopper
          title={FindWebhook(info['webhook']).name}
          webhook={FindWebhook(info['webhook'])}
          anchor={editWhPopper}
          setAnchor={setEditWhPopper}
          handleSave={handleUpdateWebhook}
        />
        <IconButton
          size="small"
          className="add-icon"
          onClick={(e) => setAddWhPopper(e.currentTarget)}
        >
          <Add />
        </IconButton>
        <WebhookSettingsPopper
          title="Add Webhook"
          webhook={{
            name: 'New Webhook',
          }}
          anchor={addWhPopper}
          setAnchor={setAddWhPopper}
          handleSave={addNewWebhook}
        />
      </div>

      
    </ServiceForm>
  );
};
const mapStateToProps = (state) => ({
  webhooks: state.webhooks.webhooks,
});

const mapDispatchToProps = (dispatch) => ({
  getWebhooks: () => dispatch(actions.startSetWebhooks()),
  addWebhook: (data) => dispatch(actions.startAddWebhook(data)),
  updateWebhook: (id, data) => dispatch(actions.startUpdateWebhook(id, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
