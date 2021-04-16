import React from 'react';
import Typography from '@material-ui/core/Typography';

const Preloader = () => {
    return (
        <section class="wrapper centered-container">
            <div class="spinner">
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