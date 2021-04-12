import React, { useState } from 'react';
import Axios from '../../utils/axiosConfig';
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import {
    Button,
    Typography,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";
import { Telegram, GitHub, QueueMusic, Email }from '@material-ui/icons';
// import QueueMusicIcon from '@material-ui/icons/QueueMusic';


const Connections = () => {
    const [addConnection, setAddConnection] = useState(false);
    function onServiceClicked(e, inputService){
        // Axios.get('/user/connection/${inputService}/access/url');
        console.log(inputService);
    };
    return (
        <Container maxWidth="lg">
            <Button
                variant="contained"
                color="primary"
                onClick={() => setAddConnection(true)}
            >
                Add connection
            </Button>
            <Dialog
                disableBackdropClick
                className="signup-dialog"
                open={addConnection}
                onClose={() => setAddConnection(false)}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle disableTypography={true} style={{paddingBottom:4}}>
                    <Typography variant="h5">Service</Typography>
                </DialogTitle>
                <DialogContent>
                    <CloseRoundedIcon
                        className="close-icon"
                        onClick={() => setAddConnection(false)}
                    />
                    <DialogContentText>Please choose your service:</DialogContentText>
                    <List>
                        <ListItem button onClick={(e) => onServiceClicked(e,"Telegram")}>
                            <ListItemIcon>
                                <Telegram/>
                            </ListItemIcon>
                            <ListItemText primary="Telegram" />
                        </ListItem>
                        <ListItem button onClick={(e) => onServiceClicked(e,"Github")}>
                            <ListItemIcon>
                                <GitHub/>
                            </ListItemIcon>
                            <ListItemText primary="GitHub" />
                        </ListItem>
                        <ListItem button onClick={(e) => onServiceClicked(e,"Gmail")}>
                            <ListItemIcon>
                                <Email/>
                            </ListItemIcon>
                            <ListItemText primary="Gmail" />
                        </ListItem>
                        <ListItem button onClick={(e) => onServiceClicked(e,"spotify")}>
                            <ListItemIcon>
                                <QueueMusic/>
                            </ListItemIcon>
                            <ListItemText primary="Spotify" />
                        </ListItem>
                        {/* <ListItem button>
                            <ListItemIcon>
                                <Discord/>
                            </ListItemIcon>
                            <ListItemText primary="Discord" />
                        </ListItem> */}
                    </List>
                </DialogContent>
            </Dialog>

        </Container>
    );
}

export default Connections;
