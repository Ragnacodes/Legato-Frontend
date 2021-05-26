import React from 'react';
import CustomNode from '../CustomNode';
import SSHIcon from '../../../styles/assets/services/ssh_256.png';

const CustomServiceNode = (props) => {
    const shape = (
        <div className="node ssh sidebar-icon service-icon--ssh">
        <img src={SSHIcon} alt="ssh-logo" />
    </div>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;