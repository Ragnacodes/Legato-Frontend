import React from 'react';
import ServiceIcon from './ServiceIcon';

const LandingServiceIcon = ({ service }) => {
    return (
        <ServiceIcon
            service={service}
            padding={2}
            className="section__service"
        />
    );
};

export default LandingServiceIcon;