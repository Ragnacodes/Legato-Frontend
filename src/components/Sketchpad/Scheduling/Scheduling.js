import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    Typography,
    makeStyles,
    Dialog,
    DialogContent,
    DialogTitle,
    Select,
    MenuItem,
} from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';
import Once from './Once';
import Interval from './Interval';


const Scheduling = ({ showScheduling, setShowScheduling, Id, scenarios}) => {
    const [schedulingInfo, setSchedulingInfo] = useState({
        plan: 'once',
        interval: 720,
        dateTime: '',
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
        console.log(scenarios);
    };

    const switchCase = (plan) => {
        switch (plan) {
            case 'interval':
                return (
                    <Interval 
                        schedulingInfo = {schedulingInfo} 
                        setSchedulingInfo = {setSchedulingInfo}
                        setShowScheduling = {setShowScheduling}
                        id = {Id}
                    />
                );
            case 'once':
                return (
                    <Once 
                        schedulingInfo = {schedulingInfo} 
                        setSchedulingInfo = {setSchedulingInfo}
                        setShowScheduling = {setShowScheduling}
                        id = {Id}
                    />
                );
            default:
                return null;
        };
    };

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
                    className = "select-in"
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
        </Dialog>

    );
};

const mapStateToProps = (state) => {
    return {
        scenarios: state.scenarios
    };
};


export default connect(mapStateToProps, null)(Scheduling);