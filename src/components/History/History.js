import React from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    CircularProgress
} from '@material-ui/core/';
import Record from './Record';
import Caption from './Caption';

const History = ({ loading, records }) => {
    return (
        <TableContainer component={Paper}>
            <Table stickyHeader={true} >
                { loading && <Caption caption={<CircularProgress size={30} thickness={1.8} />} />}
                { !loading && !records.length && <Caption caption="No Data." />}
                
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Started</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left">Duration</TableCell>
                        <TableCell align="left">Operation</TableCell>
                        <TableCell align="left">Data Transfer</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        (records || []).map((record, index) => {
                            return <Record key={index} {...record} />
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default History;