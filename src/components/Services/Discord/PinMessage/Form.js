import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { startGetConnections } from '../../../../actions/connections';
import * as actions from '../../../../actions/discord';
import ServiceForm from '../../../PopoverForm';
import MessageList from '../MessageList';
import Message from '../Message';
import ConnectionField from '../ConnectionField';
import ChannelField from '../ChannelField';
import MessageField from '../MessageField';
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

  const [connectionLoading, setConnectionLoading] = useState(true);
  const [channelLoading, setChannelLoading] = useState(true);
  const [message, setMessage] = useState({
    component: '',
    loading: true,
    anchor: null,
    error: false,
  });

  useEffect(() => {
    if (info.connection)
      getChannels(info.connection).then(() => {
        setChannelLoading(false);
      });
  }, [info.connection, getChannels]);

  useEffect(() => {
    if (info.channelId) {
      getMessages(info.channelId).then(() => {
        setMessage((prev) => ({ ...prev, loading: false }));
      });
    }
  }, [info.channelId, getMessages]);

  useEffect(() => {
    getConnections().then(() => {
      setConnectionLoading(false);
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

  const reloadChannels = () => {
    setChannelLoading(true);
    getChannels(info.connection).then(() => {
      setChannelLoading(false);
    });
  };

  let disabledSave =
    !info['connection'] || !info['messageId'] || !info['channelId'];

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

      <ConnectionField
        connection={info['connection']}
        connections={connections}
        connectionLoading={connectionLoading}
        handleChange={handleChange}
      />

      {info['connection'] && (
        <ChannelField
          channel={info['channelId']}
          channels={channels}
          channelLoading={channelLoading}
          handleChange={handleChange}
          reloadChannels={reloadChannels}
        />
      )}

      {info['channelId'] && (
        <MessageField
          length={messages.length}
          message={message}
          messageId={info['messageId']}
          messages={messages}
          findMessage={() => findMessage(info['messageId'])}
          openMessageList={openMessageList}
          handleChange={handleChange}
        />
      )}

      {info['messageId'] && !!message.component && (
        <Message message={message.component} />
      )}
    </ServiceForm>
  );
}
const mapStateToProps = (state) => ({
  connections: state.connections.filter((c) => c.type === 'discords'),
  channels: state.discord.channels,
  messages: state.discord.messages,
});

const mapDispatchToProps = (dispatch) => ({
  getConnections: () => dispatch(startGetConnections()),
  getChannels: (guildId) => dispatch(actions.startGetChannels(guildId)),
  getMessages: (channelId) => dispatch(actions.startGetMessages(channelId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
