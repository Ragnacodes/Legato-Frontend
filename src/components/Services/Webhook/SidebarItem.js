import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
import CustomSidebarItem from '../CustomSidebarItem';
import Webhook from '../../../styles/assets/webhook.svg';

const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={<img src={Webhook} alt="webhook-logo" width="35" className="icon webhook" />}
            serviceName="webhooks"
        />
    );
};

export default SidebarItem;