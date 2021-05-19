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
    return (
        <TableContainer component={Paper}>
            <Table stickyHeader={true} >
                { loading && <TableLoader />}
                { !loading && !records.length && <NoData />}
                
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

                { 
                    !loading &&
                    <TableBody>
                        {
                            records.map((record, index) => {
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