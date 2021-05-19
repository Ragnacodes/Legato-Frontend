import React from 'react';
import { CheckCircle, Cancel } from '@material-ui/icons';
import { CircularProgress } from '@material-ui/core';

const Status = ({ status }) => {
    switch (status) {
        case 1:
            return <CheckCircle className="success" />;
        case 0:
            return <CircularProgress size={20} thickness={2} />;
        case -1:
            return <Cancel className="error" />;
        default:
            return null;
    }
};

export default Status;