import React from 'react';
import CustomNode from '../CustomNode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import GithubIcon from '../../../styles/assets/services/github_64.png';

const CustomServiceNode = (props) => {
    const shape = (
        <div className="node github sketchpad-icon service-icon--github">
            <img src={GithubIcon} alt="github-logo" />
        </div>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;