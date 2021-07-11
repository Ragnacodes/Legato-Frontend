import React from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@material-ui/core/';
import Record from './Record';
import TableLoader from './TableLoader';
import NoData from './NoData';

const Histories = ({ loading, records }) => {
    return (
        <TableContainer>
            <Table stickyHeader={true} >
                { loading && <TableLoader />}
                { !loading && !records.length && <NoData />}
                
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Scenario</TableCell>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Time</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>

                { 
                    !loading &&
                    <TableBody>
                        {
                            records.slice(0, 10).map((record, index) => {
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