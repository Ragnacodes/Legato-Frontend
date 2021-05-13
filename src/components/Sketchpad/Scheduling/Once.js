import React from 'react';
import { TextField } from '@material-ui/core';

const Once = ({schedulingInfo, setSchedulingInfo}) => {
    
    const handleChange = (e) => {
        setSchedulingInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    return(
        <TextField
            name="date"
            type="date"
            variant="outlined"
            size="small"
            helperText="pick a date ro run your scenario."
            onChange={handleChange}
            value={schedulingInfo.date}
            required
            fullWidth
        />
    );
};

export default Once;