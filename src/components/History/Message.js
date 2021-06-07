import React from 'react';
import ReactJson from 'react-json-view';
import { Box, Typography } from '@material-ui/core';

const Message = ({ time, type, context }) => {
    return (
        <React.Fragment>
            <Box>
                <Typography
                    variant="caption"
                >
                    &bull; &nbsp;
                    {new Date(time).toLocaleString()}
                </Typography>
            </Box>
            <Box ml={2}>
                {
                    type === 'json' ? <ReactJson src={JSON.parse(context)} /> :
                    <Typography variant>{context}</Typography>
                }
            </Box>
        </React.Fragment>
    );
};

export default Message;