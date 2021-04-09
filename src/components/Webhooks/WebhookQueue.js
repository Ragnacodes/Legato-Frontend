import React from "react";
import { connect } from "react-redux";
import {
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  Paper,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import HelpIcon from "@material-ui/icons/Help";
import InfoIcon from "@material-ui/icons/Info";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

const WebhookQueue = ({ queue, visible, setVisible }) => {
  const [value, setValue] = React.useState(0);
  const handleClose = () => {};
  const handleSave = () => {};
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // function createData(type, created, size, scenarios, options) {
  //   return { type, created, size, scenarios, options };
  // }

  const dataNames = ["Type", "Created At", "Size", "Scenarios"];

  // const rows = [
  //   createData("Webhook", Date.now(), "6B", 242424),
  //   createData("Webhook", Date.now(), "6B", 242424),
  //   createData("Webhook", Date.now(), "6B", 242424),
  //   createData("Webhook", Date.now(), "6B", 242424),
  // ];

  return (
    <Dialog
      // disableBackdropClick
      className="queue-window"
      open={visible}
      onClose={() => setVisible(false)}
      // maxWidth=""
      fullWidth={true}
    >
      <DialogTitle disableTypography={true}>
        <Typography variant="h5">Incoming Messages</Typography>
      </DialogTitle>
      <DialogContent>
        <CloseRoundedIcon
          className="close-icon"
          onClick={() => setVisible(false)}
        />
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {dataNames.map((dn) => (
                  <TableCell align="center" key={dn}>
                    {dn}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {queue.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="center" component="th" scope="row">
                    {row.type}
                  </TableCell>
                  <TableCell align="center">{row.created_at}</TableCell>
                  <TableCell align="center">{row.size}</TableCell>
                  <TableCell align="center">{row.scenarios}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default WebhookQueue;
