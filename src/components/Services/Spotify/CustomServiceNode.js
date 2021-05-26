import React from 'react';
import CustomNode from '../CustomNode';
import SpotifyIcon from '../../../styles/assets/services/spotify_256.png';

const CustomServiceNode = (props) => {
    const shape = (
        <div className="node spotify sidebar-icon service-icon--spotify">
        <img src={SpotifyIcon} alt="spotify-logo" />
    </div>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;