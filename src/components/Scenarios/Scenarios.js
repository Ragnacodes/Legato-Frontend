import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { startGetScenarios } from '../../actions/scenarios';
import { Container, List } from '@material-ui/core';
import Appbar from '../Layout/Appbar';
import PageTitle from '../Layout/PageTitle';
import AddScenario from './AddScenario';
import Scenario from './Scenario';

const Scenarios = ({ scenarios, getScenarios }) => {
  useEffect(() => {
    getScenarios()
    .then(() => {
    })
    .catch(() => {
    });
  }, [getScenarios]);
  
  return (
    <>
    <Appbar leftChildren={<PageTitle title="Scenarios" />} rightChildren={<AddScenario />} />
    <main className="main">
      <div className="app-bar-spacer" />
      <div className="content-container">
        <Container maxWidth="lg" className="scenarios">

        { scenarios.length === 0 ? <p>There is no item</p>:
          <List>
          {
            scenarios.map((scenario) => {
              return <Scenario key={scenario.id} {...scenario} />;
            })
          }
          </List>
        }
        </Container>

      </div>
    </main>
    </>
)};

const mapStateToProps = (state) => {
  return {
    scenarios: state.scenarios
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getScenarios: () => dispatch(startGetScenarios()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Scenarios);
