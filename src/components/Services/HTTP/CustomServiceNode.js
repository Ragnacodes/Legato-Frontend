import React from 'react';
import CustomNode from '../CustomNode';
import HttpIcon from '../../../styles/assets/services/http_256.png';

const CustomServiceNode = (props) => {
    const shape = (
        <div className="node http sketchpad-icon service-icon--http">
            <img src={HttpIcon} alt="http-logo" />
        </div>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;