import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Typography,
    Link as MUILink
} from '@material-ui/core/';
import {
    Chart,
    PieSeries,
    Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import { Animation, EventTracker } from '@devexpress/dx-react-chart';
import { CircularProgress, Grid } from '@material-ui/core';

const TooltipContent = ({ data, ...props }) => {
    const index = props.targetItem.point;
    const scenarioID = data[index].id;
    const scenarioName = data[index].name;
    const count = data[index].count;
    return (
        <Box p={1}>
            <MUILink
                component={Link}
                to={`/scenarios/${scenarioID}/sketchpad`}
                underline="none"
            >
                {scenarioName}
            </MUILink>
            <Typography align="center" variant="body2">
                Runs: {count}
            </Typography>
        </Box>
    );
};

const PieChart = ({ data, loading }) => {
    if (loading) {
        return (
            <Grid container justify="center">
                <CircularProgress />
            </Grid>
        );
    }

    return (
        <Chart
            data={data}
            height={200}
        >
            <PieSeries
                valueField="count"
                argumentField="name"
                innerRadius={0.6}
            />
            <Animation />
            <EventTracker />
            <Tooltip 
                contentComponent={(props) => <TooltipContent data={data} {...props} />}
            />
        </Chart>
    );
}

export default PieChart;
