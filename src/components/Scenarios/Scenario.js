import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Grid,
    Box,
    Hidden,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Typography
} from '@material-ui/core';
import ScenarioNodes from './ScenarioNodes';
import ScenarioTime from './ScenarioTime';
import ScenarioActivation from './ScenarioActivation';
import ScenarioDelete from './ScenarioDelete';
import ScenarioHistory from './ScenarioHistory';

const Scenario = ({ id, name, nodes, interval, isActive }) => {
    return (
        <ListItem
            button
            component={NavLink}
            to={`/scenarios/${id}/sketchpad`}
        >
            <Hidden xsDown>
                <Box mr={2}>
                    <ScenarioNodes nodes={nodes} />
                </Box>
            </Hidden>

            <ListItemText>
                <Typography variant="body2">
                    {name}
                </Typography>
            </ListItemText>

            <ListItemSecondaryAction>
                <Grid
                    container
                    alignItems="center"
                >
                    <Grid item>
                        <Box>
                            <ScenarioTime interval={interval} />
                        </Box>
                    </Grid>

                    <Grid item>
                        <Box mx={2}>
                            <ScenarioActivation id={id} isActive={isActive} />
                        </Box>
                    </Grid>

                    <Grid item>
                        <ScenarioDelete id={id} name={name} />
                    </Grid>

                    <Grid item>
                        <ScenarioHistory id={id} />
                    </Grid>
                </Grid>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default Scenario;
