import React from 'react';
import Notification from 'rc-notification';
import { Alert } from '@material-ui/lab';
import { CloseRounded } from '@material-ui/icons';

let notification = null;
Notification.newInstance({}, (n) => (notification = n));
export default notification;

export function successNotification(text) {
  notification.notice({
    closable: true,
    duration: 3,
    content: (
      <Alert variant="filled" severity="success">
        {text}
      </Alert>
    ),
    className: "success",
    closeIcon: <CloseRounded />,
  });
}

export function errorNotification(text) {
  notification.notice({
    closable: true,
    duration: 3,
    content: (
      <Alert variant="filled" severity="error">
        {text}
      </Alert>
    ),
    className: "error",
    closeIcon: <CloseRounded />,
  });
}
