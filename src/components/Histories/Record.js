import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    TableRow,
    TableCell,
    Button
} from '@material-ui/core/';
import Status from './Status';

const Record = ({ id, date, time, status, duration, operations, data }) => {
    const scenarioID = useParams().id;
    return (
        <TableRow>
            <TableCell align="left">{date}</TableCell>
            <TableCell align="left">{time}</TableCell>
            <TableCell align="left"><Status status={status} /></TableCell>
            <TableCell align="left">{duration}</TableCell>
            <TableCell align="left">{operations}</TableCell>
            <TableCell align="left">{data}</TableCell>
            <TableCell align="right">
                <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    component={Link}
                    to={`/scenarios/${scenarioID}/history/${id}`}
                >
                    Details
                </Button>
            </TableCell>
        </TableRow>
    );
};

export default Record;