import React from 'react';
import { Language } from '@material-ui/icons';
import SidebarItem from '../../Sketchpad/Sidebar/SidebarItem';
import trigger1 from './Trigger1/trigger1';
import action1 from './Action1/action1';

const WebhookSidebarItem = () => {
    const triggers = [trigger1];
    const actions = [action1];

    return (
        <SidebarItem
            icon={<Language fontSize="large" className="icon webhook" />}
            service="webhook"
            triggers={triggers}
            actions={actions}
        />
    );
};

export default WebhookSidebarItem;