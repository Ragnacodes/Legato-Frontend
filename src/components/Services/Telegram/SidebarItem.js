import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import CustomSidebarItem from '../CustomSidebarItem';

const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={<FontAwesomeIcon icon={faTelegram} className="icon telegram" />}
            serviceName="telegrams"
        />
    );
};

export default SidebarItem;