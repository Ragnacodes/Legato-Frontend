import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PageNotFoundSVG from '../../styles/assets/page-not-found.svg';

const NotFoundPage = () => {
    return (
        <div className="centered-container">
            <img
                src={PageNotFoundSVG}
                width="400px"
                height="400px"
                alt="404 Page Not Found."
            />
            <Button component={NavLink} to="/" color="primary">
                Back To Home
            </Button>
        </div>
    );
};

export default NotFoundPage;