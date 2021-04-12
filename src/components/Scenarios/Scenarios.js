import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Appbar from '../Layout/Appbar';
import Scenario from './Scenario';
import { startGetScenarios } from '../../actions/scenarios';

const Scenarios = ({ scenarios, getScenarios }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    getScenarios()
    .then(() => {
      setLoading(false);
      setError(false);
    })
    .catch(() => {
      setLoading(false);
      setError(true);
    });
  }, []);
  
  return(
    <>
    <Appbar />
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
