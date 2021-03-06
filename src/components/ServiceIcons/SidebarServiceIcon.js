import React from 'react';
import ServiceIcon from './ServiceIcon';

const SidebarServiceIcon = ({ service }) => {
    return <ServiceIcon
        service={service}
        width="40px"
        padding="4px"
        className="rounded"
    />
};

export default SidebarServiceIcon;