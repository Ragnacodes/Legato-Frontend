import React from 'react';
import CustomSidebarItem from '../CustomSidebarItem';
import HttpIcon from '../../../styles/assets/services/http_64.png';
const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={
                <div className="icon sidebar-icon service-icon--http">
                    <img src={HttpIcon} alt="http-logo" />
                </div>
            }
            serviceName="https"
        />
    );
};

export default SidebarItem;