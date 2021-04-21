import React from 'react';
import { GitHub } from '@material-ui/icons';
import SidebarItem from '../../Sketchpad/Sidebar/SidebarItem';
import trigger1 from './Trigger1/trigger1';
import action1 from './Action1/action1';

const GithubSidebarItem = () => {
    const triggers = [trigger1];
    const actions = [action1];

    return (
        <SidebarItem
            icon={<GitHub fontSize="large" className="icon github" />}
            service="github"
            triggers={triggers}
            actions={actions}
        />
    );
};

export default GithubSidebarItem;