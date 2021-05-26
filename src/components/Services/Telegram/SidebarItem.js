import React from 'react';
import CustomSidebarItem from '../CustomSidebarItem';
import TelegramIcon from '../../../styles/assets/services/telegram_64.png';

const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={                
            <div className="icon sidebar-icon service-icon--telegram">
                <img src={TelegramIcon} alt="telegram-logo" />
            </div>
            }
            serviceName="telegrams"
        />
    );
};

export default SidebarItem;