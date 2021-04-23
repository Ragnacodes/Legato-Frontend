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

import ServiceForm from '../../ServiceForm';
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
    webhook: data.webhook || '',
    max: data.max || '',
  });

  const [errors, setErrors] = useState({
    max: false,
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

  useEffect(() => {
    if (info['webhook']) {
      setInfo((prev) => ({
        ...prev,
        webhook: webhooks.find((w) => w.id === info['webhook'].id),
      }));
    }
  }, [webhooks]);

  const handleUpdateWebhook = (data) => {
    if (info['webhook']) {
      updateWebhook(info['webhook'].id, data)
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
    console.log(info, data);
    if (!!info['webhook']) {
      setErrors((prev) => ({
        ...prev,
        webhook: false,
      }));
    }
  }, [info]);

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const CopyToClipboard = () => {
    navigator.clipboard.writeText(info['webhook'].url).then(
      function () {
        /* clipboard successfully set */
        setCopied(true);
      },
      function () {
        /* clipboard write failed */
      }
    );
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
        <span onClick={() => CopyToClipboard()} ref={ref} {...props} />
      </Tooltip>
    );
  });
  const FormHelperTextProps = {
    component: HelperTextComponent,
    classes: {
      root: 'url-helper-text MuiFormHelperText-root',
    },
  };

  const handleCancel = () => {
    setAnchorEl(null);
    setInfo({
      webhook: data.webhook || '',
      max: data.webhook || '',
    });
    setErrors({
      max: false,
      webhook: !!data.webhook,
    });
  };

  const handleSave = () => {
    editElement(id, { data: { ...data, ...info } });
    setAnchorEl(null);
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
            info['webhook'] ? info['webhook'].url : 'Please select a webhook.'
          }
          FormHelperTextProps={FormHelperTextProps}
          variant="outlined"
        >
          {webhooks.map((wh) => (
            <MenuItem key={wh.id} value={wh}>
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
          title={info['webhook'].name}
          webhook={info['webhook']}
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

      <TextField
        value={info['max']}
        name="max"
        className="text-field"
        label="Maximum number of results"
        type="number"
        variant="outlined"
        size="small"
        onChange={handleChange}
      />
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
