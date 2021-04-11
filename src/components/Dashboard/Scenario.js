import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';
import ScenarioNodes from '../Scenarios/ScenarioNodes';

const Scenario = ({ id, name, isActive, interval, nodes, editScenario, removeScenario }) => (
        <ListItem className="scenario" button component={NavLink} to={`/sketchpad/${id}`}>
            <ScenarioNodes nodes={nodes} />

            <ListItemText primary={name} className="name" />

            <ListItemSecondaryAction className="control">
                {
                    interval ? (
                        <React.Fragment>
                            <AccessTimeIcon fontSize="small" />
                            <p style={{padding:7, fontSize:"small", width:90}}>{`${interval} minutes`}</p>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <OfflineBoltOutlinedIcon fontSize="small" />
                            <p style={{padding:7, fontSize:"small", width:90}}>{`Immediately`} </p>
                        </React.Fragment>
                        )
                }
            </ListItemSecondaryAction>
        </ListItem>
    );

export default Scenario;
