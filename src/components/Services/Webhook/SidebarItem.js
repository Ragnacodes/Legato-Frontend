import React from 'react';
import CustomSidebarItem from '../CustomSidebarItem';
import WebhookIcon from '../../../styles/assets/services/webhooks_64.png';

const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={
                <div className="icon sidebar-icon service-icon--webhooks">
                    <img src={WebhookIcon} alt="webhook-logo" />
                </div>
            }
            serviceName="webhooks"
        />
    );
};

export default SidebarItem;