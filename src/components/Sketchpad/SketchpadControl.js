import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Box } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';
import Scheduling from './Scheduling/Scheduling';
import Status from './Status';
import Logs from './Logs';
import Axios from '../../utils/axiosConfig';

const SketchpadControl = ({ fetched, username, scenario }) => {

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

            <Box borderTop={1} borderColor="grey.500">
                <Grid container alignItems="center" justify="space-around">
                    <Grid item>
                        <Box mx={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                onClick={onClicked}
                                startIcon={<PlayArrow />}
                            >
                                Run Once
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item>
                        <Box mx={2}>
                            <Button
                                variant="outlined"
                                color="primary"
                                size="large"
                                onClick={()=>setShowScheduling(true)}
                            >
                                Scheduling
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item>
                        <Box mx={2} width="120px">
                            <Status />
                        </Box>
                    </Grid>

                    <Grid item xs={true}>
                        <Logs fetched={fetched} scenarioID={scenario.id} />
                    </Grid>

                </Grid>
            </Box>
            
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