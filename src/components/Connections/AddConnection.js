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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faSpotify, faGoogle, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import TelegramBot from './TelegramBot';

const AddConnection = ({addDialog, setAddDialog, createSSHConnetion}) => {
    function onServiceClicked(e, service) {
        setAddDialog(false);
        Axios.get(`user/connection/access/token/${service}`)
            .then(res => {
                window.location.href = res.data.url;
            })
            .catch(err => {
                console.log(err);
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
                className="signup-dialog"
                open={addDialog}
                onClose={() => setAddDialog(false)}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle disableTypography={true} style={{ paddingBottom: 4 }}>
                    <Typography variant="h5">Service</Typography>
                </DialogTitle>
                <DialogContent>
                    <CloseRounded
                        style={{ cursor: "pointer", fontSize: 24, position: "absolute", right: 10, top: 10, color: "$primary" }}
                        onClick={() => setAddDialog(false)}
                    />
                    <DialogContentText>
                        Please choose your service:
                    </DialogContentText>
                    <List>
                        <ListItem button onClick={(e) => onServiceClicked(e, "github")}>
                            <ListItemIcon style={{fontSize:30}}>
                                <FontAwesomeIcon icon={faGithub} />
                            </ListItemIcon>
                            <ListItemText primary="GitHub" />
                        </ListItem>
                        <ListItem button onClick={(e) => onServiceClicked(e, "google")}>
                            <ListItemIcon style={{fontSize:30}}>
                                <FontAwesomeIcon icon={faGoogle} />
                            </ListItemIcon>
                            <ListItemText primary="Gmail" />
                        </ListItem>
                        <ListItem button onClick={(e) => onServiceClicked(e, "spotify")}>
                            <ListItemIcon style={{fontSize:30}}>
                                <FontAwesomeIcon icon={faSpotify} />
                            </ListItemIcon>
                            <ListItemText primary="Spotify" />
                        </ListItem>
                        <ListItem button onClick={(e) => onServiceClicked(e, "discord")}>
                            <ListItemIcon style={{fontSize:30}}>
                                <FontAwesomeIcon icon={faDiscord} />
                            </ListItemIcon>
                            <ListItemText primary="Discord" />
                        </ListItem>
                        <ListItem button onClick={() => addTelegram()}>
                            <ListItemIcon style={{fontSize:30}}>
                                <FontAwesomeIcon icon={faTelegram} />
                            </ListItemIcon>
                            <ListItemText primary="Telegram bot" />
                        </ListItem>
                        <ListItem button onClick={handleCreateSSH}>
                            <ListItemIcon style={{fontSize:30}}>
                                <FontAwesomeIcon icon={faTerminal} />
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