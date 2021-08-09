import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { startGetConnections } from '../../../../actions/connections';
import * as actions from '../../../../actions/discord';
import ServiceForm from '../../../PopoverForm';
import ConnectionField from '../ConnectionField';
import ChannelField from '../ChannelField';
import AutoSuggestField from '../../../AutoSuggestField';
export function Form({
  id,
  data,
  connections,
  channels,
  editElement,
  setAnchorEl,
  getChannels,
  getConnections,
}) {
  const [info, setInfo] = useState({
    name: data.name || '',
    connection: data.connection || '',
    channelId: data.channelId || '',
    content: data.content || '',
  });

  const [connectionLoading, setConnectionLoading] = useState(true);
  const [channelLoading, setChannelLoading] = useState(true);

  useEffect(() => {
    if (info.connection)
      getChannels(info.connection).then(() => {
        setChannelLoading(false);
      });
  }, [info.connection, getChannels]);

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

  const handleContentChange = (value) => {
    setInfo((prev) => ({
      ...prev,
      content: value,
    }));
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

  const reloadChannels = () => {
    setChannelLoading(true);
    getChannels(info.connection).then(() => {
      setChannelLoading(false);
    });
  };

  let disabledSave =
    !info['connection'] || !info['channelId'] || !info['content'];

  return (
    <ServiceForm
      className="discord-forms"
      title="Post a message"
      disabledSave={disabledSave}
      handleSave={handleSave}
      handleCancel={handleCancel}
    >
      <TextField
        name="name"
        className="text-field"
        label="Name"
        variant="outlined"
        size="small"
        value={info['name']}
        onChange={handleChange}
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

      <AutoSuggestField
        class="text-field"
        ancestors={data.ancestors}
        onChange={handleContentChange}
        label="Content"
        name="content"
        value={info['content']}
        variant="outlined"
        size="small"
        multiline
        fullWidth
        rowsMax={5}
      />

      {/* <TextField
        multiline
        rowsMax={5}
        name="content"
        className="text-field"
        label="Content"
        variant="outlined"
        size="small"
        value={info['content']}
        onChange={handleChange}
      /> */}
    </ServiceForm>
  );
}
const mapStateToProps = (state) => ({
  connections: state.connections.filter((c) => c.type === 'discords'),
  channels: state.discord.channels,
});

const mapDispatchToProps = (dispatch) => ({
  getConnections: () => dispatch(startGetConnections()),
  getChannels: (guildId) => dispatch(actions.startGetChannels(guildId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
