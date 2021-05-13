import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    TableRow,
    TableCell,
    Button
} from '@material-ui/core/';

const Record = ({ id, time, status, duration, operation, data }) => {
    const scenarioID = useParams().id;
    return (
        <TableRow>
            <TableCell align="left">{time}</TableCell>
            <TableCell align="left">{status}</TableCell>
            <TableCell align="left">{duration}</TableCell>
            <TableCell align="left">{operation}</TableCell>
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