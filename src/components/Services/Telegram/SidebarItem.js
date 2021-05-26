import React from 'react';
import CustomSidebarItem from '../CustomSidebarItem';
import TelegramIcon from '../../ServiceIcon';

const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={                
                <TelegramIcon service='telegram' size='small' className='icon'/>
            }
            serviceName="telegrams"
        />
    );
};

export default SidebarItem;