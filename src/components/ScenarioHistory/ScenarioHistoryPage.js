import React from 'react';
import { Container } from '@material-ui/core';
import Appbar from '../Layout/Appbar';
import PageTitle from '../Layout/PageTitle';
import ScenarioHistory from './ScenarioHistory';

const ScenarioHistoryPage = () => {
    return (
        <React.Fragment>
            <Appbar leftChildren={<PageTitle title="History" />} />
            <main className="main">
                <div className="app-bar-spacer" />
                <div className="content-container">
                    <Container maxWidth="lg">
                        <ScenarioHistory />
                    </Container>
                </div>
            </main>
        </React.Fragment>
    );
};

export default ScenarioHistoryPage;