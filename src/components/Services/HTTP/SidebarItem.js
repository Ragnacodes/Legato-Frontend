import React from 'react';
import { Http } from '@material-ui/icons';
import CustomSidebarItem from '../CustomSidebarItem';

const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={<Http fontSize="large" className="icon http" />}
            serviceName="https"
        />
    );
};

export default SidebarItem;