import React, { useState } from 'react';
import { Typography, Popover, withStyles, Box } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import PopoverForm from '../../PopoverForm';
export function MessageList({
  anchor,
  setAnchor,
  messages,
  value,
  handleSave,
}) {
  const formatDate = (timestamp) => {
    const dateObject = new Date(timestamp);
    const date = dateObject.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    const time = dateObject.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    return `${date} ${time}`;
  };

  const StyledToggleButton = withStyles(() => ({
    root: {
      color: 'unset',
      textTransform: 'none',
      fontSize: 'unset',
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      alignItems: 'flex-start',
    },
  }))(ToggleButton);

  const [message, setMessage] = useState(value);

  const handleClose = () => {
    setAnchor(null);
  };

  const handleChange = (e, newValue) => {
    console.log(messages);
    setMessage(newValue);
  };
  return (
    <Popover
      open={Boolean(anchor)}
      anchorEl={anchor}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <PopoverForm
        title="Message List"
        handleCancel={handleClose}
        handleSave={() => {
          handleSave(message);
          setAnchor(null);
        }}
        disabledSave={!message}
      >
        <ToggleButtonGroup
          name="messageId"
          className="messages-list"
          orientation="vertical"
          exclusive
          onChange={handleChange}
          value={message}
          aria-label="text alignment"
        >
          {messages.map((message, index) => (
            <StyledToggleButton
              className="message"
              key={index}
              value={message.id}
              aria-label={message.id}
            >
              <Typography variant="body1" className="message-content">
                {message.pinned && (
                  <Box mr={1} display="inline-block">
                    <FontAwesomeIcon icon={faThumbtack} />
                  </Box>
                )}
                {message.content && message.content.length < 100
                  ? message.content
                  : message.content.slice(0, 96) + '...'}
              </Typography>
              <Typography variant="caption" className="message-date">
                {message.timestamp && formatDate(message.timestamp)}
              </Typography>
            </StyledToggleButton>
          ))}
        </ToggleButtonGroup>
      </PopoverForm>
    </Popover>
  );
}

export default MessageList;
