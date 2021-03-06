import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editElement } from '../../../actions/sketchpad';

const EdgeForm = ({ id, data, editElement }) => {
    const [input1, setInput1] = useState(data.input1 || '');
    const [input2, setInput2] = useState(data.input2 || '');

    const onChange1 = (e) => {
        setInput1(e.target.value);
    }

    const onChange2 = (e) => {
        setInput2(e.target.value);
    }

    const onClick = () => {
        const updates = {
            data: {
                ...data,
                input1,
                input2
            }
        };
        editElement(id, updates);
    };

    return (
        <div className="dummy-form">
            <label>Edge form in1</label>
            <input value={input1} onChange={onChange1} />

            <label>Edge form in2</label>
            <input value={input2} onChange={onChange2} />

            <button onClick={onClick}>OK</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        editElement: (id, updates) => dispatch(editElement(id, updates))
    };
};

export default connect(null, mapDispatchToProps)(EdgeForm);