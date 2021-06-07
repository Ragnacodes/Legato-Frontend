import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

export const Logout = ({ logout }) => (
    <ListItem button onClick={logout}>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
);

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(undefined, mapDispatchToProps)(Logout);