import React from 'react';
import TriggerNode from '../Sketchpad/Nodes/TriggerNode';
import ActionNode from '../Sketchpad/Nodes/ActionNode';

const CustomNode = (props) => {
    if (props.kind === 'trigger') {
        return <TriggerNode form={props.form} shape={props.shape} {...props} />
    }
    return <ActionNode form={props.form} shape={props.shape} {...props} />
};

export default CustomNode;