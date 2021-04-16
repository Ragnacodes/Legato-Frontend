import React from 'react';
import { Container } from '@material-ui/core';
import Appbar from '../Layout/Appbar';
import PageTitle from '../Layout/PageTitle';
import Chart from './Chart';
import Scenarios from './Scenarios';

const Dashboard = () => {
  return (
    <>
    <Appbar leftChildren={<PageTitle title="Dashboard" />} />
    <main className="main">
      <div className="app-bar-spacer"/>
      <div className="content-container">
        <Container maxWidth="lg">
          <Chart />
          <Scenarios />
        </Container>
      </div>
    </main>
    </>
  );
};

export default Dashboard;