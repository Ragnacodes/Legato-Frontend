import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { startGetHistory } from '../../actions/history';
import { Container } from '@material-ui/core';
import Appbar from '../Layout/Appbar';
import AppbarBread from '../Layout/AppbarBread';
import History from './History';
import { getParts } from './breadcrumbsParts';

const HistoryPage = ({ scenario, history, logs }) => {
    const dispatch = useDispatch();
    const scenarioID = useParams().id;
    const historyID = useParams().historyID;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dispatch(startGetHistory(scenarioID, historyID))
        .then(() => {
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
        });
    }, [dispatch, scenarioID, historyID]);

    const parts = getParts(scenario, history);

    return (
        <React.Fragment>
            <Appbar leftChildren={<AppbarBread loading={loading} parts={parts} />} />
            <main className="main">
                <div className="app-bar-spacer" />
                <div className="content-container">
                    <Container maxWidth="lg">
                        <History loading={loading} history={history} logs={logs} />
                    </Container>
                </div>
            </main>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        scenario: state.history.scenario,
        history: state.history.history,
        logs: state.history.logs
    };
};

export default connect(mapStateToProps)(HistoryPage);