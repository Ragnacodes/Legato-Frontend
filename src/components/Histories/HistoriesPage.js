import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { startGetHistories } from '../../actions/histories';
import { Container } from '@material-ui/core';
import Appbar from '../Layout/Appbar';
import AppbarBread from '../Layout/AppbarBread';
import Histories from './Histories';
import { getParts } from './breadcrumbsParts';

const HistoriesPage = ({ scenario, records }) => {
    const dispatch = useDispatch();
    const id = useParams().id;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dispatch(startGetHistories(id))
        .then(() => {
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
        });
    }, [dispatch, id]);

    const parts = getParts(scenario);

    return (
        <React.Fragment>
            <Appbar leftChildren={<AppbarBread loading={loading} parts={parts} />} />
            <main className="main">
                <div className="app-bar-spacer" />
                <div className="content-container">
                    <Container maxWidth="lg">
                        <Histories loading={loading} records={records}/>
                    </Container>
                </div>
            </main>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        scenario: state.histories.scenario,
        records: state.histories.histories,
    };
};

export default connect(mapStateToProps)(HistoriesPage);