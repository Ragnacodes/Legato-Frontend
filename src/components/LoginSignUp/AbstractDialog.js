import React from 'react';
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

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
                <CloseRoundedIcon
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