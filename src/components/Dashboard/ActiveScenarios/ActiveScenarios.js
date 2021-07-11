import React from 'react';
import { Grid, Paper, Box } from '@material-ui/core';
import Scenarios from './Scenarios';
import Title from '../Title';

const ActiveScenarios = () => {

    return (
        <React.Fragment>
            {/* Active Scenario */}
            <Grid item xs={12}>
                <Box component={Paper} p={3}>
                    <Title>Active Scenarios</Title>
                    <Scenarios />
                </Box>
            </Grid>
        </React.Fragment>
    );
};

export default ActiveScenarios;