import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/webhooks';
import {
  Button,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Link,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { Edit, Delete, LocalShipping, Error } from '@material-ui/icons';
import EditModal from './WebhookSettingsModal';
import WebhookHistory from './WebhookHistory';
import { errorNotification, successNotification } from '../Layout/Notification';
import OnClickTextField from '../OnClickTextField';
import YesNoModal from '../YesNoModal';
export function Webhook({ webhook, updateWebhook, deleteWebhook }) {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [queueModal, setQueueModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [yesNoVisible, setYesNoVisible] = useState(false);

  const handleUpdateWebhook = (data) => {
    updateWebhook(webhook['id'], data)
      .then((res) => {
        successNotification(res.message);
      })
      .catch((err) => {
        errorNotification(err.message);
      });
  };

  const handleDeleteWebhook = () => {
    deleteWebhook(webhook['id'])
      .then((res) => {
        successNotification(res.message);
      })
      .catch((err) => {
        errorNotification(err.message);
      });
  };

  const CopyToClipboard = () => {
    navigator.clipboard.writeText(webhook['url']).then(
      function () {
        /* clipboard successfully set */
        setCopied(true);
      },
      function () {
        /* clipboard write failed */
      }
    );
  };

  return (
    <ListItem key={webhook} className="wh-item">
      <EditModal
        webhook={webhook}
        visible={editModalVisible}
        handleSave={handleUpdateWebhook}
        setVisible={setEditModalVisible}
      />
      <ListItemText
        className="name"
        primary={
          <OnClickTextField
            defaultText={webhook['name']}
            handleSave={(modifiedName) =>
              handleUpdateWebhook({ name: modifiedName })
            }
            handleCancel={() => {}}
            divClassName=""
            textfieldSize="small"
          />
        }
        secondary={
          <Tooltip
            onClose={() => setCopied(false)}
            title={copied ? 'Copied!' : 'Copy to Clipboard'}
            placement="bottom-start"
            arrow
            classes={{
              popper: 'custom-helper-tooltip',
            }}
          >
            <Link
              onClick={(e) => {
                e.preventDefault();
                CopyToClipboard();
              }}
            >
              {webhook['url']}
            </Link>
          </Tooltip>
        }
      />

      <ListItemSecondaryAction className="wh-actions">
        <Button
          size="small"
          variant="contained"
          color="primary"
          disableElevation
          className="edit-button"
          startIcon={<Edit />}
          onClick={() => setEditModalVisible(true)}
        >
          Edit
        </Button>
        <IconButton
          size="small"
          variant="contained"
          color="primary"
          className="queue-button"
          onClick={() => setQueueModal(true)}
        >
          <LocalShipping />
        </IconButton>
        <WebhookHistory
          id={webhook.id}
          visible={queueModal}
          setVisible={setQueueModal}
        />
        <Tooltip title="Delete Webhook" placement="right">
          <IconButton
            aria-label="delete"
            className="delete-button"
            color="primary"
            onClick={() => setYesNoVisible(true)}
          >
            <Delete fontSize="small" />
          </IconButton>
        </Tooltip>
        <YesNoModal
          title="Delete Webhook"
          text={`Delete ${webhook['name']}? You can't create a webhook with the same url again.`}
          visible={yesNoVisible}
          setVisible={setYesNoVisible}
          handleYes={handleDeleteWebhook}
          handleNo={() => {}}
          icon={<Error color="secondary" fontSize="inherit" />}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateWebhook: (id, data) => dispatch(actions.startUpdateWebhook(id, data)),
  deleteWebhook: (id) => dispatch(actions.startDeleteWebhook(id)),
});

export default connect(null, mapDispatchToProps)(Webhook);
