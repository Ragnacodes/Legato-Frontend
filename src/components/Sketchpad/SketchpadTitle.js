import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { startEditScenario } from '../../actions/scenarios';
import { Skeleton } from '@material-ui/lab';
import OnClickTextField from '../OnClickTextField';

const SketchpadTitle = ({ scenario, editScenario }) => {
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

  else {
    return (
      <OnClickTextField
        defaultText={scenario.name}
        handleSave={(modifiedName) => console.log(modifiedName)}
        handleCancel={() => {}}
        divClassName="sketchpad-title"
        textfieldSize="small"
      />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    scenario: state.sketchpad.scenario
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editScenario: (id, updates) => dispatch(startEditScenario(id, updates)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SketchpadTitle);
