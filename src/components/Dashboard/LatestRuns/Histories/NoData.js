import React from 'react';
import { Typography, Grid } from '@material-ui/core/';

const NoData = () => {
    return (
        <caption>
            <Grid container justify="center">
                <Typography variant="caption" align="center">NoData.</Typography>
            </Grid>
        </caption>
    );
};

export default NoData;