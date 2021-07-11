import React from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper
} from '@material-ui/core/';
import Record from './Record';
import TableLoader from './TableLoader';
import NoData from './NoData';

const Histories = ({ loading, records }) => {
    const reverseRecords = records.slice().reverse();
    return (
        <TableContainer component={Paper}>
            <Table stickyHeader={true} >
                { loading && <TableLoader />}
                { !loading && !records.length && <NoData />}
                
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Time</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left">Duration (ms)</TableCell>
                        <TableCell align="left">Operations (#)</TableCell>
                        <TableCell align="left">Data (kB)</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>

                { 
                    !loading &&
                    <TableBody>
                        {
                            reverseRecords.map((record, index) => {
                                return <Record key={index} {...record} />
                            })
                        }
                    </TableBody>
                }
            </Table>
        </TableContainer>
    );
};

export default Histories;