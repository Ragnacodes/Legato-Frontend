import React from 'react';
import { connect } from 'react-redux';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@material-ui/core/';
import Record from './Record';


const ScenarioHistory = ({ records }) => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Started</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left">Duration</TableCell>
                        <TableCell align="left">Operation</TableCell>
                        <TableCell align="left">Data Transfer</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        records.map((record, index) => {
                            return <Record key={index} record={record} />
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const mapStateToProps = (state) => {
    return {
        records: state.history
    };
};

export default connect(mapStateToProps)(ScenarioHistory);