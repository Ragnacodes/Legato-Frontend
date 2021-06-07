import React from 'react';
import { useDispatch } from 'react-redux';

const Node = (props) => {
    const dispatch = useDispatch();

    const handleDoubleClick = () => {
        dispatch({
            type: 'SET_NODE_ID',
            nodeID: props.id,
            props
        });
    };

    return (
        <div onDoubleClick={handleDoubleClick} id={props.id}>
            {props.node}
        </div>
    );
};

export default Node;