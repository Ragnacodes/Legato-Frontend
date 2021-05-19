import React from 'react';
import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import ListLoader from '../Layout/ListLoader';
import Accordions from './Accordions';
import Info from './Info';

const History = ({ loading, history, logs }) => {
    return (
        <Grid
            container
            spacing={2}
        >
            <Grid item xs={true}>
                {loading ? <ListLoader /> : <Accordions logs={logs} />}
            </Grid>

            <Grid item xs={3}>
                {loading ? <Skeleton variant="rect"/> : <Info history={history} />}
            </Grid>
        </Grid>
    );
};

export default History;