import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import Appbar from '../Layout/Appbar';
import PageTitle from '../Layout/PageTitle';
import Dashboard from './Dashboard';

const DashboardPage = ({ username }) => {
    return (
        <React.Fragment>
            <Appbar leftChildren={<PageTitle title="Dashboard" />} />
            <main className="main">
                <div className="app-bar-spacer" />
                <div className="content-container">
                    <Container maxWidth="lg">
                    <Grid
                        container
                        spacing={3}
                    >
                        <Dashboard username={username} />
                    </Grid>
                    </Container>
                </div>
            </main>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        username: state.auth.username
    };
};

export default connect(mapStateToProps)(DashboardPage);
