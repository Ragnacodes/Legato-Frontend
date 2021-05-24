import React from 'react';
import { Container, Typography, Grid, Button, Box } from '@material-ui/core';

const JoinSection = ({ setSignupOpen }) => {
    return (
        <section
            id="services"
            className="section section--join"
        >
            <Container>
                <Typography
                    gutterBottom
                    variant="h5"
                    align="center"
                    color="inherit"
                    className="section__title"
                >
                    Start automating today, it’s free
                </Typography>
                <Typography
                    gutterBottom
                    variant="body2"
                    align="center"
                    color="inherit"
                >
                    Don’t just take our word for it, take it for a spin and see for yourself.
                </Typography>
                <Box mt={4}>
                    <Grid container justify="center">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setSignupOpen(true)}
                        >
                            Try it for free
                        </Button>
                    </Grid>
                </Box>
            </Container>
        </section>
    );
};

export default JoinSection;