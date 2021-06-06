import React, { useState, useLayoutEffect } from 'react';
import { MenuItem, Button, TextField, IconButton } from '@material-ui/core';
import { Refresh, Search } from '@material-ui/icons';
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
  });

  const [guildId, setGuildId] = useState('');
  const [channelLoading, setChannelLoading] = useState(true);
  const [message, setMessage] = useState({
    component: '',
    loading: true,
    anchor: null,
    error: false,
  });

  useLayoutEffect(() => {
    if (guildId)
      getChannels(guildId).then(() => {
        setChannelLoading(false);
      });
  }, [guildId, getChannels]);

  useLayoutEffect(() => {
    if (info.channelId)
      getMessages(info.channelId).then(() => {
        setMessage((prev) => ({ ...prev, loading: false }));
      });
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

  const openMessageList = (e) => {
    setMessage((prev) => ({ ...prev, anchor: e.currentTarget }));
  };

  let disabledSave = !info['messageId'] || !info['channelId'];

  const findMessage = (id) => {
    const msg = messages.find((message) => message.id === id);
    setMessage((prev) => ({ ...prev, component: msg }));
    if (!msg) setMessage((prev) => ({ ...prev, error: true }));
    else setMessage((prev) => ({ ...prev, error: false }));
  };

  const saveMessageId = (messageId) => {
    setInfo((prev) => ({ ...prev, messageId: messageId }));
    findMessage(messageId);
  };

  return (
    <ServiceForm
      className="discord-forms"
      title="Pin a message"
      disabledSave={disabledSave}
      handleSave={handleSave}
      handleCancel={handleCancel}
    >
      <MessageList
        messages={messages}
        anchor={message.anchor}
        setAnchor={(change) =>
          setMessage((prev) => ({ ...prev, anchor: change }))
        }
        value={info['messageId']}
        handleSave={saveMessageId}
      />

      <div className="channel-field">
        {channelLoading ? (
          <TextField
            disabled
            className="text-field"
            size="small"
            label="Channel"
            value="Loading..."
            variant="outlined"
          />
        ) : (
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
        )}

        <IconButton
          name="refreshChannels"
          size="small"
          className="add-icon"
          onClick={() => {
            setChannelLoading(true);
            getChannels().then(() => {
              setChannelLoading(false);
            });
          }}
          disabled={channelLoading}
        >
          <Refresh />
        </IconButton>
      </div>

      {info['channelId'] && !message.loading && (
        <div>
          <div className="channel-field">
            <TextField
              name="messageId"
              className="text-field"
              size="small"
              label="Message Id"
              value={info['messageId']}
              onChange={handleChange}
              variant="outlined"
              helperText={message.error && 'Unable to find the message.'}
              error={message.error}
            />
            <IconButton
              name="refreshChannels"
              size="small"
              className="add-icon"
              onClick={() => findMessage(info['messageId'])}
              disabled={message.loading}
            >
              <Search />
            </IconButton>
          </div>
          <Button size="small" color="primary" onClick={openMessageList}>
            or choose from the list.
          </Button>
        </div>
      )}

      {info['messageId'] && !!message.component && (
        <Message message={message.component} />
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
