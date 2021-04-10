import React from "react";
import { useState, useRef } from "react";
import {
  Popover,
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

const WebhookQueue = ({ queue, visible, setVisible }) => {
  const dataNames = ["Type", "Created At", "Size", "Scenarios", ""];
  const [openDetails, setOpenDetails] = useState(null);
  const details = useRef(null);
  // const openMsgDetails = () => {
  //   const data = '{key: 1, value: "value"}';
  //   return data;
  // };
  return (
    <Dialog
      // disableBackdropClick
      className="queue-window"
      open={visible}
      onClose={() => setVisible(false)}
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
                  <TableCell align="center">
                    <Popover
                      open={Boolean(openDetails)}
                      anchorEl={openDetails}
                      onClose={() => setOpenDetails(null)}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                    >
                      <div style={{ padding: "10px" }}>
                        key: 1, value: "value"
                      </div>
                    </Popover>
                    <Button
                      variant="contained"
                      onClick={(e) => setOpenDetails(e.currentTarget)}
                      ref={details}
                      color="primary"
                    >
                      Details
                    </Button>
                  </TableCell>
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
