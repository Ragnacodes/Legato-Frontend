import React from 'react';
import Chart from './Chart';
import Scenarios from './Scenarios';
import Container from '@material-ui/core/Container';

const Dashboard = () => {
  return (
    <Container style={{padding:10, overflow:"scroll"}}>
      <Chart />
      <Scenarios />
    </Container>
  )
}


export default Dashboard;