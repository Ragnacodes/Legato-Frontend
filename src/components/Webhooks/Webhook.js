import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/webhooks';
import {
  Button,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  Link,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { Edit, Delete, LocalShipping } from '@material-ui/icons';
import EditModal from './WebhookSettingsModal';
import WebhookQueue from './WebhookQueue';
import { errorNotification, successNotification } from '../Layout/Notification';
import OnClickTextField from '../OnClickTextField';
import YesNoModal from '../YesNoModal';
const Webhook = ({ webhook, updateWebhook, deleteWebhook }) => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [queueModal, setQueueModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [yesNoVisible, setYesNoVisible] = useState(false);
  const handleToggleState = () => {
    handleUpdateWebhook({ enable: !webhook['active'] });
  };

  React.useEffect(() => {
    console.log('changed');
  }, [webhook]);
  const mockQueue = [
    {
      id: 1,
      type: 'webhook',
      created_at: 'Fri Apr 09 2021 22:44:31',
      size: '1B',
      scenarios: '12345',
      data: {},
    },
    {
      id: 2,
      type: 'webhook',
      created_at: 'Fri Apr 09 2021 22:44:31',
      size: '2B',
      scenarios: '12345',
      data: {
        key: 'value',
      },
    },
    {
      id: 3,
      type: 'webhook',
      created_at: 'Fri Apr 09 2021 22:44:31',
      size: '3B',
      scenarios: '12345',
      data: {
        key: 'value',
        key2: 'value2',
      },
    },
  ];

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
        <Tooltip
          title={webhook['active'] ? 'Disable?' : 'Enable?'}
          placement="top"
        >
          <Switch
            edge="end"
            onChange={handleToggleState}
            checked={webhook['active']}
            color="primary"
            size="small"
            className="switch"
          />
        </Tooltip>
        <IconButton
          size="small"
          variant="contained"
          color="primary"
          className="queue-button"
          onClick={() => setQueueModal(true)}
        >
          <LocalShipping />
        </IconButton>
        <WebhookQueue
          queue={mockQueue}
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
          text={`Delete ${webhook['name']}?`}
          visible={yesNoVisible}
          setVisible={setYesNoVisible}
          handleYes={handleDeleteWebhook}
          handleNo={() => {}}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateWebhook: (id, data) => dispatch(actions.startUpdateWebhook(id, data)),
  deleteWebhook: (id) => dispatch(actions.startDeleteWebhook(id)),
});

export default connect(null, mapDispatchToProps)(Webhook);
