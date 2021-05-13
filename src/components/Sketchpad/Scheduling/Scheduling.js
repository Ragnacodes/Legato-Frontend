import React, { useState } from 'react';
import {
    Typography,
    makeStyles,
    Dialog,
    DialogContent,
    DialogTitle,
    Select,
    MenuItem,
    Button
} from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';
import Once from './Once';
import Interval from './Interval';


const Scheduling = ({ showScheduling, setShowScheduling }) => {
    
    const [schedulingInfo, setSchedulingInfo] = useState({
        plan: 'interval',
        minutes: '',
        date: ' '
    });

    const useStyles = makeStyles({
        dialog: {
            position: 'absolute',
            left: 70,
            bottom: 40
        }
    });

    const handleChange = (e) => {
        setSchedulingInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSave = () => {
        console.log(schedulingInfo);
    }

    const switchCase = (plan) => {
        switch (plan) {
            case 'interval':
                return (
                    <Interval schedulingInfo={schedulingInfo} setSchedulingInfo={setSchedulingInfo}/>
                );
            case 'once':
                return (
                    <Once schedulingInfo={schedulingInfo} setSchedulingInfo={setSchedulingInfo}/>
                );
            default:
                return null;
        }
    }

    return (
        <Dialog
            classes={{ paper: useStyles().dialog }}
            disableBackdropClick
            className="scheduling-dialog"
            open={showScheduling}
            onClose={() => setShowScheduling(false)}
            aria-labelledby="form-dialog-title"
            fullWidth
            maxWidth="xs"
        >
            <DialogTitle disableTypography={true} className="title">
                <Typography variant="h5">Scheduling settings</Typography>
            </DialogTitle>
            <DialogContent>
                <CloseRounded
                    onClick={() => setShowScheduling(false)}
                    className="close-icon"
                />
                <Select
                    className = "select"
                    name="plan"
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                    value={schedulingInfo.plan}
                    fullWidth
                >
                    <MenuItem value="once">Once</MenuItem>
                    <MenuItem value="interval">At regular intervals</MenuItem>
                </Select>
                {
                    switchCase(schedulingInfo.plan)
                }
            </DialogContent>
            <div className="options">
                <Button
                    autoFocus
                    onClick={() =>setShowScheduling(false)}
                    color="primary"
                >
                    Cancel
                </Button>
                <Button
                    onClick={() => {
                        handleSave();
                        setShowScheduling(false)
                    }}
                    variant="contained"
                    color="primary"
                >
                    Save
                </Button>
            </div>
        </Dialog>

    )
}

export default Scheduling;