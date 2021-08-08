import React, { useState } from 'react';
import ServiceForm from '../../../PopoverForm';
import {
    Grid,
    TextField,
    IconButton,
    Box,
    Button,
    Popover,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction
} from '@material-ui/core';
import { Add, Delete } from '@material-ui/icons';
import AutoSuggestField from '../../../AutoSuggestField';

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const Form = ({ id, data, editElement, setAnchorEl }) => {
    
    const [info, setInfo] = useState({
        name: data.name || '',
        email: data.email || '',
        password: data.password || '',
        to: data.to || [],
        subject: data.subject || '',
        body: data.body || '',
        receiver: '',
    });

    const [listAnchor, setListAnchor] = useState(null);
    const listOpen = Boolean(listAnchor);
    const popoverID = listOpen ? 'simple-popover' : undefined;

    const handleChange = (eventOrValue, targetName) => {
        if (targetName) {
            // AutoSuggestField
            // eventOrValue is value
            // targetName is targetName
            setInfo((prev) => ({
                ...prev,
                [targetName]: eventOrValue,
            }));
        }

        else {
            // MUI TextField
            // eventOrValue is event
            // targetName is undefined
            setInfo((prev) => ({
                ...prev,
                [eventOrValue.target.name]: eventOrValue.target.value,
            }));
        }
    };

    const handleAddEmail = () => {
        setInfo((prev) => {
            return {
                ...prev,
                to: [...prev.to, prev.receiver],
                receiver: ''
            };
        });
    };

    const removeEmail = (recEmail) => {
        const to = info.to.filter(email => email !== recEmail);
        setInfo((prev) => {
            return {
                ...prev,
                to
            };
        });
    };
    
    const handleCancel = () => {
        setAnchorEl(null);
    };

    const handleSave = () => {
        const updates = {
            name: info.name,
            data: { 
                ...data,
                ...info
            }
        };
        editElement(id, updates)
        .then(() => {
            setAnchorEl(null);
        });
    };

    return (
        <ServiceForm
            title="Send Email"
            handleSave={handleSave}
            handleCancel={handleCancel}
            disabledSave={!validateEmail(info.email)}
        >
            <TextField
                error={!validateEmail(info.email)}
                onChange={handleChange}
                label="Email"
                type="email"
                name="email"
                value={info.email}
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
            />

            <TextField
                onChange={handleChange}
                label="Email Password"
                type="password"
                name="password"
                value={info.password}
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
            />

            <Grid container alignItems="center">
                <Grid item xs={true}>
                    <Box my={1}>
                        <TextField
                            onChange={handleChange}
                            label="Receiver"
                            type="email"
                            name="receiver"
                            value={info.receiver}
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                    </Box>
                </Grid>

                <Grid item>
                    <Grid container justify="center">
                        <IconButton
                            color="primary"
                            disabled={!validateEmail(info.receiver)}
                            onClick={handleAddEmail}
                        >
                            <Add />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify="center">
                        <Button
                            color="primary"
                            onClick={(e) => setListAnchor(e.currentTarget)}
                        >
                            List
                        </Button>
                        <Popover
                            id={popoverID}
                            open={listOpen}
                            anchorEl={listAnchor}
                            onClose={() => setListAnchor(null)}
                            anchorOrigin={{
                                vertical: 'center',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'center',
                                horizontal: 'left',
                            }}
                        >
                            <List dense>
                                {
                                    info.to.map((recEmail, index) => {
                                        return (
                                            <ListItem key={index}>
                                                <ListItemText
                                                    primary={recEmail}
                                                />
                                                <ListItemSecondaryAction>
                                                    <IconButton edge="end" onClick={() => removeEmail(recEmail)}>
                                                        <Delete className="error"/>
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                        </Popover>
                    </Grid>
                </Grid>

            </Grid>

            <TextField
                onChange={handleChange}
                label="Subject"
                name="subject"
                value={info.subject}
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
            />

            <AutoSuggestField
                ancestors={data.ancestors}
                onChange={(value) => handleChange(value, 'body')}
                label="Body"
                name="body"
                value={info.body}
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
                multiline
            />
        </ServiceForm>
    );
}

export default Form;