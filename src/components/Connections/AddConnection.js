import React, { useState } from 'react';
import Axios from '../../utils/axiosConfig';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';
import TelegramBot from './TelegramBot';
import ConnectionServiceIcon from '../ServiceIcons/ConnectionServiceIcon';

const AddConnection = ({addDialog, setAddDialog, createSSHConnetion}) => {
    function onServiceClicked(e, service) {
        Axios.get(`user/connection/access/token/${service}`)
            .then(res => {
                setAddDialog(false);
                window.location.href = res.data.url;
            })
            .catch(err => {
                throw err;
            });
    };

    function handleCreateSSH() {
        setAddDialog(false);
        createSSHConnetion();
    }

    const[telegramDialog, setTelegramDialog] = useState(false);
    const addTelegram = () => {
        setAddDialog(false);
        setTelegramDialog(true);
    }

    return (
        <React.Fragment>
            <Dialog
                disableBackdropClick
                className="add-connection-dialog"
                open={addDialog}
                onClose={() => setAddDialog(false)}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle disableTypography={true} className="title">
                    <Typography variant="h5">Service</Typography>
                </DialogTitle>
                <DialogContent className="content">
                    <CloseRounded
                        className = "close-icon"
                        onClick={() => setAddDialog(false)}
                    />
                    <DialogContentText>
                        Please choose your service:
                    </DialogContentText>
                    <List className="list">
                        <ListItem className="item" button onClick={(e) => onServiceClicked(e, "github")}>
                            <ListItemIcon className="icon">
                                <ConnectionServiceIcon service="github" />
                            </ListItemIcon>
                            <ListItemText primary="GitHub" />
                        </ListItem>

                        <ListItem className="item" button onClick={(e) => onServiceClicked(e, "spotify")}>
                            <ListItemIcon className="icon">
                                <ConnectionServiceIcon service="spotify" />
                            </ListItemIcon>
                            <ListItemText primary="Spotify" />
                        </ListItem>

                        <ListItem className="item" button onClick={(e) => onServiceClicked(e, "discord")}>
                            <ListItemIcon className="icon">
                                <ConnectionServiceIcon service="discord" />
                            </ListItemIcon>
                            <ListItemText primary="Discord" />
                        </ListItem>

                        <ListItem className="item" button onClick={() => addTelegram()}>
                            <ListItemIcon className="icon">
                                <ConnectionServiceIcon service="telegram" />
                            </ListItemIcon>
                            <ListItemText primary="Telegram bot" />
                        </ListItem>

                        <ListItem className="item" button onClick={handleCreateSSH}>
                            <ListItemIcon className="icon">
                                <ConnectionServiceIcon service="ssh" />
                            </ListItemIcon>
                            <ListItemText primary="SSH" />
                        </ListItem>

                    </List>
                </DialogContent>
            </Dialog>
        
            <TelegramBot telegramDialog={telegramDialog} setTelegramDialog={setTelegramDialog} />
        </React.Fragment>
    )
}

export default AddConnection;