import React from 'react';
import CustomNode from '../CustomNode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const CustomServiceNode = (props) => {
    const shape = (
        <div className="node webhook">
            <FontAwesomeIcon icon={faGithub} className="webhook" />
        </div>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;