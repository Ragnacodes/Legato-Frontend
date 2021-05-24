import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startEditScenario, startRemoveScenario } from '../../actions/scenarios';
import {
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Switch,
    IconButton,
    Tooltip,
    Hidden
} from '@material-ui/core';
import {
    Delete,
    AccessTime,
    OfflineBoltOutlined,
    History
} from '@material-ui/icons';
import ScenarioNodes from './ScenarioNodes';

const Scenario = ({ id, name, isActive, interval, nodes, editScenario, removeScenario }) => {
    const handleToggleActvie = () => {
        editScenario(id, { isActive: !isActive });
    };

    const handleRemoveScenario = () => {
        removeScenario(id);
    };

    return (
        <ListItem className="scenario" button component={NavLink} to={`/scenarios/${id}/sketchpad`}>
            <Hidden xsDown>
                <ScenarioNodes nodes={nodes} />
            </Hidden>

            <ListItemText primary={name} className="name" />

            <ListItemSecondaryAction className="control">
                {
                    interval ? (
                        <Tooltip title={`Each ${interval} minutes.`} placement="top">
                            <AccessTime fontSize="small" />
                        </Tooltip>
                    ) : (
                            <Tooltip title={`Immediately when triggered.`} placement="top">
                                <OfflineBoltOutlined fontSize="small" />
                            </Tooltip>
                        )
                }

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

                <Tooltip title="Delete scenario." placement="top">
                    <IconButton aria-label="delete" color="secondary" onClick={handleRemoveScenario}>
                        <Delete fontSize="small" />
                    </IconButton>
                </Tooltip>

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
    editScenario: (id, updates) => dispatch(startEditScenario(id, updates)),
    removeScenario: (id) => dispatch(startRemoveScenario(id)),
});

export default connect(null, mapDispatchToProps)(Scenario);
