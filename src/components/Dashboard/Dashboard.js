import React from 'react';
import { Grid } from '@material-ui/core';
import LatestRuns from './LatestRuns/LatestRuns';
import ActiveScenarios from './ActiveScenarios/ActiveScenarios';

const Dashboard = () => {
    return (
        <Grid
            container
            spacing={3}
        >
            <LatestRuns />
            <ActiveScenarios />
        </Grid>
    );
};

export default Dashboard;