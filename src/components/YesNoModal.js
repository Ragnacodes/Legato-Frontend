import React from 'react';
import {
  Grid,
  Box,
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';

const YesNoModal = ({
  text,
  title,
  icon,
  visible,
  handleYes,
  setVisible,
  handleNo,
}) => {
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Dialog
      disableBackdropClick
      className="yes-no-modal"
      open={visible}
      onClose={handleCancel}
    >
      <DialogTitle disableTypography={true}>
        <Typography variant="h5">{!!title && title}</Typography>
      </DialogTitle>
      <CloseRounded className="close-icon" onClick={handleCancel} />
      <DialogContent>
        <Grid container direction="column" alignItems="center">
          <div className="icon">{!!icon && icon}</div>
          <Typography variant="body1">{text}</Typography>
        </Grid>
      </DialogContent>
      <div className="actions">
        <Button
          autoFocus
          onClick={() => {
            handleNo();
            setVisible(false);
          }}
          color="primary"
        >
          No
        </Button>
        <Button
          onClick={() => {
            handleYes();
            setVisible(false);
          }}
          variant="contained"
          color="secondary"
        >
          Yes
        </Button>
      </div>
    </Dialog>
  );
};

export default YesNoModal;
