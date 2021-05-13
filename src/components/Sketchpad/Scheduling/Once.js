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
        <React.Fragment>
        <TextField
            name="date"
            type="date"
            variant="outlined"
            size="small"
            helperText="pick a date to run your scenario."
            onChange={handleChange}
            value={schedulingInfo.date}
            required
            fullWidth
        />
        <TextField 
            name="time"
            type="time"
            variant="outlined"
            size="small"
            helperText="pick a time on that day to run your scenario."
            onChange={handleChange}
            value={schedulingInfo.time}
            required
            fullWidth
        />
        </React.Fragment>
        
    );
};

export default Once;