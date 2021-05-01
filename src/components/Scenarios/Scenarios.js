import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { startGetScenarios } from '../../actions/scenarios';
import { List } from '@material-ui/core';
import NoItem from '../Layout/NoItem';
import ListLoader from '../Layout/ListLoader';
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
    return <ListLoader />;
  }

  else if (scenarios.length === 0) {
    return <NoItem name="Scenario" />;
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
    scenarios: state.scenarios
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getScenarios: () => dispatch(startGetScenarios()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Scenarios);
