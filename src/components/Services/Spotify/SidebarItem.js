import React from 'react';
import { QueueMusic } from '@material-ui/icons';
import CustomSidebarItem from '../CustomSidebarItem';

const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={<QueueMusic fontSize="large" className="icon spotify" />}
            serviceName="spotify"
        />
    );
};

export default SidebarItem;