import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { startGetHistory } from '../../actions/history';
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
import Caption from './Caption';

const ScenarioHistory = ({ records, getHistory }) => {
    const [loading, setLoading] = useState(true);
    const scenarioID = useParams().id;

    useEffect(() => {
        setLoading(true);
        getHistory(scenarioID)
        .then(() => {
            setLoading(false);
        })
        .catch(() => {
            setLoading(false)
        });
    }, [getHistory, scenarioID]);

    return (
        <TableContainer component={Paper}>
            <Table stickyHeader={true} >
                { loading && <Caption caption="Loading ..." />}
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
                        records.map((record, index) => {
                            return <Record key={index} {...record} />
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

const mapDispatchToProps = (dispatch) => {
    return {
        getHistory: (scenarioID) => dispatch(startGetHistory(scenarioID))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ScenarioHistory);