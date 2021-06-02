import React from 'react';
import CustomSidebarItem from '../CustomSidebarItem';
import SidebarServiceIcon from '../../ServiceIcons/SidebarServiceIcon';

const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={
                <SidebarServiceIcon service='spotify' />
            }
            serviceName="spotifies"
        />
    );
};

export default SidebarItem;