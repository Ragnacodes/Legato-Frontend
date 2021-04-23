import React from 'react';
import { GitHub } from '@material-ui/icons';
import CustomSidebarItem from '../CustomSidebarItem';

const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={<GitHub fontSize="large" className="icon github" />}
            serviceName="github"
        />
    );
};

export default SidebarItem;