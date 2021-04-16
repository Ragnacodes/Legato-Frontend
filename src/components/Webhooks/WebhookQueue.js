import React, { useState } from 'react';
import {
  Popover,
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';
import { CloseRounded }  from "@material-ui/icons";
import QueueDetails from './QueueDetails';

const WebhookQueue = ({ queue, visible, setVisible }) => {
  const dataNames = ["Type", "Created At", "Size", "Scenarios", ""];
  function QueueRow(row) {

    const [openDetails, setOpenDetails] = useState(null);
    return (
      <TableRow role="queuerow" key={row.id}>
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
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <QueueDetails data={row.data} />
          </Popover>
          <Button
            id={row.id}
            variant="contained"
            onClick={(e) => setOpenDetails(e.currentTarget)}
            color="primary"
          >
            Details
          </Button>
        </TableCell>
      </TableRow>
    );
  }
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
        <CloseRounded
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
            <TableBody>{queue.map((row) => QueueRow(row))}</TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default WebhookQueue;
