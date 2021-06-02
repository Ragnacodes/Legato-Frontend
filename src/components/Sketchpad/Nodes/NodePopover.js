import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Popover } from '@material-ui/core';
import NodeForm from './NodeForm';

const NodePopover = ({ nodeID, props }) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        const nodeEl = document.getElementById(`${nodeID}`);
        setAnchorEl(nodeEl);
    }, [nodeID]);

    const open = Boolean(anchorEl);
    const idPopover = open ? 'simple-popover-node' : undefined;

    const handleClose = (newNodeID) => {
        dispatch({
            type: 'SET_NODE_ID',
            nodeID: newNodeID,
            props
        });
    };

    return (
        <Popover
            id={idPopover}
            open={open}
            anchorEl={anchorEl}
            onClose={() => {handleClose(null)}}
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'left',
            }}
        >
            <NodeForm setAnchorEl={handleClose} {...props} />
        </Popover>
    );
};

const mapStateToProps = (state) => {
    return {
        nodeID: state.nodePopover.nodeID,
        props: state.nodePopover.props
    };
};

export default connect(mapStateToProps)(NodePopover);