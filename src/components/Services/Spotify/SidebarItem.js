import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import CustomSidebarItem from '../CustomSidebarItem';

const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={<FontAwesomeIcon icon={faSpotify} className="icon spotify" />}
            serviceName="spotifies"
        />
    );
};

export default SidebarItem;