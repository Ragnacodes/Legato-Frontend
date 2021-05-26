import React from 'react';
import CustomNode from '../CustomNode';
import HttpIcon from '../../ServiceIcon';

const CustomServiceNode = (props) => {
    const shape = (
        <HttpIcon service='http' className='node'/>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;