import React from 'react';
import { connect } from 'react-redux';
import { startEditScenario } from '../../actions/scenarios';
import { InputBase } from '@material-ui/core';
import OnClickTextField from '../OnClickTextField';
const SketchpadTitle = ({ name, editScenario }) => {
  return (
    <OnClickTextField
      defaultText={name}
      handleSave={(modifiedName) => console.log(modifiedName)}
      handleCancel={() => {}}
      divClassName=""
      textfieldSize="small"
    />
    // <InputBase
    //     defaultValue={name}
    //     inputProps={{ 'aria-label': 'naked' }}
    //     className="title-input"
    // />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    editScenario: (id, updates) => dispatch(startEditScenario(id, updates)),
  };
};

export default connect(null, mapDispatchToProps)(SketchpadTitle);
