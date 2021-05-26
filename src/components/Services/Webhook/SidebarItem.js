import React from 'react';
import CustomSidebarItem from '../CustomSidebarItem';
import WebhookIcon from '../../ServiceIcon';

const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={
                <WebhookIcon service='webhooks' size='small' className='icon'/>
            }
            serviceName="webhooks"
        />
    );
};

export default SidebarItem;