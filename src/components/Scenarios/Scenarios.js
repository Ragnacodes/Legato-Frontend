import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { startGetScenarios } from '../../actions/scenarios';
import { List } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import NoItem from '../Layout/NoItem';
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
      <React.Fragment>
        <Skeleton />
        <Skeleton animation={false} />
        <Skeleton animation="wave" />
      </React.Fragment>
    );
  }

  else if (scenarios.length === 0) {
    return <NoItem name="Scenario" />;
  }

  else {
    return (
      <List>
      {
        scenarios.map((scenario, index) => {
          return <Scenario key={index} {...scenario} />;
        })
      }
      </List>
    );
  }

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
