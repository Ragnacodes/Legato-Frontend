import React from 'react';
import CustomNode from '../CustomNode';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Webhook from '../../../styles/assets/webhook.svg';

const CustomServiceNode = (props) => {
    const shape = (
        <div className="node webhook">
            <img src={Webhook} alt="webhook-logo" width="75" className="webhook" />
        </div>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;