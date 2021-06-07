import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs, Link } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import style from '../../styles/breadcrumbs';

const AppbarBread = ({ loading, parts }) => {
    const classes = style();
    
    return (
        <Breadcrumbs className={classes.separator}>
            {
                loading ? <Skeleton width={350} className="skeleton-light" /> :
                parts.map((part, index) => {
                    const { path, CustomIcon, title } = part;
                    return (
                        <Link
                            key={index}
                            component={RouterLink}
                            to={path}
                            underline="none"
                            color="inherit"
                            className={classes.link}
                        >
                            <CustomIcon className={classes.icon} />
                            {title}
                        </Link>
                    );
                })
            }
        </Breadcrumbs>
    );
};

export default AppbarBread;