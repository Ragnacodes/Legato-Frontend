import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startEditScenario } from '../../actions/scenarios';
import { intervalToText } from './intervalToText';
import {
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Switch,
    IconButton,
    Tooltip,
    Hidden
} from '@material-ui/core';
import { AccessTime, History } from '@material-ui/icons';
import ScenarioNodes from './ScenarioNodes';
import DeleteScenario from './DeleteScenario';

const Scenario = ({ id, name, isActive, interval, nodes, editScenario }) => {
    const handleToggleActvie = () => {
        editScenario(id, { isActive: !isActive });
    };

    return (
        <ListItem className="scenario" button component={NavLink} to={`/scenarios/${id}/sketchpad`}>
            <Hidden xsDown>
                <ScenarioNodes nodes={nodes} />
            </Hidden>

            <ListItemText primary={name} className="name" />

            <ListItemSecondaryAction className="control">
                <Tooltip title={intervalToText(interval)} placement="top">
                    <AccessTime fontSize="small" />
                </Tooltip>

                <Tooltip title={`Turn ${isActive ? "off" : "on"}`} placement="top">
                    <Switch
                        edge="end"
                        onChange={handleToggleActvie}
                        checked={isActive}
                        color="primary"
                        size="small"
                        className="switch"
                    />
                </Tooltip>

                <DeleteScenario id={id} name={name} />

                <Tooltip title="History" placement="top">
                    <IconButton
                        aria-label="scenario history"
                        color="inherit"
                        component={NavLink}
                        to={`/scenarios/${id}/history`}
                    >
                        <History fontSize="small" />
                    </IconButton>
                </Tooltip>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

const mapDispatchToProps = (dispatch) => ({
    editScenario: (id, updates) => dispatch(startEditScenario(id, updates))
});

export default connect(null, mapDispatchToProps)(Scenario);
