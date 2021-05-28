import React from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import LandingServiceIcon from '../ServiceIcons/LandingServiceIcon';

const Service = ({ name, src }) => {
    return (
        <Grid item lg={1} sm={2} xs={3}>
            <LandingServiceIcon service={name.toLowerCase()} />
            <Grid container justify="center">
                <Typography variant="caption" align="center">{name}</Typography>
            </Grid>
        </Grid>
    );
};

const ServicesSection = () => {
    return (
        <section
            id="services"
            className="section section--services"
        >
            <Container>
                <Typography
                    gutterBottom
                    variant="h5"
                    align="center"
                    className="section__title"
                >
                    Services
                </Typography>
                <Typography 
                    variant="body2"
                    align="center"
                >
                    Choose from dozens of apps or connect to any API.
                </Typography>
                <Typography 
                    variant="body2"
                    align="center"
                >
                    We add new apps every release.
                </Typography>
                <Box mt={4}>
                    <Grid container spacing={2} justify="center">
                        <Service name="Webhooks" />
                        <Service name="HTTP" />
                        <Service name="SSH" />
                        <Service name="GitHub" />
                        <Service name="Gmail" />
                        <Service name="Telegram" />
                        <Service name="Spotify" />
                        <Service name="Discord" />
                        <Service name="Repeater" />
                        <Service name="Sleep" />
                        <Service name="Regex" />
                    </Grid>
                </Box>
            </Container>
        </section>
    );
};

export default ServicesSection;
