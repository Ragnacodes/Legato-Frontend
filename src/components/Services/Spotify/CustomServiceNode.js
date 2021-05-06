import React from 'react';
import CustomNode from '../CustomNode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

const CustomServiceNode = (props) => {
    const shape = (
        <div className="node spotify">
            <FontAwesomeIcon icon={faSpotify} className="spotify" />
        </div>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;