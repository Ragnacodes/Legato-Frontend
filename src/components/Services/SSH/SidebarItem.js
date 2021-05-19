import React from 'react';
import Terminal from '../../../styles/assets/terminal.svg';
import CustomSidebarItem from '../CustomSidebarItem';

const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={<img src={Terminal} alt="ssh-logo" width="35" className="icon ssh" />}
            serviceName="sshes"
        />
    );
};

export default SidebarItem;