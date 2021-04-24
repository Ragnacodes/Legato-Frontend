import React from 'react';
import CustomNode from '../CustomNode';
import { Language } from '@material-ui/icons';

const CustomServiceNode = (props) => {
    const shape = (
        <div className="node webhook">
            <Language fontSize="large" className="webhook" />
        </div>
    );

    return <CustomNode shape={shape} {...props} />;
};

export default CustomServiceNode;