import React, {useState} from 'react';
import { Handle } from 'react-flow-renderer';
import { Popover } from '@material-ui/core';
import AbstractForm from './AbstractForm';

const AbstractNode = (props) => {
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
                <Handle type="target" position="left" className="handle" />
                <div className="node">
                    <p className="text">{props.type}</p>
                </div>
                <Handle type="source" position="right" className="handle" />
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
                <AbstractForm {...props} />
            </Popover>
        </>
    );
};

export default AbstractNode;