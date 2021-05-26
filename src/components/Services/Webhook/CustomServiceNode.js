import React from 'react';
import CustomNode from '../CustomNode';
import WebhookIcon from '../../../styles/assets/services/webhooks_256.png';

const CustomServiceNode = (props) => {
    const shape = (
        <div className="node webhook sidebar-icon service-icon--webhooks">
            <img src={WebhookIcon} alt="webhook-logo" />
        </div>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;