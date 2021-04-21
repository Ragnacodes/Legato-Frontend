import React from 'react';
import Node from './Node';
import { Handle } from 'react-flow-renderer';

const TriggerNode = (props) => {
    const node = (
        <>
            <div className="node">
                <p className="text">{props.data.service}</p>
            </div>
            <Handle type="source" position="right" className="handle" />
        </>
    );

    return (
        <Node node={node} {...props} />
    );
};

export default TriggerNode;