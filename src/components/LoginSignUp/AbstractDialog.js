import React from 'react';
import {
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText
} from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';

const AbstractDialog = ({ open, onClick, title, description, form }) => {
    return (
        <Dialog
            disableBackdropClick
            className="dialog"
            open={open}
            onClose={() => onClick(false)}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle disableTypography={true} id="form-dialog-title">
                <Typography variant="h5">{title}</Typography>
            </DialogTitle>

            <DialogContent>
                <CloseRounded
                    className="close-icon"
                    onClick={() => onClick(false)}
                />
                <DialogContentText>{description}</DialogContentText>
                {form}
            </DialogContent>
        </Dialog>
    );
};

export default AbstractDialog;