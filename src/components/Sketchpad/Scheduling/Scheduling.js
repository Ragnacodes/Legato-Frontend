import React, { useState } from 'react';
import {
    Typography,
    Dialog,
    DialogContent,
    DialogTitle,
    Select,
    MenuItem
} from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';
import Once from './Once';
import Interval from './Interval';


const Scheduling = ({showScheduling, setShowScheduling}) => {
    
    const [schedulingInfo, setSchedulingInfo] = useState({
        plan: 'interval',
    });
    
    const handleChange = (e) => {
        setSchedulingInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const switchCase = (plan) => {
        switch(plan) {
            case 'interval':
                return (
                    <Interval/>
                );
            case 'once':
                return (
                    <Once/>
                );
            default:
                return null;
        }
    }
    
    return (
        <Dialog
            disableBackdropClick
            className="dialog"
            open={showScheduling}
            onClose={() => setShowScheduling(false)}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle disableTypography={true}>
                <Typography variant="h5">Scheduling settings</Typography>
            </DialogTitle>
            <DialogContent>
                <CloseRounded
                    onClick={() => setShowScheduling(false)}
                    className="close-icon"
                />
                <Select
                    name="plan"
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                    value = {schedulingInfo.plan}
                >
                    <MenuItem value="once">Once</MenuItem>
                    <MenuItem value="interval">Interval</MenuItem>
                </Select>
                {
                    switchCase(schedulingInfo.plan)
                }
            </DialogContent>
        </Dialog>

    )
}

export default Scheduling;