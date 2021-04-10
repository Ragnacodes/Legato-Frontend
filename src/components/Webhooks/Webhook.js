import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
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
} from "@material-ui/core";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import * as actions from "../../actions/webhooks";
import EditModal from "./WebhookSettingsModal";
import WebhookQueue from "./WebhookQueue";
import header from "../../utils/api-header";
import axios from "axios";
import { errorNotification, successNotification } from "../Notification";
const Webhook = ({ webhook, updateWebhook }) => {
  const { id, name, active, url, queue, ...other } = webhook;
  const [renameToggle, setRenameToggle] = useState(false);
  const [modifiedName, setName] = useState(name);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [queueModal, setQueueModal] = useState(false);
  const onTextFieldChange = (e) => {
    setName(e.target.value);
  };
  const saveNewName = () => {
    handleUpdateWebhook({ name: modifiedName });
    // renameWebhook(id, modifiedName);
    setRenameToggle(false);
  };

  const cancelNewName = () => {
    setRenameToggle(false);
    setName(name);
  };

  const handleToggleState = () => {
    handleUpdateWebhook({ enable: !active });
  };

  // const handleRemoveWebhook = () => {
  //   removeWebhook(id);
  // };

  const handleUpdateWebhook = (data) => {
    console.log(header);
    updateWebhook(webhook.id, { ...data, active: data.enable });
    axios
      .patch(
        `http://localhost:8080/api/users/d/services/webhook/18f9453d-f1a2-40ff-8d3c-5a7f12e90b6c`,
        {
          name: data.name,
          enable: data.enable,
        },
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImQiLCJleHAiOjE2MTgwMjYzMjN9.EUxm2NDgX4ox2BFuJzY1LqHMBsh1haSOuLhVjKs_l5g",
          },
        }
      )
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
                        <SaveAltIcon />
                      </IconButton>
                    )}
                    <IconButton
                      aria-label="save-name"
                      onClick={cancelNewName}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      <ClearIcon />
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
          startIcon={<EditIcon />}
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
        <Button
          size="small"
          variant="contained"
          color="primary"
          disableElevation
          className="queue-button"
          startIcon={<LocalShippingIcon />}
          onClick={() => setQueueModal(true)}
        >
          {queue.length}
        </Button>
        <WebhookQueue
          queue={queue}
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
  // webhook: props.webhook,
});

const mapDispatchToProps = (dispatch) => ({
  updateWebhook: (id, data) => dispatch(actions.updateWebhook(id, data)),
  // renameWebhook: (id, data) => dispatch(actions.renameWebhook(id, data)),
  // toggleWebhookState: (id) => dispatch(actions.toggleWebhookState(id)),
  // removeWebhook: (id) => dispatch(actions.removeWebhook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Webhook);
