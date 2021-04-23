import React from 'react';
import { Language } from '@material-ui/icons';
import CustomSidebarItem from '../CustomSidebarItem';

const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={<Language fontSize="large" className="icon webhook" />}
            serviceName="webhooks"
        />
    );
};

export default SidebarItem;