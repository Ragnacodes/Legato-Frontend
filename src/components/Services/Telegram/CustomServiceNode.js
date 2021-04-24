import React from 'react';
import CustomNode from '../CustomNode';
import { Telegram } from '@material-ui/icons';

const CustomServiceNode = (props) => {
    const shape = (
        <div className="node telegram">
            <Telegram fontSize="large" className="telegram" />
        </div>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;