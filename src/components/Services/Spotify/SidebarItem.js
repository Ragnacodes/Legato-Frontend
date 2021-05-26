import React from 'react';
import CustomSidebarItem from '../CustomSidebarItem';
import SpotifyIcon from '../../ServiceIcon';
const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={
                <SpotifyIcon service='spotify' size='small' className='icon'/>
            }
            serviceName="spotifies"
        />
    );
};

export default SidebarItem;