import React from 'react';
import CustomSidebarItem from '../CustomSidebarItem';
import SidebarServiceIcon from '../../ServiceIcons/SidebarServiceIcon';

const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={
                <SidebarServiceIcon service='gmail' />
            }
            serviceName="gmails"
        />
    );
};

export default SidebarItem;