import React from 'react';
import CustomSidebarItem from '../CustomSidebarItem';
import SSHIcon from '../../../styles/assets/services/ssh_64.png';
const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={
                <div className="icon sidebar-icon service-icon--ssh">
                    <img src={SSHIcon} alt="ssh-logo" />
                </div>
            }
            serviceName="sshes"
        />
    );
};

export default SidebarItem;