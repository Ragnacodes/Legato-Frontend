import React from 'react';
import CustomNode from '../CustomNode';
import SSHIcon from '../../ServiceIcon';

const CustomServiceNode = (props) => {
    const shape = (
        <SSHIcon service='ssh' className='node'/>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;