import React from 'react';
import clsx from 'clsx';
import { Button, Typography } from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';

const ServiceForm = ({
  title,
  className,
  disabledSave,
  handleSave,
  handleCancel,
  children,
}) => {
  return (
    <div className={clsx('sketchpad-popover', className)}>
      <CloseRounded className="close-icon" onClick={handleCancel} />
      <Typography variant="h5">{title}</Typography>
      {children}
      <div className="actions">
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button
          disabled={disabledSave}
          onClick={handleSave}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default ServiceForm;
