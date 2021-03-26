import React from "react";
import Notification from "rc-notification";
import "rc-notification/assets/index.css";
import Alert from "@material-ui/lab/Alert";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

let notification = null;
Notification.newInstance({}, (n) => (notification = n));
export default notification;

export function successNotification(text) {
  notification.notice({
    closable: true,
    duration: null,
    content: (
      <Alert variant="filled" severity="success">
        {text}
      </Alert>
    ),
    className: "success",
    closeIcon: <CloseRoundedIcon />,
  });
}

export function errorNotification(text) {
  notification.notice({
    closable: true,
    duration: null,
    content: (
      <Alert variant="filled" severity="error">
        {text}
      </Alert>
    ),
    className: "error",
    closeIcon: <CloseRoundedIcon />,
  });
}
