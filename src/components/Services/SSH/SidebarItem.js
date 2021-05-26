import React from 'react';
import CustomSidebarItem from '../CustomSidebarItem';
import SSHIcon from '../../ServiceIcon';
const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={
                <SSHIcon service='ssh' size='small' className='icon'/>
            }
            serviceName="sshes"
        />
    );
};

export default SidebarItem;