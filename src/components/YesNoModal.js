import React from 'react';
import {
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';

const YesNoModal = ({ text, visible, handleYes, setVisible, handleNo }) => {
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
        {/* <Typography variant="h5">Are you sure?</Typography> */}
      </DialogTitle>
      <CloseRounded className="close-icon" onClick={handleCancel} />
      <DialogContent>
        <Typography variant="body1">{text}</Typography>
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
          color="primary"
        >
          Yes
        </Button>
      </div>
    </Dialog>
  );
};

export default YesNoModal;
