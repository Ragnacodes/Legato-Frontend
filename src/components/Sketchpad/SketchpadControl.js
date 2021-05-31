import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Box } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';
import Scheduling from './Scheduling/Scheduling';
import Status from './Status';
import Axios from '../../utils/axiosConfig';

const SketchpadControl = ({ username, scenario, loading, failed }) => {

    const onClicked = () => {
        Axios.patch(`/users/${username}/scenarios/${scenario.id}`)
    };
    const [showScheduling, setShowScheduling] = useState(false);
    
    return (
        <React.Fragment>

            <Scheduling 
                showScheduling={showScheduling} 
                setShowScheduling={setShowScheduling}
            />

            <div className="control-box">
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={onClicked}
                            startIcon={<PlayArrow />}
                        >
                            Run Once
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            onClick={()=>setShowScheduling(true)}
                        >
                            Scheduling
                        </Button>
                    </Grid>
                    <Grid item>
                        <Box ml={2}>
                            <Status />
                        </Box>
                    </Grid>
                </Grid>
            </div>
            
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        username: state.auth.username,
        scenario: state.sketchpad.scenario
    }
};

export default connect(mapStateToProps)(SketchpadControl);