import React from 'react';
import CustomNode from '../CustomNode';
import { GitHub } from '@material-ui/icons';

const CustomServiceNode = (props) => {
    const shape = (
        <div className="node github">
            <GitHub fontSize="large" className="github" />
        </div>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;