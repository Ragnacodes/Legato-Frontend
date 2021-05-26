import React from 'react';
import CustomSidebarItem from '../CustomSidebarItem';
import HttpIcon from '../../ServiceIcon';
const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={
                <HttpIcon service='http' size='small' className='icon'/>
            }
            serviceName="https"
        />
    );
};

export default SidebarItem;