import React from 'react';
import { Telegram } from '@material-ui/icons';
import SidebarItem from '../../Sketchpad/Sidebar/SidebarItem';
import trigger1 from './Trigger1/trigger1';
import action1 from './Action1/action1';

const TelegramSidebarItem = () => {
    const triggers = [trigger1];
    const actions = [action1];

    return (
        <SidebarItem
            icon={<Telegram fontSize="large" className="icon telegram" />}
            triggers={triggers}
            actions={actions}
            service="telegram"
        />
    );
};

export default TelegramSidebarItem;