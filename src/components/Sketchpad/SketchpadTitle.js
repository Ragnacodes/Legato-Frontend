import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { startEditSketchpadScenario } from '../../actions/sketchpad';
import { Skeleton } from '@material-ui/lab';
import OnClickTextField from '../OnClickTextField';

const SketchpadTitle = ({ scenario, editSketchpadScenario }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (scenario.hasOwnProperty('name')) {
      setLoading(false);
    }
    else setLoading(true);
  }, [scenario]);

  const handleSave = (newName) => {
    const updates = {
      name: newName
    };
    editSketchpadScenario(updates);
  };

  if (loading) {
    return <Skeleton width={350} className="skeleton-light" />;
  }

  return (
    <OnClickTextField
      defaultText={scenario.name}
      handleSave={handleSave}
      handleCancel={() => {}}
      divClassName="Sketchpad_title"
      textfieldSize="small"
    />
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

export default connect(mapStateToProps, mapDispatchToProps)(SketchpadTitle);
