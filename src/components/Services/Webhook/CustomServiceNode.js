import React from 'react';
import CustomNode from '../CustomNode';
import WebhookIcon from '../../ServiceIcon';

const CustomServiceNode = (props) => {
    const shape = (
        <WebhookIcon service='webhooks' className='node'/>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;