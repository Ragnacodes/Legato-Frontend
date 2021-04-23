import React from 'react';
import { Code } from '@material-ui/icons';
import CustomSidebarItem from '../CustomSidebarItem';

const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={<Code fontSize="large" className="icon ssh" />}
            serviceName="ssh"
        />
    );
};

export default SidebarItem;