import React from 'react';
import { NavLink } from 'react-router-dom';
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
import { Delete, Telegram, GitHub, QueueMusic, Email } from '@material-ui/icons';

const Connection = ({ ID, Name, Token_type, removeConnection }) => {
  // const handleEditConnection = () => {
  //   editConnection(ID);
  // };

  const handleRemoveConnection = () => {
    removeConnection(ID);
  };

  const switchCase=(Token_type) => {
    switch (Token_type) {
      case 'git':
        return (
          <ListItemIcon><GitHub /></ListItemIcon>
        );
      case 'google':
        return (
          <ListItemIcon><Email /></ListItemIcon>
        );
      case 'spotify':
        return (
          <ListItemIcon><QueueMusic /></ListItemIcon>
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
    <ListItem className="connection" button component={NavLink} to={`/sketchpad/${ID}`}>
      { switchCase(Token_type) }

      <ListItemText primary={Name} className="name" />

      <ListItemSecondaryAction className="control">
        {/* <Tooltip title="Edit connection." placement="top">
          <IconButton aria-label="edit" color="primary" onClick={handleEditConnection}>
            <EditIcon fontSize="small" />
          </IconButton>
        </Tooltip> */}
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