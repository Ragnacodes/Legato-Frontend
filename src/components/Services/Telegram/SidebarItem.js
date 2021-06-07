import React from 'react';
import CustomSidebarItem from '../CustomSidebarItem';
import SidebarServiceIcon from '../../ServiceIcons/SidebarServiceIcon';

const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={                
                <SidebarServiceIcon service='telegram' />
            }
            serviceName="telegrams"
        />
    );
};

export default SidebarItem;