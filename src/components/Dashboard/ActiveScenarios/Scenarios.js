import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { startGetScenarios } from '../../../actions/scenarios';
import { List, CircularProgress, Grid, Typography } from '@material-ui/core';
import Scenario from './Scenario';

const Scenarios = ({ scenarios, getScenarios }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getScenarios()
    .then(() => {
      setLoading(false);
    })
    .catch(() => {
      setLoading(false);
    });
  }, [getScenarios]);

  if (loading) {
    return (
      <Grid container justify="center">
        <CircularProgress />
      </Grid>
    );
  }

  else if (scenarios.length === 0) {
    return (
      <Grid container justify="center" direction="column">
        <Typography align="center" variant="caption">
          There is no active scenario.
        </Typography>
      </Grid>
    );
  }

  return (
    <List>
    {
      scenarios.map((scenario, index) => {
        return <Scenario key={index} {...scenario} />;
      })
    }
    </List>
  );
};

const mapStateToProps = (state) => {
  return {
    scenarios: state.scenarios.filter(scenario => scenario.isActive)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getScenarios: () => dispatch(startGetScenarios()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Scenarios);
