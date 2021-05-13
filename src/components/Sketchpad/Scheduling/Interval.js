import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const Interval = ({schedulingInfo, setSchedulingInfo}) => {
    
    const [error, setError] = useState();
    
    const handleChange = (e) => {
        setSchedulingInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

        if (isNaN(e.target.value)) {
            setError('minute should be a number!');
        }
        else if (e.target.value < 15) {
            setError('minute must be higher than 15!');
        }
        else{
            setError();
        }
    };

    return(
        <TextField
            name ="minutes"
            label ="Minutes"
            type ="text"
            variant ="outlined"
            size ="small"
            helperText = {error ? error : "The time interval in which the scenario should be repeated (must be more than 15 minutes)."}
            onChange = {handleChange}
            value = {schedulingInfo.minutes}
            required
            fullWidth
            error = {error}
        />
    );
};

export default Interval;