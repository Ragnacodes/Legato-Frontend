import React from 'react';
import {
    Chart,
    PieSeries,
    Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import { Animation, EventTracker } from '@devexpress/dx-react-chart';
import { CircularProgress, Grid } from '@material-ui/core';

const TooltipContent = ({ data, ...props }) => {
    const index = props.targetItem.point;
    const scnearioID = data[index].id;
    const scenarioName = data[index].name;
    const count = data[index].count;
    return (
        <React.Fragment>
            <div>{scnearioID}</div>
            <div>{scenarioName}</div>
            <div>{count}</div>
        </React.Fragment>
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
