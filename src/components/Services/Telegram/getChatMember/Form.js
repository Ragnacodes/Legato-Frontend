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
        connectionId: data.connectionId || '',
        user_id: data.user_id || '',
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
            className="get-chat-member"
            title="Get member information"
            disabledSave={false}
            handleSave={handleSave}
            handleCancel={handleCancel}
        >
            <div className="connection-field">
                {
                    loadingConnections ? 
                    <TextField
                        className="text-field"
                        name="connectionId"
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
                        name="connectionId"
                        label="Bot token"
                        type="text"
                        variant="outlined"
                        select
                        size="small"
                        onChange={handleChange}
                        helperText="write your telegram bot's token here."
                        multiline
                        value={info.connectionId}
                    >
                        {
                            telegramConnections.map((c) => { 
                                return <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>; 
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
                helperText="write the target telegram chat id."
                multiline
                value={info.chat_id}
            />

            <TextField
                className="text-field"
                name="user_id"
                label="Username ID"
                type="text"
                variant="outlined"
                size="small"
                onChange={handleChange}
                helperText="write the target telegram user id."
                multiline
                value={info.user_id}
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