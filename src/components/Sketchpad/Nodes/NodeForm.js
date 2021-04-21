import React from 'react';
import { connect } from 'react-redux';
import { editElement } from '../../../actions/sketchpad';

const NodeForm = (props) => {
    return (
        <props.data.form {...props} />
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        editElement: (id, updates) => dispatch(editElement(id, updates))
    };
};

export default connect(null, mapDispatchToProps)(NodeForm);