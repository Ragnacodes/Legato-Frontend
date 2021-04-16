import React from 'react';
import Chart from './Chart';
import Scenarios from './Scenarios';
import Container from '@material-ui/core/Container';
import Appbar from '../Layout/Appbar';
import PageTitle from '../Layout/PageTitle';

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