import React, { useState } from 'react';
import { connect } from 'react-redux';
import ServiceForm from '../../../PopoverForm';
import { TextField, Select, MenuItem } from '@material-ui/core';
import { startAddHttp } from '../../../../actions/http'

const Form = ({ id, data, editElement, setAnchorEl, addHtml }) => {
    const [info, setInfo] = useState({
        name: data.name || '',
        in1: data.in1 || '',
        in2: data.in2 || '',
    });

    const handleSelectChange = (e) => {
        setMethodType(e.target.value);
    }
    
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
        addHtml();
    };

    const [methodType, setMethodType] = useState("get");
    return (
        <ServiceForm
            className="dummy-form"
            title="Send HTTP request"
            disabledSave={false}
            handleSave={handleSave}
            handleCancel={handleCancel}
        >
            <TextField
                className="text-field"
                name="url"
                label="URL"
                type="text"
                variant="outlined"
                size="small"
                onChange={handleChange}
                helperText="write the URL of your HTTP request here."
                multiline
            />
            <Select
                className="select"
                name="Method"
                variant="outlined"
                size="small"
                onChange={handleSelectChange}
                value = {methodType}
            >
                <MenuItem value="get">GET</MenuItem>
                <MenuItem value="post">POST</MenuItem>
            </Select>
            {
                methodType==="post" ?
                <TextField
                className="text-field"
                name="body"
                label="body"
                type="text"
                variant="outlined"
                size="small"
                onChange={handleChange}
                helperText="write the body of your post request here."
                multiline
                />
                :
                null
            }

        </ServiceForm>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addHtml: (data) => dispatch(startAddHttp(data)),
});

export default connect(mapDispatchToProps)(Form);