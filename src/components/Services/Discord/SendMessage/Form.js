import React, { useState, useLayoutEffect } from 'react';
import { MenuItem, IconButton, TextField } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';
import { connect } from 'react-redux';
import { startGetConnections } from '../../../../actions/connections';
import * as actions from '../../../../actions/discord';
import ServiceForm from '../../../PopoverForm';
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
    connection: data.connection || '',
    channelId: data.channelId || '',
    content: data.content || '',
  });

  const [guildId, setGuildId] = useState('');

  useLayoutEffect(() => {
    if (guildId) getChannels(guildId);
  }, [guildId, getChannels]);

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

  let disabledSave = !info['channelId'] || !info['content'];

  return (
    <ServiceForm
      className="discord-forms"
      title="Post a message"
      disabledSave={disabledSave}
      handleSave={handleSave}
      handleCancel={handleCancel}
    >
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
        multiline
        rowsMax={5}
        name="content"
        className="text-field"
        label="Content"
        variant="outlined"
        size="small"
        value={info['content']}
        onChange={handleChange}
      />
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
