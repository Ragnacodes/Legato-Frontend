import React from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { startSchedulingScenario } from '../../../actions/sketchpad';


const Once = ({schedulingInfo, setSchedulingInfo, setShowScheduling, id, schedulingScenario}) => {
    
    const handleChange = (e) => {
        setSchedulingInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSave = () => {
        setSchedulingInfo((prev) => ({
            ...prev,
            interval: 0,
        }));
        const requestBody = {
            scheduledTime : new Date(schedulingInfo.dateTime).toISOString(),
            systemTime:  new Date().toISOString(),
            interval: 0
        }
        schedulingScenario(id, requestBody);
    };

    return(
        <React.Fragment>
        <TextField
            name="dateTime"
            type="datetime-local"
            variant="outlined"
            helperText="pick a date to run your scenario."
            onChange={handleChange}
            value={schedulingInfo.dateTime}
            required
            fullWidth
            size="medium"
        />
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

export default connect(null, mapDispatchToProps)(Once);