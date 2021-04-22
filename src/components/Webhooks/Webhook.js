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
import { Edit, LocalShipping } from '@material-ui/icons';
import EditModal from './WebhookSettingsModal';
import WebhookQueue from './WebhookQueue';
import { errorNotification, successNotification } from '../Layout/Notification';
import OnClickTextField from '../OnClickTextField';

const Webhook = ({ webhook, username, updateWebhook }) => {
  const { id, name, active, url } = webhook;
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [queueModal, setQueueModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleToggleState = () => {
    handleUpdateWebhook({ enable: !active });
  };

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
    updateWebhook(id, data)
      .then((str) => {
        successNotification(str);
      })
      .catch((str) => {
        errorNotification(str);
      });
  };

  const CopyToClipboard = () => {
    navigator.clipboard.writeText(url).then(
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
    <ListItem className="wh-item">
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
            defaultText={name}
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
            <span onClick={CopyToClipboard}>{url}</span>
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
        <Tooltip title={active ? 'Disable?' : 'Enable?'} placement="top">
          <Switch
            edge="end"
            onChange={handleToggleState}
            checked={active}
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
        {/* <Tooltip title="Delete Webhook" placement="right">
          <IconButton
            aria-label="delete"
            className="delete-button"
            color="primary"
            onClick={handleRemoveWebhook}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Tooltip> */}
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const mapStateToProps = (state) => ({
  username: state.auth.username,
});

const mapDispatchToProps = (dispatch) => ({
  updateWebhook: (id, data) => dispatch(actions.startUpdateWebhook(id, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Webhook);
