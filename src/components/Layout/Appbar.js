import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CustomDrawer from '../Layout/CustomDrawer';
import { toggleDrawer } from '../../actions/drawer';
import style from '../../styles/layout/layout';

const Appbar = ({
    isAuthenticated,
    leftChildren,
    rightChildren,
    open,
    toggleDrawer,
    noDrawer = false
}) => {
    const classes = style();
    return (
        <>
            <AppBar
                position="absolute"
                className={clsx('app-bar', classes.appBar, open && !noDrawer && classes.appBarShift)}
            >
                <Toolbar className={classes.toolbar}>

                    {
                        isAuthenticated && !noDrawer &&
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => toggleDrawer()}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>
                    }

                    {/* Page title, Sketchpad title input */}
                    <div style={{flexGrow: 1}}>{leftChildren}</div>

                    {/* Buttons */}
                    <div className="right_children">{rightChildren}</div>

                </Toolbar>
            </AppBar>

            { !noDrawer && <CustomDrawer /> }
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Appbar);