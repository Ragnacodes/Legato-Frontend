import React from 'react';
import { Container } from '@material-ui/core';
import Appbar from '../Layout/Appbar';
import PageTitle from '../Layout/PageTitle';
import Dashboard from './Dashboard';

const DashboardPage = () => {
    return (
        <React.Fragment>
            <Appbar leftChildren={<PageTitle title="Dashboard" />} />
            <main className="main">
                <div className="app-bar-spacer" />
                <div className="content-container">
                    <Container maxWidth="lg">
                        <Dashboard />
                    </Container>
                </div>
            </main>
        </React.Fragment>
    );
};

export default DashboardPage;