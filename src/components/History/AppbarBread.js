import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs, Link } from '@material-ui/core';
import { AccountTree, TurnedIn, History, Schedule } from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';
import style from '../../styles/breadcrumbs';

const AppbarBread = ({ scenario, history }) => {
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

            <Link
                component={RouterLink}
                to={`/scenarios/${scenario.id}/sketchpad`}
                underline="none"
                color="inherit"
                className={classes.link}
            >
                <TurnedIn className={classes.icon} />
                {scenario.name === undefined ? <Skeleton width={120} className="skeleton-light" /> : scenario.name}
            </Link>

            <Link
                component={RouterLink}
                to={`/scenarios/${scenario.id}/history`}
                underline="none"
                color="inherit"
                className={classes.link}
            >
                <History className={classes.icon} />
                History
            </Link>

            <Link
                component={RouterLink}
                to={`/scenarios/${scenario.id}/history/${history.id}`}
                underline="none"
                color="inherit"
                className={classes.link}
            >
                <Schedule className={classes.icon} />
                {history.time === undefined ? <Skeleton width={120} className="skeleton-light" /> : history.time}
            </Link>
        </Breadcrumbs>
    );
};

export default AppbarBread;