import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dialog, 
         DialogContent,
         DialogTitle, 
         DialogContentText, 
         Typography, 
         TextField, 
         Button } from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';
import { startAddConnection } from '../../actions/connections';


const TelegramBot = ({telegramDialog, setTelegramDialog, addConnection}) => {
    const [telegramBot, setTelegramBot] = useState("");
    
    const handleChange = (e) => {
        setTelegramBot(e.target.value);
    }
    
    const handleSave = () => {
        const telegramConnection = {
            name: "my telegram bot",
            type: "telegrams",
            data: {
                key: telegramBot
            }
        };
        addConnection(telegramConnection)
            .then(()=>setTelegramDialog(false));
    }
    return (
        <Dialog 
            className="add-connection-dialog" 
            open={telegramDialog}
            onClose={() => setTelegramDialog(false)}
        >
            <DialogTitle className="title" disableTypography={true}>
                <Typography variant="h5">Telegram bot</Typography>
            </DialogTitle>
            <DialogContent className="content">
                <CloseRounded
                    onClick={() => setTelegramDialog(false)}
                    className="close-icon"
                />
                
                <DialogContentText>
                    Please enter token of your telegram bot:
                </DialogContentText>
                
                <TextField
                    type="text"
                    variant="outlined"
                    value={telegramBot}
                    onChange={(e) => handleChange(e)}
                    fullWidth
                    required
                    size="medium"
                    multiline
                />
                
                <div className="options">
                    <Button
                        onClick={() =>setTelegramDialog(false)}
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => handleSave()}
                        variant="contained"
                        color="primary"
                    >
                        Save
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addConnection: (connection) => dispatch(startAddConnection(connection)),
});

export default connect(null, mapDispatchToProps)(TelegramBot);