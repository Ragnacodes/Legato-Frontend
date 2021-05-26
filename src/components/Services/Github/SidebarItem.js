import React from 'react';
import CustomSidebarItem from '../CustomSidebarItem';
import GithubIcon from '../../ServiceIcon';
const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={
                <GithubIcon service='github' size='small' className='icon'/>
            }
            serviceName="githubs"
        />
    );
};

export default SidebarItem;