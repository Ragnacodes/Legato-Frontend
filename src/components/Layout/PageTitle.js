import React from 'react';
import { Typography } from '@material-ui/core';

const PageTitle = ({ title }) => {
    return (
        <Typography component="h6" variant="h6" color="inherit" noWrap>
          {title}
        </Typography> 
    );
};

export default PageTitle;