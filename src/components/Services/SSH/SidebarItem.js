import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import CustomSidebarItem from '../CustomSidebarItem';

const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={<FontAwesomeIcon icon={faGithub} className="icon ssh" />}
            serviceName="sshes"
        />
    );
};

export default SidebarItem;