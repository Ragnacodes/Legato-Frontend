import React from 'react';
import ServiceIcon from './ServiceIcon';

const ConnectionServiceIcon = ({ service }) => {
    return (
        <ServiceIcon
            service={service}
            width="40px"
            padding="3px"
            className="connection-icon"
        />
    );
};

export default ConnectionServiceIcon;