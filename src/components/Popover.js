import React from 'react';
import clsx from 'clsx';
import {
  Button,
  Popover,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';

const CustomPopover = ({
  title,
  anchor,
  className,
  handleSave,
  handleCancel,
  setAnchor,
  children,
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
    >
      <div className={clsx('sketchpad-popover', className)}>
        <CloseRounded className="close-icon" />
        <Typography variant="h5">{title}</Typography>
        {children}
        <div className="actions">
          <Button autoFocus onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </div>
      </div>
    </Popover>
  );
};

export default CustomPopover;
