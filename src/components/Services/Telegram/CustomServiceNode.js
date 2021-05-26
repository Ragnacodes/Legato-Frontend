import React from 'react';
import CustomNode from '../CustomNode';
import TelegramIcon from '../../ServiceIcon';

const CustomServiceNode = (props) => {
    const shape = (
        <TelegramIcon service='telegram' className='node'/>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;