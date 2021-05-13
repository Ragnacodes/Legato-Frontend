import React from 'react';
import { CircularProgress } from '@material-ui/core/';

const TableLoader = () => {
    return (
        <caption>
            <div className="centered-container">
                <CircularProgress size={30} thickness={1.8} />
            </div>
        </caption>
        
    );
};

export default TableLoader;