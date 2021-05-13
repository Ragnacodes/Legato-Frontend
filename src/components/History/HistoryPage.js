import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { startGetHistory } from '../../actions/history';
import { Container } from '@material-ui/core';
import Appbar from '../Layout/Appbar';
import AppbarBread from './AppbarBread';
import History from './History';

const HistoryPage = ({ scenarioID, scenarioName, records }) => {
    const dispatch = useDispatch();
    const id = useParams().id;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dispatch(startGetHistory(id))
        .then(() => {
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
        });
    }, [dispatch, id]);

    return (
        <React.Fragment>
            <Appbar leftChildren={
                <AppbarBread
                    loading={loading}
                    scenarioID={scenarioID}
                    scenarioName={scenarioName} 
                />} 
            />
            <main className="main">
                <div className="app-bar-spacer" />
                <div className="content-container">
                    <Container maxWidth="lg">
                        <History loading={loading} records={records}/>
                    </Container>
                </div>
            </main>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        scenarioID: state.history.scenarioID,
        scenarioName: state.history.scenarioName,
        records: state.history.histories,
    };
};

export default connect(mapStateToProps)(HistoryPage);