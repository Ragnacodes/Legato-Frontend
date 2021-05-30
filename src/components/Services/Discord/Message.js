import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Divider, withStyles } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

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
          {message.content.length < 100
            ? message.content
            : message.content.slice(0, 96) + '...'}
        </Typography>
        <Typography variant="caption" className="message-date">
          {formatDate(message.timestamp)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Message;
