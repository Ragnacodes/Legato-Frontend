import React from 'react';
import { Typography } from '@material-ui/core/';

const Caption = ({ caption }) => {
    return (
        <caption>
            <Typography align="center">{caption}</Typography>
        </caption>
    );
};

export default Caption;