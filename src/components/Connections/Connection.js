import React, { useState } from 'react';
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
import { Delete } from '@material-ui/icons';
import ConnectionServiceIcon from '../ServiceIcons/ConnectionServiceIcon';
import OnClickTextField from '../OnClickTextField';
import YesNoModal from '../YesNoModal';


const Connection = ({ id, name, type, removeConnection, editConnection }) => {
  
  const [deleteModal, setDeleteModal] = useState(false);

  const handleEditConnection = (newName) => {
    editConnection(id, newName);
  };

  const handleRemoveConnection = () => {
    removeConnection(id);
  };

  const switchCase = (type) => {
    switch (type) {
      case 'githubs':
        return (
          <ListItemIcon>
            <ConnectionServiceIcon service="github" />
          </ListItemIcon>
        );
      case 'gmails':
        return (
          <ListItemIcon>
            <ConnectionServiceIcon service="gmail" />
          </ListItemIcon>
        );
      case 'spotifies':
        return (
          <ListItemIcon>
            <ConnectionServiceIcon service="spotify" />
          </ListItemIcon>
        );
      case 'discords':
        return (
          <ListItemIcon>
            <ConnectionServiceIcon service="discord" />
          </ListItemIcon>
        );
      case 'sshes':
        return (
          <ListItemIcon>
            <ConnectionServiceIcon service="ssh" />
          </ListItemIcon>
      );
      case 'telegrams':
        return (
          <ListItemIcon>
            <ConnectionServiceIcon service="telegram" />
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
      
      <YesNoModal
        text={`Delete ${name} ?`}
        visible={deleteModal}
        setVisible={setDeleteModal}
        handleYes={handleRemoveConnection}
        handleNo={() => {}} 
      />

      <ListItemSecondaryAction className="control">
        <Tooltip title="Delete connection." placement="top">
          <IconButton aria-label="delete" color="secondary" onClick={() => setDeleteModal(true)}>
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