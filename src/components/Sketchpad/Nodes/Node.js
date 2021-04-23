import React, {useState} from 'react';
import { Popover } from '@material-ui/core';
import NodeForm from './NodeForm';

const Node = (props) => {
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
            <div onClick={handleClick}>
                {props.node}
            </div>

            <Popover
                id={idPopover}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
            >
                <NodeForm {...props} />
            </Popover>
        </>
    );
};

export default Node;