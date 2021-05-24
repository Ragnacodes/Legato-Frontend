import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { toggleDrawer } from '../../actions/drawer';
import {
    List,
    IconButton,
    Drawer,
    Divider
} from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import { mainListItems, bottomListItems } from './MenuItems';
import logoIcon from '../../styles/assets/logo.png';
import style from '../../styles/layout/layout';

const CustomDrawer = ({ isAuthenticated, open, toggleDrawer }) => {
    const classes = style();
    return (
        <> {
            isAuthenticated &&
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <div className={classes.logo}>
                        <img src={logoIcon} height="32px" alt="Legato logo"/>
                    </div>
                    <IconButton onClick={() => toggleDrawer()}>
                        <ChevronLeft />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{bottomListItems}</List>
            </Drawer>
        } </>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.token,
        open: state.drawer.open
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDrawer: () => dispatch(toggleDrawer())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);