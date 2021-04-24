import React from 'react';
import Node from './Node';
import { Handle } from 'react-flow-renderer';

const ActionNode = (props) => {
    const node = (
        <>
            <Handle type="target" position="left" className="handle" />
            {props.shape}
            <Handle type="source" position="right" className="handle" />
        </>
    );

    return (
        <Node node={node} {...props} />
    );
};

export default ActionNode;