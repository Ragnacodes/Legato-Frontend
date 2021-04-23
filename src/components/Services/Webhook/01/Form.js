import React, { useState } from 'react';

const Form = ({ id, data, editElement }) => {
    const [name, setName] = useState(data.name || '')
    const [input1, setInput1] = useState(data.input1 || '');
    const [input2, setInput2] = useState(data.input2 || '');

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChange1 = (e) => {
        setInput1(e.target.value);
    }

    const onChange2 = (e) => {
        setInput2(e.target.value);
    }

    const onClick = () => {
        const updates = {
            name,
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
            <label>name</label>
            <input value={name} onChange={onChangeName} />
            <label>Webhook service1 in1</label>
            <input value={input1} onChange={onChange1} />

            <label>Webhook service1 in2</label>
            <input value={input2} onChange={onChange2} />

            <button onClick={onClick}>OK</button>
        </div>
    );
}

export default Form;