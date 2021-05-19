import React from 'react';
import CustomNode from '../CustomNode';
import Terminal from '../../../styles/assets/terminal.svg';

const CustomServiceNode = (props) => {
    const shape = (
        <div className="node ssh">
            <img src={Terminal} alt="ssh-logo" width="75" className="ssh" />
        </div>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;