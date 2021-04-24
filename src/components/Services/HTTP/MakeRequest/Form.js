import React, { useState } from 'react';
import ServiceForm from '../../../PopoverForm';

const Form = ({ id, data, editElement, setAnchorEl }) => {
    const [info, setInfo] = useState({
        name: data.name || '',
        in1: data.in1 || '',
        in2: data.in2 || '',
    });

    const handleChange = (e) => {
        setInfo((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
    };

    const handleCancel = () => {
        setAnchorEl(null);
    };
    
    const handleSave = () => {
        const updates = {
            name: info['name'],
            data: { ...data, ...info }
        };
        editElement(id, updates);
        setAnchorEl(null);
    };

    return (
        <ServiceForm
            className="dummy-form"
            title="Send HTTP request"
            disabledSave={false}
            handleSave={handleSave}
            handleCancel={handleCancel}
        >
            <label>Name</label>
            <input name="name" value={info['name']} onChange={handleChange} />

            <label>HTTP service1 in1</label>
            <input name="in1" value={info['in1']} onChange={handleChange} />

            <label>HTTP service2 in2</label>
            <input name="in2" value={info['in2']} onChange={handleChange} />

        </ServiceForm>
    );
}

export default Form;