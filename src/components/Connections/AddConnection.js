import React from 'react';
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
import { faDiscord, faSpotify, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

const AddConnection = ({addDialog, setAddDialog, createSSHConnetion}) => {
    function onServiceClicked(e, service) {
        Axios.get(`user/connection/access/token/${service}`)
            .then(res => {
                setAddDialog(false);
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

    return (
        <Dialog
            disableBackdropClick
            className="add-connection-dialog"
            open={addDialog}
            onClose={() => setAddDialog(false)}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle disableTypography={true} className="title" >
                <Typography variant="h5">Service</Typography>
            </DialogTitle>
            <DialogContent className="content">
                <CloseRounded
                    onClick={() => setAddDialog(false)}
                    className = "close-icon"
                />
                <DialogContentText>
                    Please choose your service:
                </DialogContentText>
                <List className="list">
                    <ListItem button className="item" onClick={(e) => onServiceClicked(e, "github")}>
                        <ListItemIcon className="icon">
                            <FontAwesomeIcon icon={faGithub} />
                        </ListItemIcon>
                        <ListItemText primary="GitHub" />
                    </ListItem>
                    <ListItem button className="item" onClick={(e) => onServiceClicked(e, "google")}>
                        <ListItemIcon className="icon">
                            <FontAwesomeIcon icon={faGoogle} />
                        </ListItemIcon>
                        <ListItemText primary="Gmail" />
                    </ListItem>
                    <ListItem button className="item" onClick={(e) => onServiceClicked(e, "spotify")}>
                        <ListItemIcon className="icon">
                            <FontAwesomeIcon icon={faSpotify} />
                        </ListItemIcon>
                        <ListItemText primary="Spotify" />
                    </ListItem>
                    <ListItem button className="item" onClick={(e) => onServiceClicked(e, "discord")}>
                        <ListItemIcon className="icon">
                            <FontAwesomeIcon icon={faDiscord} />
                        </ListItemIcon>
                        <ListItemText primary="Discord" />
                    </ListItem>
                    <ListItem button className="item" onClick={handleCreateSSH}>
                        <ListItemIcon className="icon">
                            <FontAwesomeIcon icon={faTerminal} />
                        </ListItemIcon>
                        <ListItemText primary="SSH" />
                    </ListItem>
                </List>
            </DialogContent>
        </Dialog>

    )
}

export default AddConnection;