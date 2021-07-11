import React from 'react';
import { Link } from 'react-router-dom';
import {
    TableRow,
    TableCell,
    Button,
    Link as MUILink
} from '@material-ui/core/';
import Status from '../../../Histories/Status';

const Record = ({ id, date, time, status, scenario }) => {
    return (
        <TableRow>
            <TableCell align="left">
                <MUILink
                    component={Link}
                    to={`/scenarios/${scenario.id}/sketchpad`}
                    underline="none"
                >
                    {scenario.name}
                </MUILink>
            </TableCell>
            <TableCell align="left">{date}</TableCell>
            <TableCell align="left">{time}</TableCell>
            <TableCell align="left"><Status status={status} /></TableCell>
            <TableCell align="right">
                <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    component={Link}
                    to={`/scenarios/${scenario.id}/history/${id}`}
                >
                    Details
                </Button>
            </TableCell>
        </TableRow>
    );
};

export default Record;