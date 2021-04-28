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
import { faDiscord, faSpotify, faGoogle, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Delete } from '@material-ui/icons'
import OnClickTextField from '../OnClickTextField';


const Connection = ({ Id, Name, Token_type, removeConnection, editConnection }) => {
  const handleEditConnection = (newName) => {
    editConnection(Id, newName);
  };

  const handleRemoveConnection = () => {
    removeConnection(Id);
  };

  const switchCase = (Token_type) => {
    switch (Token_type) {
      case 'github':
        return (
          <ListItemIcon style={{fontSize:30}}>
            <FontAwesomeIcon icon={faGithub} />
          </ListItemIcon>
        );
      case 'gmail':
        return (
          <ListItemIcon style={{fontSize:30}}>
            <FontAwesomeIcon icon={faGoogle} />
          </ListItemIcon>
        );
      case 'spotify':
        return (
          <ListItemIcon style={{fontSize:30}}>
            <FontAwesomeIcon icon={faSpotify} />
          </ListItemIcon>
        );
      case 'discord':
        return (
          <ListItemIcon style={{fontSize:30}}>
            <FontAwesomeIcon icon={faDiscord} />
          </ListItemIcon>
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