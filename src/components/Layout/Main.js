import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Copyright from './Copyright';
import style from '../../styles/layout/main';

const Main = (props) => {
    const classes = style();
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <props.component />
                    </Grid>

                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
        </main>
    );
}

export default Main;