import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const LabelValue = ({ label, value }) => {
    return (
        <Grid container justify="space-between" className="margin-v">
            <Grid item><Typography variant="body2"><b>{label}:</b></Typography></Grid>
            <Grid item><Typography variant="body2">{value}</Typography></Grid>
        </Grid>
    );
};

export default LabelValue;