import React, { useState, useLayoutEffect } from 'react';
import { MenuItem, Button, TextField, IconButton } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';
import { connect } from 'react-redux';
import { startGetConnections } from '../../../../actions/connections';
import * as actions from '../../../../actions/discord';
import ServiceForm from '../../../PopoverForm';
import MessageList from '../MessageList';
import Message from '../Message';
export function Form({
  id,
  data,
  connections,
  channels,
  messages,
  editElement,
  setAnchorEl,
  getChannels,
  getConnections,
  getMessages,
}) {
  const [info, setInfo] = useState({
    connection: data.connection || '',
    channelId: data.channelId || '',
    messageId: data.messageId || '',
    react: data.react || '',
  });

  const [guildId, setGuildId] = useState('');

  useLayoutEffect(() => {
    if (guildId) getChannels(guildId);
  }, [guildId, getChannels]);

  useLayoutEffect(() => {
    if (info.channelId) getMessages(info.channelId);
  }, [info.channelId, getMessages]);

  useLayoutEffect(() => {
    getConnections();
  }, [getConnections]);

  useLayoutEffect(() => {
    if (connections.length) {
      setGuildId(connections[0].data.guildId);
    }
  }, [connections]);

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancel = () => {
    setAnchorEl(null);
    setInfo({
      connection: data.connection || '',
      channelId: data.channelId || '',
      messageId: data.messageId || '',
      react: data.react || '',
    });
  };

  const handleSave = () => {
    const updates = {
      name: info.name,
      data: { ...data, ...info },
    };
    editElement(id, updates);
    setAnchorEl(null);
  };
  const [messageListAnchor, setMessageListAnchor] = useState(null);

  const openMessageList = (e) => {
    setMessageListAnchor(e.currentTarget);
  };

  let disabledSave = !info['messageId'] || !info['channelId'] || !info['react'];

  const FindMessage = (id) => {
    const msg = messages.find((message) => message.id === id);
    if (msg) return msg;
    return {};
  };

  const saveMessageId = (messageId) => {
    setInfo((prev) => ({ ...prev, messageId: messageId }));
  };

  return (
    <ServiceForm
      className="discord-forms"
      title="React to a message"
      disabledSave={disabledSave}
      handleSave={handleSave}
      handleCancel={handleCancel}
    >
      <MessageList
        messages={messages}
        anchor={messageListAnchor}
        setAnchor={setMessageListAnchor}
        value={info['messageId']}
        handleSave={saveMessageId}
      />

      <div className="channel-field">
        <TextField
          name="channelId"
          className="text-field"
          size="small"
          select
          label="Channel"
          value={info['channelId']}
          onChange={handleChange}
          variant="outlined"
        >
          {channels.map((c) => (
            <MenuItem key={c.id} value={c.id}>
              {c.name}
            </MenuItem>
          ))}
        </TextField>

        <IconButton
          name="refreshChannels"
          size="small"
          className="add-icon"
          onClick={getChannels}
        >
          <Refresh />
        </IconButton>
      </div>

      <TextField
        name="react"
        className="text-field"
        size="small"
        label="Reaction"
        value={info['react']}
        helperText="Choose an emoji."
        onChange={handleChange}
        variant="outlined"
      />

      <Button
        onClick={openMessageList}
        disabled={false}
        fullWidth
        variant="contained"
        color="primary"
      >
        Choose a message
      </Button>
      {info['messageId'] && (
        <Message message={FindMessage(info['messageId'])} />
      )}
    </ServiceForm>
  );
}
const mapStateToProps = (state) => ({
  connections: state.connections,
  channels: state.discord.channels,
  messages: state.discord.messages,
});

const mapDispatchToProps = (dispatch) => ({
  getConnections: () => dispatch(startGetConnections()),
  getChannels: (guildId) => dispatch(actions.startGetChannels(guildId)),
  getMessages: (channelId) => dispatch(actions.startGetMessages(channelId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
