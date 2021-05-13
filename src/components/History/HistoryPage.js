import React from 'react';
import { Container } from '@material-ui/core';
import Appbar from '../Layout/Appbar';
import PageTitle from '../Layout/PageTitle';
import History from './History';

const HistoryPage = () => {
    return (
        <React.Fragment>
            <Appbar leftChildren={<PageTitle title="History" />} />
            <main className="main">
                <div className="app-bar-spacer" />
                <div className="content-container">
                    <Container maxWidth="lg">
                        <History />
                    </Container>
                </div>
            </main>
        </React.Fragment>
    );
};

export default HistoryPage;