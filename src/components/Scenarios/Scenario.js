import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';
import { connect } from 'react-redux';
import { editScenario, removeScenario} from '../../actions/scenarios';
import Tooltip from '@material-ui/core/Tooltip';
import ScenarioNodes from './ScenarioNodes';

const Scenario = ({ id, name, isActive, interval, nodes, editScenario, removeScenario }) => {
    const handleToggleActvie = () => {
        editScenario(id, { isActive: !isActive });
    };

    const handleRemoveScenario = () => {
        removeScenario(id);
    };

    return (
        <ListItem className="scenario" button component={NavLink} to={`/sketchpad/${id}`}>
            <ScenarioNodes nodes={nodes} />

            <ListItemText primary={name} className="name" />

            <ListItemSecondaryAction className="control">
                {
                    interval ? (
                        <Tooltip title={`Each ${interval} minutes.`} placement="left">
                            <AccessTimeIcon fontSize="small" />
                        </Tooltip>
                    ) : (
                            <Tooltip title={`Immediately when triggered.`} placement="left">
                                <OfflineBoltOutlinedIcon fontSize="small" />
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

                <Tooltip title="Delete scenario." placement="right">
                    <IconButton aria-label="delete" className="delete" color="secondary" onClick={handleRemoveScenario}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

const mapDispatchToProps = (dispatch) => ({
    editScenario: (type, data) => dispatch(editScenario(type, data)),
    removeScenario: (type, data) => dispatch(removeScenario(type, data)),
});

export default connect(null, mapDispatchToProps)(Scenario);
