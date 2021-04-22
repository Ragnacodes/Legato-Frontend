import React from 'react';
import Form from './Form';
import CustomNode from '../../CustomNode';

const Node = (props) => {
    return (
        <CustomNode kind="trigger" form={Form} {...props} />
    );
};

export default Node;