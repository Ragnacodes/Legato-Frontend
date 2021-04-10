import React, {useState} from 'react';
import Popover from '@material-ui/core/Popover';
import {
    getBezierPath,
    getMarkerEnd,
    EdgeText,
    getEdgeCenter
} from 'react-flow-renderer';
import AbstractForm from './AbstractForm';

const CustomEdge = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    data = {},
    arrowHeadType,
    markerEndId,
}) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const edgePath = getBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition });
    const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);

    const open = Boolean(anchorEl);
    const idPopover = open ? 'simple-popover' : undefined;

    const [centerX, centerY] = getEdgeCenter({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition });

    return (
        <>
            <path id={id} className="react-flow__edge-path" d={edgePath} markerEnd={markerEnd}/>
            <EdgeText
                x={centerX}
                y={centerY}
                label="Edit"
                className="edge_text"
                labelBgStyle={{ fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 }}
                labelBgPadding={[8, 4]}
                labelBgBorderRadius={4}
                onClick={handleClick}
            />
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
                <AbstractForm id={id} type="edge" data={data} />
            </Popover>
        </>
    );
};

export default CustomEdge;