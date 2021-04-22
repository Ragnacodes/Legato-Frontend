import React from 'react';
import clsx from 'clsx';
import { Button, Popover, Typography } from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';

const CustomPopover = ({
  title,
  anchor,
  className,
  disabledSave,
  handleSave,
  handleCancel,
  setAnchor,
  children,
  ...properties
}) => {
  return (
    <Popover
      open={Boolean(anchor)}
      anchorEl={anchor}
      onClose={() => setAnchor(null)}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      {...properties}
    >
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
    </Popover>
  );
};

export default CustomPopover;
