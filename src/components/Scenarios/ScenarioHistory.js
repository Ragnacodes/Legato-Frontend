import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tooltip, IconButton } from '@material-ui/core';
import { History } from '@material-ui/icons';

const SceanrioHistory = ({ id }) => {
    return (
        <Tooltip
            title="History"
            placement="top"
        >
            <IconButton
                color="inherit"
                component={NavLink}
                to={`/scenarios/${id}/history`}
            >
                <History
                    fontSize="small" 
                />
            </IconButton>
        </Tooltip>
    );
};

export default SceanrioHistory;