import React from 'react';
import { useDispatch } from 'react-redux';
import { startEditScenario } from '../../actions/scenarios';
import { Tooltip, Switch } from '@material-ui/core';

const ScenarioActivation = ({ id, isActive }) => {
    const dispatch = useDispatch();

    const handleToggleActvie = () => {
        const updates = {
            isActive: !isActive
        };
        dispatch(
            startEditScenario(id, updates)
        );
    };

    return (
        <Tooltip
            title={`Turn ${isActive ? "off" : "on"}`}
            placement="top"
        >
            <Switch
                edge="end"
                color="primary"
                size="small"
                checked={isActive}
                onChange={handleToggleActvie}
            />
        </Tooltip>
    );
};

export default ScenarioActivation;