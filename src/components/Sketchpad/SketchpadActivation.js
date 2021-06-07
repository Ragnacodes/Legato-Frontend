import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { startEditSketchpadScenario } from '../../actions/sketchpad';
import { Skeleton } from '@material-ui/lab';
import { Tooltip, Switch } from '@material-ui/core';

const SketchpadActivation = ({ scenario, editSketchpadScenario }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (scenario.hasOwnProperty('name')) {
      setLoading(false);
    }
    else setLoading(true);
  }, [scenario]);

  if (loading) {
    return <Skeleton />;
  }

  const handleToggleActvie = () => {
    editSketchpadScenario({ isActive: !scenario.isActive });
  };


  return (
    <Tooltip title={`Turn ${scenario.isActive ? "off" : "on"}`} placement="bottom">
      <Switch
        edge="end"
        onChange={handleToggleActvie}
        checked={scenario.isActive}
        color="secondary"
      />
    </Tooltip>
  );
};

const mapStateToProps = (state) => {
  return {
    scenario: state.sketchpad.scenario
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editSketchpadScenario: (updates) => dispatch(startEditSketchpadScenario(updates)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SketchpadActivation);
