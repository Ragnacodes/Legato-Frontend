import React from 'react';
import { Card, CardContent, Typography, Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
export function Message({ message }) {
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

  return (
    <Card className="message-card" variant="outlined">
      <CardContent className="message" value={message.id}>
        <Typography variant="body1" className="message-content">
          {message.pinned && (
            <Box mr={1} display="inline-block">
              <FontAwesomeIcon icon={faThumbtack} />
            </Box>
          )}

          {message.content &&
            (message.content.length < 100
              ? message.content
              : message.content.slice(0, 96) + '...')}
        </Typography>
        {message['timestamp'] && (
          <Typography variant="caption" className="message-date">
            {formatDate(message.timestamp)}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default Message;
