import React from 'react';
import CustomNode from '../CustomNode';
import GithubIcon from '../../ServiceIcon';

const CustomServiceNode = (props) => {
    const shape = (
        <GithubIcon service='github' className='node'/>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;