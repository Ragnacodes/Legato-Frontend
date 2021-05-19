import React from 'react';
import CustomNode from '../CustomNode';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Http from '../../../styles/assets/http.svg';

const CustomServiceNode = (props) => {
    const shape = (
        <div className="node http">
            <img src={Http} alt="http-logo" width="75" className="http" />
        </div>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;