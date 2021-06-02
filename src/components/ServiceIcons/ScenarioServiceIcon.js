import React from 'react';
import ServiceIcon from './ServiceIcon';

const ScenarioServiceIcon = ({ service }) => {
    return (
        <ServiceIcon
            service={service}
            size='small'
            padding="4px"
        />
    );
};

export default ScenarioServiceIcon;