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
import ScenarioNodes from "../Scenarios/ScenarioNodes";
import * as actions from "../../actions/webhooks";
const Webhook = ({
  id,
  name,
  toggle,
  address,
  renameWebhook,
  toggleWebhookState,
  removeWebhook,
}) => {
  const [renameToggle, setRenameToggle] = useState(false);
  const [modifiedName, setName] = useState(name);

  const onTextFieldChange = (e) => {
    setName(e.target.value);
  };
  const saveNewName = () => {
    console.log(modifiedName);
    renameWebhook(id, modifiedName);
    setRenameToggle(false);
  };

  const cancelNewName = () => {
    setRenameToggle(false);
    setName(name);
  };

  const handleToggleState = () => {
    toggleWebhookState(id);
  };

  const handleRemoveWebhook = () => {
    removeWebhook(id);
  };

  return (
    <ListItem className="webhook-item">
      {/* <ScenarioNodes nodes={nodes} /> */}

      <ListItemText
        primary={
          renameToggle ? (
            <TextField
              className="webhook-text-field"
              onChange={onTextFieldChange}
              name="webhook-name"
              variant="outlined"
              size="small"
              defaultValue={name}
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
              className="webhook-name"
              onClick={() => setRenameToggle(true)}
              variant="body1"
            >
              {name}
            </Typography>
          )
        }
        secondary={<Link href={address}>{address}</Link>}
        className="name"
      />

      <ListItemSecondaryAction className="webhook-actions">
        <Button
          size="small"
          variant="contained"
          color="primary"
          disableElevation
          className="edit-button"
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
        <Tooltip title={toggle ? "Disable?" : "Enable?"} placement="top">
          <Switch
            edge="end"
            onChange={handleToggleState}
            checked={toggle}
            color="primary"
            size="small"
            className="switch"
          />
        </Tooltip>

        <Tooltip title="Delete Webhook" placement="right">
          <IconButton
            aria-label="delete"
            className="delete"
            color="primary"
            onClick={handleRemoveWebhook}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const mapDispatchToProps = (dispatch) => ({
  renameWebhook: (id, data) => dispatch(actions.renameWebhook(id, data)),
  toggleWebhookState: (id) => dispatch(actions.toggleWebhookState(id)),
  removeWebhook: (id) => dispatch(actions.removeWebhook(id)),
});

export default connect(null, mapDispatchToProps)(Webhook);
