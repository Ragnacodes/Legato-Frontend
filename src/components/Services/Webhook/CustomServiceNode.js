import React from 'react';
import CustomNode from '../CustomNode';
import NodeServiceIcon from '../../ServiceIcons/NodeServiceIcon';

const CustomServiceNode = (props) => {
    const shape = (
        <NodeServiceIcon service='webhooks' />
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;