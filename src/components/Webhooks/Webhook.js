import React, { useState } from 'react';
import Axios from '../../utils/axiosConfig';
import { connect } from 'react-redux';
import * as actions from '../../actions/webhooks';
import {
  Button,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  Link,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { SaveAlt, Clear, Edit, LocalShipping} from '@material-ui/icons';
import EditModal from './WebhookSettingsModal';
import WebhookQueue from './WebhookQueue';
import { errorNotification, successNotification } from '../Layout/Notification';

const Webhook = ({ webhook, username, updateWebhook }) => {
  const { id, name, active, url } = webhook;
  const [renameToggle, setRenameToggle] = useState(false);
  const [modifiedName, setName] = useState(name);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [queueModal, setQueueModal] = useState(false);
  const onTextFieldChange = (e) => {
    setName(e.target.value);
  };
  const saveNewName = () => {
    handleUpdateWebhook({ name: modifiedName });
    setRenameToggle(false);
  };

  const cancelNewName = () => {
    setRenameToggle(false);
    setName(name);
  };

  const handleToggleState = () => {
    handleUpdateWebhook({ enable: !active });
  };

  const mockQueue = [
    {
      id: 1,
      type: "webhook",
      created_at: "Fri Apr 09 2021 22:44:31",
      size: "1B",
      scenarios: "12345",
      data: {},
    },
    {
      id: 2,
      type: "webhook",
      created_at: "Fri Apr 09 2021 22:44:31",
      size: "2B",
      scenarios: "12345",
      data: {
        key: "value",
      },
    },
    {
      id: 3,
      type: "webhook",
      created_at: "Fri Apr 09 2021 22:44:31",
      size: "3B",
      scenarios: "12345",
      data: {
        key: "value",
        key2: "value2",
      },
    },
  ];

  const handleUpdateWebhook = (data) => {
    Axios.put(`/users/${username}/services/webhooks/${id}`, {
      name: data.name,
      isEnable: data.enable,
    })
      .then((response) => {
        console.log(response);
        successNotification("Updated successfully.");
        updateWebhook(webhook.id, data);
      })
      .catch((error) => {
        if (error.response) {
          let str = error.response.data.message;
          errorNotification(
            "Unable to update: " +
              str.charAt(0).toUpperCase() +
              str.slice(1) +
              "."
          );
        } else {
          errorNotification("Unable to update: " + error.message);
        }
      });
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
        primary={
          renameToggle ? (
            <TextField
              className="wh-name-field"
              onChange={onTextFieldChange}
              name="webhook-name"
              variant="outlined"
              size="small"
              defaultValue={name}
              error={!modifiedName}
              // helperText={!modifiedName && "Required."}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {modifiedName && (
                      <IconButton
                        aria-label="save-name"
                        onClick={saveNewName}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        <SaveAlt />
                      </IconButton>
                    )}
                    <IconButton
                      aria-label="save-name"
                      onClick={cancelNewName}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      <Clear />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          ) : (
            <Typography
              className="wh-name"
              onClick={() => setRenameToggle(true)}
              variant="body1"
            >
              {name}
            </Typography>
          )
        }
        secondary={<Link href={url}>{url}</Link>}
        className="name"
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
        <Tooltip title={active ? "Disable?" : "Enable?"} placement="top">
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
  updateWebhook: (id, data) => dispatch(actions.updateWebhook(id, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Webhook);
