import React from 'react';
import { intervalToText } from './intervalToText';
import { Tooltip, Grid } from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';

const ScenarioTime = ({ interval }) => {
    return (
        <Tooltip
            title={intervalToText(interval)}
            placement="top"
        >
            <Grid
                container
                jsutify="center"
            >
                <AccessTime
                    fontSize="small"
                />
            </Grid>
        </Tooltip>
    );
};

export default ScenarioTime;