import React from 'react';
import Particles from 'react-particles-js';
import { particlesParams } from './particlesParams';
import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Hidden,
    Typography 
} from '@material-ui/core';
import { CheckCircleOutline } from '@material-ui/icons';
import nomadIcon from '../../styles/assets/landing/nomad.svg';
import scenarioIcon from '../../styles/assets/landing/scenario.png';

const LabledFeature = ({ text }) => {
    return (
        <Grid container alignItems="center" spacing={2}>
            <Grid item>
                <CheckCircleOutline />
            </Grid>
            <Grid item>
                <Typography variant="body2">
                    {text}
                </Typography>
            </Grid>
        </Grid>
    );
};

const IntroSection = ({ setSignupOpen }) => {
    return (
        <section
            id="intro"
            className="section section--intro"
        >
            
            <div className="section__particles">
                <Particles params={particlesParams}  />
            </div>

            <Container>
                <Grid
                    container
                    justify="center"
                >
                    <Grid item md={6} xs={12}>
                        <Typography gutterBottom align="center" variant="h2">
                            Achieve more in less time with fewer people
                        </Typography>
                        <Typography gutterBottom align="center" paragraph variant="subtitle1">
                            Abstergo lets you connect apps and automate workflows in a few clicks. Move data between apps without effort so you can focus on growing your business.
                        </Typography>
                        <Divider />
                        <Grid container justify="center">
                            <Grid item>
                                <Box m={2}>
                                    <LabledFeature text="Interactive visual drawer" />
                                    <LabledFeature text="Various services" />
                                    <LabledFeature text="Schedule your workflows" />
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box m={2}>
                                    <LabledFeature text="Fully detailed log" />
                                    <LabledFeature text="Unlimited steps" />
                                    <LabledFeature text="Totally free" />
                                </Box>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Grid container justify="center">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    onClick={() => setSignupOpen(true)}
                                >
                                    Join us and get started
                                </Button>
                            </Grid>
                        </Box>
                    </Grid>
                        <Grid item md={6}>
                            <Hidden smDown>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <img src={scenarioIcon} alt="intro" width="350px" />
                                    </Grid>
                                    <Grid item>
                                        <img src={nomadIcon} alt="intro" width="350px" />
                                    </Grid>
                                </Grid>
                            </Hidden>
                        </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default IntroSection;