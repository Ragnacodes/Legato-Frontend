import React from 'react';
import Form from './Form';
import CustomServiceNode from '../CustomServiceNode';

const Node = (props) => {
    return (
        <CustomServiceNode kind="action" form={Form} {...props} />
    );
};

export default Node;