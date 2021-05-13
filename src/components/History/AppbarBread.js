import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import { AccountTree, TurnedIn, History } from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';
import style from '../../styles/breadcrumbs';

const AppbarBread = ({ loading, scenarioID, scenarioName }) => {
    const classes = style();
    
    return (
        <Breadcrumbs className={classes.separator}>
            <Link
                component={RouterLink}
                to="/scenarios"
                underline="none"
                color="inherit"
                className={classes.link}
            >
                <AccountTree className={classes.icon} />
                Scenarios
            </Link>

            <Typography
                color="inherit"
                className={classes.link}
            >
                <TurnedIn className={classes.icon} />
                {loading ? <Skeleton width={120} className="skeleton-light" /> : scenarioName}
            </Typography>

            <Link
                component={RouterLink}
                to={`/scenarios/${scenarioID}/history`}
                underline="none"
                color="inherit"
                className={classes.link}
            >
                <History className={classes.icon} />
                History
            </Link>
        </Breadcrumbs>
    );
};

export default AppbarBread;