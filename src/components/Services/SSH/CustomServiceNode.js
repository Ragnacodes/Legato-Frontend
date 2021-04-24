import React from 'react';
import CustomNode from '../CustomNode';
import { Code } from '@material-ui/icons';

const CustomServiceNode = (props) => {
    const shape = (
        <div className="node ssh">
            <Code fontSize="large" className="ssh" />
        </div>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;