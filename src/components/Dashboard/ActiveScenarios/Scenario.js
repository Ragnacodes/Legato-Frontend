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
import ScenarioNodes from '../../Scenarios/ScenarioNodes';
import ScenarioTime from '../../Scenarios/ScenarioTime';
import ScenarioHistory from '../../Scenarios/ScenarioHistory';

const Scenario = ({ id, name, nodes, interval, isActive }) => {
    return (
        <ListItem
            button
            component={NavLink}
            to={`/scenarios/${id}/sketchpad`}
        >
            <Hidden xsDown>
                <Box mr={4}>
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
                    spacing={2}
                >
                    <Grid item>
                        <Box>
                            <ScenarioTime interval={interval} />
                        </Box>
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
