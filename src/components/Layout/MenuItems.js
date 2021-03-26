import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import LinkIcon from '@material-ui/icons/Link';
import LanguageIcon from '@material-ui/icons/Language';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const mainListItems = (
  <div>

    <ListItem button component={NavLink} to="/dashboard" activeClassName="Mui-selected">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button component={NavLink} to="/scenarios" activeClassName="Mui-selected">
      <ListItemIcon>
        <AccountTreeIcon />
      </ListItemIcon>
      <ListItemText primary="Scenarios" />
    </ListItem>

    <ListItem button component={NavLink} to="/connections" activeClassName="Mui-selected">
      <ListItemIcon>
        <LinkIcon />
      </ListItemIcon>
      <ListItemText primary="Connections" />
    </ListItem>

    <ListItem button component={NavLink} to="/webhooks" activeClassName="Mui-selected">
      <ListItemIcon>
        <LanguageIcon />
      </ListItemIcon>
      <ListItemText primary="Webhooks" />
    </ListItem>

    <ListItem button component={NavLink} to="/keys" activeClassName="Mui-selected">
      <ListItemIcon>
        <VpnKeyIcon />
      </ListItemIcon>
      <ListItemText primary="SSH Keys" />
    </ListItem>

  </div>
);

export const bottomListItems = (
  <div>

    <ListItem button component={NavLink} to="/profile" activeClassName="Mui-selected">
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>

    <ListItem button component={NavLink} to="/logout" activeClassName="Mui-selected">
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>

  </div>
);