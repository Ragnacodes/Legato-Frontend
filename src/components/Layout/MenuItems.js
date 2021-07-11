import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import {
  Dashboard,
  AccountTree,
  Link,
  Language,
  // AccountCircle
} from '@material-ui/icons';
import Logout from './Logout';

export const mainListItems = (
  <div>

    <ListItem button component={NavLink} to="/dashboard" activeClassName="Mui-selected">
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button component={NavLink} to="/scenarios" activeClassName="Mui-selected">
      <ListItemIcon>
        <AccountTree />
      </ListItemIcon>
      <ListItemText primary="Scenarios" />
    </ListItem>

    <ListItem button component={NavLink} to="/connections" activeClassName="Mui-selected">
      <ListItemIcon>
        <Link />
      </ListItemIcon>
      <ListItemText primary="Connections" />
    </ListItem>

    <ListItem button component={NavLink} to="/webhooks" activeClassName="Mui-selected">
      <ListItemIcon>
        <Language />
      </ListItemIcon>
      <ListItemText primary="Webhooks" />
    </ListItem>

  </div>
);

export const bottomListItems = (
  <div>

    {/* <ListItem button component={NavLink} to="/profile" activeClassName="Mui-selected">
      <ListItemIcon>
        <AccountCircle />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem> */}

    <Logout />

  </div>
);