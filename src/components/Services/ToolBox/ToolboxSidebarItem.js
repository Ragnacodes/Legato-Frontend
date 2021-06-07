import React, { useState } from 'react';
import { connect } from 'react-redux';
import MenuItem from '../../Sketchpad/Sidebar/MenuItem';
import { Popover, Tooltip } from '@material-ui/core';

const ToolboxSidebarItem = ({ icon, services, subService }) => {
    const subServiceObject = services['tool_boxes'].find(service => service.subService === subService) || {};
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const idPopover = open ? 'simple-popover' : undefined;
    return (
        <>

        <Tooltip title={subService.charAt(0).toUpperCase() + subService.slice(1)} placement="left">
            <div className="dndnode" onClick={handleClick}>
                {icon}
            </div>
        </Tooltip>

        <Popover
            id={idPopover}
            className="service-menu"
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'right',
            }}
            marginThreshold={40}
        >
                <MenuItem
                    key={0}
                    service='tool_boxes'
                    item={subServiceObject}
                    close={handleClose}
                /> 
        </Popover>

        </>

    );
};
const mapStateToProps = (state) => {
    return {
        services: state.services
    };
};

export default connect(mapStateToProps)(ToolboxSidebarItem);