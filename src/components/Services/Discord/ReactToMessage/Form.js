import React, { useState, useEffect } from 'react';
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
  editElement,
  setAnchorEl,
  getChannels,
  getConnection,
}) {
  const [info, setInfo] = useState({
    connection: data.connection || '',
    channelId: data.channelId || '',
    messageId: data.messageId || '',
    react: data.content || '',
  });

  const [guildId, setGuildId] = useState('');

  // useEffect(() => {
  //   if (guildId) getChannels(guildId);
  // }, [guildId, getChannels]);

  // useEffect(() => {
  //   getConnection();
  // }, [getConnection]);

  // useEffect(() => {
  //   if (connections) {
  //     setGuildId(connections[0].data.guildId);
  //   }
  // }, [connections]);

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleMessageChange = (event, newValue) => {
    console.log(newValue);
    setInfo((prev) => ({ ...prev, messageId: newValue }));
  };

  const handleCancel = () => {
    setAnchorEl(null);
    setInfo({
      connection: data.connection || '',
      channelId: data.channelId || '',
      content: data.content || '',
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
  const m = [
    {
      id: '8476268066511519048',
      type: 6,
      content: 'that is it',
      channel_id: '84616086600371753',
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: '2021-05-28T00:06:18.850000+00:00',
      edited_timestamp: null,
      flags: 0,
      components: [],
    },
    {
      id: '8476268066521519048',
      type: 6,
      content: 'that is it',
      channel_id: '84616086000371753',
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: '2021-05-28T00:06:18.850000+00:00',
      edited_timestamp: null,
      flags: 0,
      components: [],
    },
    {
      id: '8476268046651519048',
      type: 6,
      content: 'that is it',
      channel_id: '84160866000371753',
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: '2021-05-28T00:06:18.850000+00:00',
      edited_timestamp: null,
      flags: 0,
      components: [],
    },
    {
      id: '84762680665151908',
      type: 6,
      content: 'that is it',
      channel_id: '846160866000371753',
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: '2021-05-28T00:06:18.850000+00:00',
      edited_timestamp: null,
      flags: 0,
      components: [],
    },
    {
      id: '847626806651519049',
      type: 6,
      content: 'that is it',
      channel_id: '846160866000371753',
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: '2021-05-28T00:06:18.850000+00:00',
      edited_timestamp: null,
      flags: 0,
      components: [],
    },
    {
      id: '847624201682812958',
      type: 0,
      content:
        'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello',
      channel_id: '846160866000371753',
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: true,
      mention_everyone: false,
      tts: false,
      timestamp: '2021-05-27T23:55:57.777000+00:00',
      edited_timestamp: null,
      flags: 0,
      components: [],
    },
  ];

  const FindMessage = (id) => {
    const msg = m.find((message) => message.id === id);
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
        messages={m}
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
});

const mapDispatchToProps = (dispatch) => ({
  getConnections: () => dispatch(startGetConnections()),
  getChannels: () => dispatch(actions.startGetChannels()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
