import React from 'react';
import { CheckCircle, HourglassEmpty, Cancel } from '@material-ui/icons';

const Status = ({ status }) => {
    switch (status) {
        case 1:
            return (
                <CheckCircle className="success" />
            );
        case 0:
            return (
                <HourglassEmpty />
            );
        case -1:
            return (
                <Cancel className="error" />
            );

        default:
            return null;
    }
};

export default Status;