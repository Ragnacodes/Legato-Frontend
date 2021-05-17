import React, { useState, useEffect } from 'react';
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


const Scheduling = ({ showScheduling, setShowScheduling, scenario}) => {
    
    const [schedulingInfo, setSchedulingInfo] = useState({});

    useEffect(() => {
        var date = new Date(scenario.lastScheduledTime);
        var isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().replace('Z','');
        setSchedulingInfo({
            plan: scenario.interval === 0 ? 'once' : 'interval',
            interval: scenario.interval || 0,
            dateTime:scenario.lastScheduledTime ? isoDateTime: new Date(),
        });
    }, [scenario])

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
    };

    const switchCase = (plan) => {
        switch (plan) {
            case 'interval':
                return (
                    <Interval 
                        schedulingInfo = {schedulingInfo} 
                        setSchedulingInfo = {setSchedulingInfo}
                        setShowScheduling = {setShowScheduling}
                        id = {scenario.id}
                    />
                );
            case 'once':
                return (
                    <Once 
                        schedulingInfo = {schedulingInfo} 
                        setSchedulingInfo = {setSchedulingInfo}
                        setShowScheduling = {setShowScheduling}
                        id = {scenario.id}
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
        scenario: state.sketchpad.scenario
    }
};

export default connect(mapStateToProps, null)(Scheduling);