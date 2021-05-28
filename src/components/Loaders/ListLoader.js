import React from 'react';
import { Skeleton } from '@material-ui/lab';

const ListLoader = () => {
    return (
        <React.Fragment>
          <Skeleton className="ListLoader_item" />
          <Skeleton className="ListLoader_item" animation={false} />
          <Skeleton className="ListLoader_item" animation="wave" />
          <Skeleton className="ListLoader_item" />
          <Skeleton className="ListLoader_item" animation={false} />
          <Skeleton className="ListLoader_item" animation="wave" />
          <Skeleton className="ListLoader_item" />
          <Skeleton className="ListLoader_item" animation={false} />
          <Skeleton className="ListLoader_item" animation="wave" />
          <Skeleton className="ListLoader_item" />
          <Skeleton className="ListLoader_item" animation={false} />
          <Skeleton className="ListLoader_item" animation="wave" />
        </React.Fragment>
    );
};

export default ListLoader;