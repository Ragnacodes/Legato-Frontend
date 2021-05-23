import React from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import discordIcon from '../../styles/assets/services/discord_256.png';
import githubIcon from '../../styles/assets/services/github_256.png';
import gmailIcon from '../../styles/assets/services/gmail_256.png';
import httpIcon from '../../styles/assets/services/http_256.png';
import regexIcon from '../../styles/assets/services/regex_256.png';
import repeaterIcon from '../../styles/assets/services/repeater_256.png';
import sleepIcon from '../../styles/assets/services/sleep_256.png';
import spotifyIcon from '../../styles/assets/services/spotify_256.png';
import sshIcon from '../../styles/assets/services/ssh_256.png';
import telegramIcon from '../../styles/assets/services/telegram_256.png';
import webhooksIcon from '../../styles/assets/services/webhooks_256.png';

const Service = ({ name, src }) => {
    return (
        <Grid item lg={1} sm={2} xs={3}>
            <Box
                p={2}
                className={`
                    section__service
                    service-icon
                    service-icon--${name.toLowerCase()}
                `}
            >
                <img
                    src={src}
                    alt={name}
                    width="100%"
                />
            </Box>
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
                        <Service name="Webhooks" src={webhooksIcon} />
                        <Service name="HTTP" src={httpIcon} />
                        <Service name="SSH" src={sshIcon} />
                        <Service name="GitHub" src={githubIcon} />
                        <Service name="Gmail" src={gmailIcon} />
                        <Service name="Telegram" src={telegramIcon} />
                        <Service name="Spotify" src={spotifyIcon} />
                        <Service name="Discord" src={discordIcon} />
                        <Service name="Repeater" src={repeaterIcon} />
                        <Service name="Sleep" src={sleepIcon} />
                        <Service name="Regex" src={regexIcon} />
                    </Grid>
                </Box>
            </Container>
        </section>
    );
};

export default ServicesSection;
