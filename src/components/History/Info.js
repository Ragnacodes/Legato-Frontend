import React from 'react';
import { Paper, Container } from '@material-ui/core';
import LabelValue from './LabelValue';

const statusToText = (status) => {
    switch (status) {
        case 1: return 'Success';
        case 0: return 'Pending';
        case -1: return 'Failed';
        default: return 'Unknwon';
    };
};

const Info = ({ history }) => {
    const { date, time, status, duration, operations, data } = history;
    return (
        <Container
            component={Paper}
            className="full-height padding"
        >
            <LabelValue label="Date" value={date} />
            <LabelValue label="Time" value={time} />
            <LabelValue label="Status" value={statusToText(status)} />
            <LabelValue label="Duration" value={duration} />
            <LabelValue label="Operation" value={operations} />
            <LabelValue label="Data" value={data} />
        </Container>
    );
};

export default Info;