import React from 'react';
import CustomSidebarItem from '../CustomSidebarItem';
import SpotifyIcon from '../../../styles/assets/services/spotify_64.png';
const SidebarItem = () => {
    return (
        <CustomSidebarItem
            icon={
                <div className="icon sidebar-icon service-icon--spotify">
                    <img src={SpotifyIcon} alt="spotify-logo" />
                </div>
            }
            serviceName="spotifies"
        />
    );
};

export default SidebarItem;