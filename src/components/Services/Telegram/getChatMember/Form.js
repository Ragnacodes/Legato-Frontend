import React, { useState } from 'react';
import ServiceForm from '../../../PopoverForm';
import { TextField } from '@material-ui/core';

const Form = ({ id, data, editElement, setAnchorEl }) => {
    const [info, setInfo] = useState({
        name: data.name || '',
        chat_id: data.chat_id || '',
        key: data.key || '',
        user_id: data.user_id || '',
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
            title="Get member information"
            disabledSave={false}
            handleSave={handleSave}
            handleCancel={handleCancel}
        >
            <TextField
                className="text-field"
                name="key"
                label="Bot token"
                type="text"
                variant="outlined"
                size="small"
                onChange={handleChange}
                helperText="write your telegram bot's token here."
                multiline
                value={info.key}
            />

            <TextField
                className="text-field"
                name="chat_id"
                label="Chat ID"
                type="text"
                variant="outlined"
                size="small"
                onChange={handleChange}
                helperText="write the target telegram chat id."
                multiline
                value={info.chat_id}
            />

            <TextField
                className="text-field"
                name="user_id"
                label="Username ID"
                type="text"
                variant="outlined"
                size="small"
                onChange={handleChange}
                helperText="write the target telegram user id."
                multiline
                value={info.user_id}
            />
        </ServiceForm>
    );
}

export default Form;