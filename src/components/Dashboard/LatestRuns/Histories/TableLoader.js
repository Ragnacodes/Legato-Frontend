import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core/';

const TableLoader = () => {
    return (
        <caption>
            <Grid container justify="center">
                <CircularProgress />
            </Grid>
        </caption>
        
    );
};

export default TableLoader;