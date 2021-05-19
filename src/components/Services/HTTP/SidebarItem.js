import React from 'react';
import Http from '../../../styles/assets/http.svg';
import CustomSidebarItem from '../CustomSidebarItem';

const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={<img src={Http} alt="http-logo" width="35" className="icon http" />}
            serviceName="https"
        />
    );
};

export default SidebarItem;