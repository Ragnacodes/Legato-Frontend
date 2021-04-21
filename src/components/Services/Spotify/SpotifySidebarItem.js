import React from 'react';
import { QueueMusic } from '@material-ui/icons';
import SidebarItem from '../../Sketchpad/Sidebar/SidebarItem';
import trigger1 from './Trigger1/trigger1';
import action1 from './Action1/action1';

const SpotifySidebarItem = () => {
    const triggers = [trigger1];
    const actions = [action1];

    return (
        <SidebarItem
            icon={<QueueMusic fontSize="large" className="icon spotify" />}
            service="spotify"
            triggers={triggers}
            actions={actions}
        />
    );
};

export default SpotifySidebarItem;