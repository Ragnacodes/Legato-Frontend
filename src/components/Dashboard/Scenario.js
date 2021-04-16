import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    ListItem,
    ListItemSecondaryAction,
    ListItemText
} from '@material-ui/core';
import {
    AccessTime,
    OfflineBoltOutlined
} from '@material-ui/icons';
import ScenarioNodes from '../Scenarios/ScenarioNodes';

const Scenario = ({ id, name, isActive, interval, nodes, editScenario, removeScenario }) => (
        <ListItem className="scenario" button component={NavLink} to={`/sketchpad/${id}`}>
            <ScenarioNodes nodes={nodes} />

            <ListItemText primary={name} className="name" />

            <ListItemSecondaryAction className="control">
                {
                    interval ? (
                        <React.Fragment>
                            <AccessTime fontSize="small" />
                            <p style={{padding:7, fontSize:"small", width:90}}>{`${interval} minutes`}</p>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <OfflineBoltOutlined fontSize="small" />
                            <p style={{padding:7, fontSize:"small", width:90}}>{`Immediately`} </p>
                        </React.Fragment>
                        )
                }
            </ListItemSecondaryAction>
        </ListItem>
    );

export default Scenario;
