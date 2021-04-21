import React from 'react';
import { Code } from '@material-ui/icons';
import SidebarItem from '../../Sketchpad/Sidebar/SidebarItem';
import trigger1 from './Trigger1/trigger1';
import action1 from './Action1/action1';

const SSHSidebarItem = () => {
    const triggers = [trigger1];
    const actions = [action1];

    return (
        <SidebarItem
            icon={<Code fontSize="large" className="icon ssh" />}
            service="ssh"
            triggers={triggers}
            actions={actions}
        />
    );
};

export default SSHSidebarItem;