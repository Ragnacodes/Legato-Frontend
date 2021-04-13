import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Appbar from '../Layout/Appbar';
import Scenario from './Scenario';
import AddScenario from './AddScenario';
import { startGetScenarios } from '../../actions/scenarios';

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
    <Appbar rightChildren={<AddScenario />} />
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
