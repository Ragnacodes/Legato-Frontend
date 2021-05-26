import React from 'react';
import CustomSidebarItem from '../CustomSidebarItem';
import GithubIcon from '../../../styles/assets/services/github_256.png';
const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={
                <div className="icon sidebar-icon service-icon--github">
                    <img src={GithubIcon} alt="github-logo" />
                </div>
            }
            serviceName="githubs"
        />
    );
};

export default SidebarItem;