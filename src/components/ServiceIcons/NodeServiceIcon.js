import React from 'react';
import ServiceIcon from './ServiceIcon';

const NodeServiceIcon = ({ service }) => {
    return <ServiceIcon
        service={service}
        width="80px"
        padding={2}
        className="rounded"
    />
};

export default NodeServiceIcon;