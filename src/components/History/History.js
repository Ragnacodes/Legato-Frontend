import React from 'react';
import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import AccordionsLoader from './AccordionsLoader';
import Accordions from './Accordions';
import Info from './Info';

const History = ({ loading, history, logs }) => {
    return (
        <Grid
            container
            spacing={2}
            direction="row-reverse"
        >
            <Grid item xs={12} md={3}>
                {loading ? <Skeleton variant="rect" width="100%" height="100%" /> : <Info history={history} />}
            </Grid>

            <Grid item xs={12} md={true}>
                {loading ? <AccordionsLoader /> : <Accordions logs={logs} />}
            </Grid>
        </Grid>
    );
};

export default History;