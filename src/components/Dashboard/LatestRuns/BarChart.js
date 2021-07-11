import React from 'react';
import {
    Chart,
    BarSeries,
    Tooltip,
    ArgumentAxis,
    ValueAxis
} from '@devexpress/dx-react-chart-material-ui';
import { Animation, EventTracker } from '@devexpress/dx-react-chart';
import { CircularProgress, Grid } from '@material-ui/core';

const BarChart = ({ data, loading }) => {
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
            <ArgumentAxis />
            <ValueAxis
                showGrid={false}
                showLine={true}
            />
            <BarSeries
                valueField="count"
                argumentField="day"
                barWidth={0.5}
            />
            <Animation />
            <EventTracker />
            <Tooltip />
        </Chart>
    );
};

export default BarChart;
