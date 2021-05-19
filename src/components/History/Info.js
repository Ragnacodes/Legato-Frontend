import React from 'react';
import { Typography, Paper, Divider, Grid, Container } from '@material-ui/core';
import LabelValue from './LabelValue';

const Info = ({ history }) => {
    const { time, status, duration, operation, data } = history;
    return (
        <Container
            component={Paper}
            className="full-height padding"
        >
            <Typography align="center" className="margin-v">{time}</Typography>
            <Divider className="margin-v2"/>
            <LabelValue label="Status" value={status} />
            <LabelValue label="Duration" value={duration} />
            <LabelValue label="Operation" value={operation} />
            <LabelValue label="Data" value={data} />
        </Container>
    );
};

export default Info;