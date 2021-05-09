import React from 'react';
import {
    TableRow,
    TableCell,
} from '@material-ui/core/';

const Record = ({ time, status, duration, operation, data }) => {
    return (
        <TableRow>
            <TableCell align="left">{time}</TableCell>
            <TableCell align="left">{status}</TableCell>
            <TableCell align="left">{duration}</TableCell>
            <TableCell align="left">{operation}</TableCell>
            <TableCell align="left">{data}</TableCell>
        </TableRow>
    );
};

export default Record;