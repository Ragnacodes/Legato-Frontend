import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import sketchpadIcon from '../../styles/assets/landing/sketchpad.png';

const FeaturesSection = () => {
    return (
        <section
            id="features"
            className="section section--features"
        >
            <Container>
                <Typography
                    gutterBottom
                    variant="h5"
                    align="center"
                    className="section__title"
                >
                    Automate any workflow in your business
                </Typography>
                <Typography
                    variant="body2"
                    align="center"
                >
                    Drag and drop the apps you want to connect, and watch as automation does all the heavy lifting for you.
                </Typography>
                <Typography
                    variant="body2"
                    align="center"
                >
                    Your integrations can be as simple or as complex as you design them.
                </Typography>
                <Box mt={4}>
                    <img src={sketchpadIcon}
                        alt="sketchpad"
                        width="100%"
                        className="section__sketchpad"
                    />
                </Box>
            </Container>
        </section>
    );
};

export default FeaturesSection;