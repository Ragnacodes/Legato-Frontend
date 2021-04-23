import React from 'react';
import { Telegram } from '@material-ui/icons';
import CustomSidebarItem from '../CustomSidebarItem';

const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={<Telegram fontSize="large" className="icon telegram" />}
            serviceName="telegrams"
        />
    );
};

export default SidebarItem;