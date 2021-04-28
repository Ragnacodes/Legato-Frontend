import React, { useState } from 'react';
import ServiceForm from '../../../PopoverForm';
import { TextField } from '@material-ui/core';

const Form = ({ id, data, editElement, setAnchorEl }) => {
    const [info, setInfo] = useState({
        name: data.name || '',
        chat_id: data.chat_id || '',
        key: data.key || '',
        text: data.text || 'hi this is legato!',
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
            title="send a message"
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
                label="Username"
                type="text"
                variant="outlined"
                size="small"
                onChange={handleChange}
                helperText="write the target telegram username."
                multiline
                value={info.chat_id}
            />

            <TextField
                className="text-field"
                name="text"
                label="Message text"
                type="text"
                variant="outlined"
                size="small"
                onChange={handleChange}
                helperText="type your message."
                multiline
                value={info.text}
            />

        </ServiceForm>
    );
}

export default Form;