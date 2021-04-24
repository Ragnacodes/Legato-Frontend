import React from 'react';
import CustomNode from '../CustomNode';
import { QueueMusic } from '@material-ui/icons';

const CustomServiceNode = (props) => {
    const shape = (
        <div className="node spotify">
            <QueueMusic fontSize="large" className="spotify" />
        </div>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;