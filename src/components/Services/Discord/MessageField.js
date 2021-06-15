import React from 'react';
import { Typography, Button, TextField, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';

export default function ConnectionField({
  length,
  message,
  messageId,
  messages,
  findMessage,
  openMessageList,
  handleChange,
}) {
  return (
    !message.loading &&
    (length ? (
      <div>
        <div className="channel-field">
          <TextField
            name="messageId"
            className="text-field"
            size="small"
            label="Message Id"
            value={messageId}
            onChange={handleChange}
            variant="outlined"
            helperText={message.error && 'Unable to find the message.'}
            error={message.error}
          />
          <IconButton
            name="refreshChannels"
            size="small"
            className="add-icon"
            onClick={findMessage}
            disabled={message.loading}
          >
            <Search />
          </IconButton>
        </div>
        <Button size="small" color="primary" onClick={openMessageList}>
          or choose from the list.
        </Button>
      </div>
    ) : (
      <Typography variant="body1" color="primary">
        This channel is empty. Choose another channel.
      </Typography>
    ))
  );
}
