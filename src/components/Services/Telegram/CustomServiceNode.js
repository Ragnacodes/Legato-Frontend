import React from 'react';
import CustomNode from '../CustomNode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

const CustomServiceNode = (props) => {
    const shape = (
        <div className="node telegram">
            <FontAwesomeIcon icon={faTelegram} className="telegram" />
        </div>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;