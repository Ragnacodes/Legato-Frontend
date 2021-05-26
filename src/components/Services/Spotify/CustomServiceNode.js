import React from 'react';
import CustomNode from '../CustomNode';
import SpotifyIcon from '../../ServiceIcon';

const CustomServiceNode = (props) => {
    const shape = (
        <SpotifyIcon service='spotify' className='node'/>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;