import React from 'react';
import { connect } from 'react-redux';
import { startRemoveConnection, startEditConnection } from '../../actions/connections';
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListItemIcon,
  IconButton,
  Tooltip
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faSpotify, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { Delete } from '@material-ui/icons'
import OnClickTextField from '../OnClickTextField';


const Connection = ({ id, name, type, removeConnection, editConnection }) => {
  const handleEditConnection = (newName) => {
    editConnection(id, newName);
  };

  const handleRemoveConnection = () => {
    removeConnection(id);
  };

  const switchCase = (type) => {
    switch (type) {
      case 'github':
        return (
          <ListItemIcon className="connections-icon">
            <FontAwesomeIcon icon={faGithub} />
          </ListItemIcon>
        );
      case 'gmail':
        return (
          <ListItemIcon className="connections-icon">
            <FontAwesomeIcon icon={faGoogle} />
          </ListItemIcon>
        );
      case 'spotify':
        return (
          <ListItemIcon className="connections-icon">
            <FontAwesomeIcon icon={faSpotify} />
          </ListItemIcon>
        );
      case 'discords':
        return (
          <ListItemIcon className="connections-icon">
            <FontAwesomeIcon icon={faDiscord} />
          </ListItemIcon>
        );
      case 'sshes':
        return (
          <ListItemIcon className="connections-icon">
            <FontAwesomeIcon icon={faTerminal} />
          </ListItemIcon>
      );
      default:
        return null;
    }
  }
  return (
    <ListItem>
      { switchCase(type)}

      <ListItemText primary={<OnClickTextField
        defaultText={name}
        handleSave={(modifiedName) => handleEditConnection(modifiedName)}
        handleCancel={() => {}}
        divClassName=""
        textfieldSize="small"
      />} />

      <ListItemSecondaryAction className="control">
        <Tooltip title="Delete connection." placement="top">
          <IconButton aria-label="delete" color="secondary" onClick={handleRemoveConnection}>
            <Delete fontSize="small" />
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editConnection: (type, data) => dispatch(startEditConnection(type, data)),
  removeConnection: (type, data) => dispatch(startRemoveConnection(type, data)),
});

export default connect(null, mapDispatchToProps)(Connection);