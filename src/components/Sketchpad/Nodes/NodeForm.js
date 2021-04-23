import React from 'react';
import { connect } from 'react-redux';
import { startEditElement } from '../../../actions/sketchpad';

const NodeForm = (props) => {
    return (
        <props.form {...props} />
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        editElement: (id, updates) => dispatch(startEditElement(id, updates))
    };
};

export default connect(null, mapDispatchToProps)(NodeForm);