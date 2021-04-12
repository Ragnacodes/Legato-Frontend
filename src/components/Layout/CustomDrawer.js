import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, bottomListItems } from './MenuItems';
import { toggleDrawer } from '../../actions/drawer';
import Logo from '../../styles/assets/Legato-Logo.png';
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
                        <img src={Logo} height="32px" alt="Legato logo"/>
                    </div>
                    <IconButton onClick={() => toggleDrawer()}>
                        <ChevronLeftIcon />
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