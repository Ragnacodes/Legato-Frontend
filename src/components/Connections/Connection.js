import React from 'react';
import { connect } from 'react-redux';
import { startRemoveConnection } from '../../actions/connections';
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListItemIcon,
  IconButton,
  Tooltip
} from '@material-ui/core';
import { Delete, Telegram, GitHub, QueueMusic, Email, Edit } from '@material-ui/icons';

const Connection = ({ ID, Name, Token_type, removeConnection }) => {
  // const handleEditConnection = () => {
  //   editConnection(ID);
  // };

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

      <ListItemText primary={Name} />

      <ListItemSecondaryAction className="control">
        <Tooltip title="Rename." placement="top">
          <IconButton aria-label="edit" color="primary">
            <Edit fontSize="small" />
          </IconButton>
        </Tooltip>
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
  // editConnection: (type, data) => dispatch(editConnection(type, data)),
  removeConnection: (type, data) => dispatch(startRemoveConnection(type, data)),
});

export default connect(null, mapDispatchToProps)(Connection);