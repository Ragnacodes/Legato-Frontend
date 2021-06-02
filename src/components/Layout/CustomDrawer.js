import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { toggleDrawer } from '../../actions/drawer';
import {
    Grid,
    List,
    IconButton,
    Drawer,
    Divider,
    Typography
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
                    <Grid container justify="center" alignItems="center" spacing={1}>
                        <Grid item>
                            <Grid container justify="center">
                                <img src={logoIcon} height="35px" alt="Legato logo"/>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">Abstergo</Typography>
                        </Grid>
                    </Grid>
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