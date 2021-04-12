import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { logout } from '../../actions/auth';

const LandingButtons = ({ logout }) => {
    return (
        <>
            <Button
                color="secondary"
                onClick={logout}
            >
                Logout
            </Button>
            <Button
                component={NavLink} to="/dashboard"
                variant="contained"
                color="secondary"
            >
                Dashboard
            </Button>
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(undefined, mapDispatchToProps)(LandingButtons);