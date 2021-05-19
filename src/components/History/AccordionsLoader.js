import React from 'react';
import { Skeleton } from '@material-ui/lab';

const CustomSkeleton = () => {
    return <Skeleton height="54px" />;
};

const AccordionsLoader = () => {
    return (
        <React.Fragment>
            <CustomSkeleton />
            <CustomSkeleton />
            <CustomSkeleton />
            <CustomSkeleton />
            <CustomSkeleton />
        </React.Fragment>
    );
};

export default AccordionsLoader;