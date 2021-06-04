import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ServiceForm from '../../../PopoverForm';
import { TextField, MenuItem, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { startGetConnections } from '../../../../actions/connections';


const Form = ({ id, data, editElement, setAnchorEl, getConnections, telegramConnections }) => {
    const [info, setInfo] = useState({
        name: data.name || '',
        chat_id: data.chat_id || '',
        key: data.key || '',
        text: data.text || 'hi this is legato!',
    });

    const [loadingConnections, setLoadingConnections] = useState(false);
    
    useEffect(() => {
        setLoadingConnections(true);
        getConnections()
            .then(() => {
                setLoadingConnections(false);
            });
    }, [getConnections]);

    const handleChange = (e) => {
        setInfo((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
    };

    const handleCancel = () => {
        setAnchorEl(null);
    };
    
    const handleSave = () => {
        const updates = {
            name: info['name'],
            data: { ...data, ...info }
        };
        editElement(id, updates);
        setAnchorEl(null);
    };

    return (
        <ServiceForm
            className="send-message"
            title="send a message"
            disabledSave={false}
            handleSave={handleSave}
            handleCancel={handleCancel}
        >
            <div className="connection-field">
                {
                    loadingConnections ? 
                    <TextField
                        className="text-field"
                        name="key"
                        label="Bot token"
                        type="text"
                        variant="outlined"
                        size="small"
                        onChange={handleChange}
                        helperText="write your telegram bot's token here."
                        multiline
                        value="Loading..."
                        disabled
                    />
                    :
                    <TextField
                        className="text-field"
                        name="key"
                        label="Bot token"
                        type="text"
                        variant="outlined"
                        select
                        size="small"
                        onChange={handleChange}
                        helperText="write your telegram bot's token here."
                        multiline
                        value={info.key}
                    >
                        {
                            telegramConnections.map((c) => { 
                                return <MenuItem key={c.id} value={c.data.key}>{c.name}</MenuItem>; 
                            })                     
                        }
                    </TextField>
                }
                <IconButton
                    name="addConnection"
                    size="small"
                    className="add-icon"
                    component={NavLink} to="/connections"
                >
                    <Add />
                </IconButton>
            </div>

            <TextField
                className="text-field"
                name="chat_id"
                label="Chat ID"
                type="text"
                variant="outlined"
                size="small"
                onChange={handleChange}
                helperText="write the chat_id of your target user."
                multiline
                value={info.chat_id}
            />

            <TextField
                className="text-field"
                name="text"
                label="Message text"
                type="text"
                variant="outlined"
                size="small"
                onChange={handleChange}
                helperText="type your message."
                multiline
                value={info.text}
            />

        </ServiceForm>
    );
}

const mapStateToProps = (state) => ({
    telegramConnections : state.connections.filter((c) => c.type === 'telegrams'),
})

const mapDispatchToProps = (dispatch) => ({
    getConnections: () => dispatch(startGetConnections()),
});

export default connect(mapStateToProps, mapDispatchToProps) (Form);