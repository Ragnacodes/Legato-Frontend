import React from 'react';
import clsx from 'clsx';
import { Box, Grid } from '@material-ui/core';

const getImage = (image) => {
    return require('../../styles/assets/services/' + image + '.png').default;
};

const ServiceIcon = ({ service, size, width, padding, className }) => {
    const res = size === 'small' ? 64 : 256;
    const imageName = `${service}_${res}`;

    return (
        <Box
            p={padding}
            width={width}
            className={
                clsx(
                    'service-icon',
                    `service-icon--${service}`,
                    className
                )
            }
        >
            <Grid
                container
                justify="center"
            >
                <img
                    src={getImage(imageName)}
                    alt={`${service}-logo`}
                    draggable={false}
                    width="100%"
                />
            </Grid>
        </Box>
    )
};

export default ServiceIcon;