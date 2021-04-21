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
import { Delete, Telegram, GitHub, QueueMusic, Email } from '@material-ui/icons';
import OnClickTextField from '../OnClickTextField';


const Connection = ({ ID, Name, Token_type, removeConnection, editConnection }) => {
  const handleEditConnection = (newName) => {
    editConnection(ID, newName);
  };

  const handleRemoveConnection = () => {
    removeConnection(ID);
  };

  const switchCase = (Token_type) => {
    switch (Token_type) {
      case 'github':
        return (
          <ListItemIcon><GitHub /></ListItemIcon>
        );
      case 'gmail':
        return (
          <ListItemIcon><Email /></ListItemIcon>
        );
      case 'spotify':
        return (
          <ListItemIcon><QueueMusic /></ListItemIcon>
        );
      case 'telegram':
        return (
          <ListItemIcon><Telegram /></ListItemIcon>
        );
      case 'discord':
        return (
          <ListItemIcon><Telegram /></ListItemIcon>
        );
      default:
        return null;
    }
  }
  return (
    <ListItem>
      { switchCase(Token_type)}

      <ListItemText primary={<OnClickTextField
        defaultText={Name}
        handleSave={(modifiedName) => handleEditConnection(modifiedName)}
        handleCancel={() => {}}
        divClassName=""
        textfieldSize="small"
      />} />

      <ListItemSecondaryAction className="control">
        <Tooltip title="Delete connection." placement="top">
          <IconButton aria-label="delete" color="primary" onClick={handleRemoveConnection}>
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