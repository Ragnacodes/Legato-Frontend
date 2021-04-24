import React from 'react';
import CustomNode from '../CustomNode';
import { Http } from '@material-ui/icons';

const CustomServiceNode = (props) => {
    const shape = (
        <div className="node http">
            <Http fontSize="large" className="http" />
        </div>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;