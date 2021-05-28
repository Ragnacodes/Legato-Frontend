import React from 'react';
import { Typography } from '@material-ui/core';

const Preloader = () => {
    return (
        <section className="wrapper centered-container">
            <div className="spinner">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
            </div>
            <Typography
                align="center"
                variant="overline"
                className="text"
            >
                Loading ...
            </Typography>
        </section>
    );
};

export default Preloader;