import React from 'react';
import { connect } from 'react-redux';
import { Button, Select,MenuItem, TextField } from '@material-ui/core';
import { startSchedulingScenario } from '../../../actions/scenarios'


const Interval = ({schedulingInfo, setSchedulingInfo, setShowScheduling, id, schedulingScenario}) => {
        
    const handleChange = (e) => {
        setSchedulingInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    
    const handleSave = () => {
        const requestBody = {
            scheduledTime : schedulingInfo.dateTime + ":00.000Z",
            systemTime:  new Date().toISOString(),
            interval: schedulingInfo.interval
        }
        console.log(requestBody);
        schedulingScenario(id, requestBody);
    };

    return(
        <React.Fragment>
            <TextField
                name="dateTime"
                type="datetime-local"
                variant="outlined"
                helperText="pick a date to start interval."
                onChange={handleChange}
                value={schedulingInfo.dateTime}
                required
                fullWidth
                size="medium"
            />

            <Select
                    className = "select"
                    name="interval"
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                    value={schedulingInfo.interval}
                    helperText="your scenario will run repetedly with this period of time."
                    fullWidth
                >
                    <MenuItem value={2}>2 minutes</MenuItem>
                    <MenuItem value={15}>15 minutes</MenuItem>
                    <MenuItem value={30}>30 minutes</MenuItem>
                    <MenuItem value={45}>45 minutes</MenuItem>
                    <MenuItem value={60}>1 hour</MenuItem>
                    <MenuItem value={360}>6 hours</MenuItem>
                    <MenuItem value={720}>1 day</MenuItem>
                    <MenuItem value={10080}>1 week</MenuItem>
                    
            </Select>
            
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
        </React.Fragment>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        schedulingScenario: (id, schedulingObject) => dispatch(startSchedulingScenario(id, schedulingObject)),
    };
};

export default connect(null, mapDispatchToProps)(Interval);