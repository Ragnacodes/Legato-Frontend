import React from 'react';
import { Grid } from '@material-ui/core';
import CustomAccordion from './CustomAccordion';

const Accordions = ({ logs }) => {
    return (
        <Grid container direction="column" spacing={1}>
            {
                logs.map((log, index) => {
                    return (
                        <Grid item key={index}>
                            <CustomAccordion {...log} />
                        </Grid>
                    );
                })
            }
        </Grid>
    );
};

export default Accordions;