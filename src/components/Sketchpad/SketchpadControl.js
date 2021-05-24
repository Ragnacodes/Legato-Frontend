import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startEditScenario } from '../../actions/scenarios';
import { Button } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';
import Scheduling from './Scheduling/Scheduling';
import Axios from '../../utils/axiosConfig';

const SketchpadControl = ({ elements, editScenario, username, scenario }) => {

    const onClicked = () => {
        Axios.patch(`/users/${username}/scenarios/${scenario.id}`)
    };
    const [showScheduling, setShowScheduling] = useState(false);
    
    return (
        <div className="control-box">
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={onClicked}
                className="button"
                startIcon={<PlayArrow />}
            >
                Run Once
            </Button>
            <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={()=>setShowScheduling(true)}
                className="button"
            >
              Scheduling
            </Button>
            <Scheduling 
                showScheduling={showScheduling} 
                setShowScheduling={setShowScheduling}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        elements: state.sketchpad,
        username: state.auth.username,
        scenario: state.sketchpad.scenario
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        editScenario: (id, updates) => dispatch(startEditScenario(id, updates))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SketchpadControl);