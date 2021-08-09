import React, { useState } from 'react';
import ServiceForm from '../../../PopoverForm';
import { TextField, Select, MenuItem } from '@material-ui/core';

const Form = ({ id, data, editElement, setAnchorEl }) => {
    const [info, setInfo] = useState({
        name: data.name || '',
        url: data.url || '',
        method: data.method || 'get',
        body: data.body ? JSON.stringify(data.body) : ''
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
        if(info.body.length > 0) {
            info.body = JSON.parse(info.body);
        }
        const updates = {
            name: info.name,
            data: { ...data, ...info }
        };
        editElement(id, updates);
        setAnchorEl(null);
    };

    return (
        <ServiceForm
            className="make-request"
            title="Send HTTP request"
            disabledSave={false}
            handleSave={handleSave}
            handleCancel={handleCancel}
        >
            <TextField
                className="text-field"
                name="name"
                label="Name"
                type="text"
                variant="outlined"
                size="medium"
                onChange={handleChange}
                multiline
                value={info.name}
            />

            <TextField
                className="text-field"
                name="url"
                label="URL"
                type="text"
                variant="outlined"
                size="medium"
                onChange={handleChange}
                helperText="write the URL of your HTTP request here."
                multiline
                value={info.url}
            />

            <Select
                className="select"
                name="method"
                variant="outlined"
                size="small"
                onChange={handleChange}
                value = {info.method}
            >
                <MenuItem value="get">GET</MenuItem>
                <MenuItem value="post">POST</MenuItem>
            </Select>

            {
                info.method === "post" ?
                <TextField
                    className="text-field"
                    name="body"
                    label="Body"
                    type="text"
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                    helperText="write the body of your post request here."
                    multiline
                    value={info.body}
                    placeholder='{"key": "value"}'
                />
                :
                null
            }

        </ServiceForm>
    );
}

export default Form;