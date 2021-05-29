import React, { useState } from 'react';
import ServiceForm from '../../../PopoverForm';
import { TextField, MenuItem } from '@material-ui/core';

const Form = ({ id, data, editElement, setAnchorEl }) => {
    const [info, setInfo] = useState({
        name: data.name || '',
        
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
            name: info.name,
            data: { ...data, ...info }
        };
        editElement(id, updates);
        setAnchorEl(null);
    };

    return (
        <ServiceForm
            className="github-popover"
            title="Create issue"
            disabledSave={false}
            handleSave={handleSave}
            handleCancel={handleCancel}
        >
            
        </ServiceForm>
    );
}

export default Form;