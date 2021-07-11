import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
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
  TableRow,
} from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';
import { startGetWebhookHistory } from '../../actions/webhooks';
import QueueDetails from './QueueDetails';
import NoItem from '../Static/NoItem';
import ListLoader from '../Loaders/ListLoader';
const WebhookQueue = ({ id, visible, setVisible, getWebhookHistory }) => {
  const dataNames = ['Type', 'Created At', ''];
  const [openDetails, setOpenDetails] = useState(null);
  const [openHistory, setOpenHistory] = useState(-1);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (visible) {
      getWebhookHistory(id).then((res) => {
        setLoading(false);
        try {
          setHistory(
            res
              .filter((r) => r.Service.data.webhook.id === id)
              .flatMap((r) => r.Messages)
          );
        } catch (err) {}
      });
    }
  }, [id, visible, getWebhookHistory]);

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

  function QueueRow(row, index) {
    return (
      <TableRow role="queuerow" key={index}>
        <TableCell align="center" component="th" scope="row">
          {row.type}
        </TableCell>
        <TableCell align="center">{formatDate(row.created_at)}</TableCell>
        <TableCell align="center">
          <Popover
            open={openHistory === index}
            anchorEl={openDetails}
            onClose={() => {
              setOpenDetails(null);
              setOpenHistory(-1);
            }}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <QueueDetails context={row.context} type={row.type} />
          </Popover>
          <Button
            id={index}
            variant="contained"
            onClick={(e) => {
              setOpenDetails(e.currentTarget);
              setOpenHistory(index);
            }}
            color="primary"
          >
            Details
          </Button>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <Dialog open={visible} onClose={() => setVisible(false)}>
      <DialogTitle disableTypography={true}>
        <Typography variant="h5">Incoming Messages</Typography>
      </DialogTitle>
      <DialogContent
        className={clsx(
          'queue-window',
          (loading || !history.length) && 'disable-scroll'
        )}
      >
        <CloseRounded
          className="close-icon"
          onClick={() => setVisible(false)}
        />
        {loading ? (
          <ListLoader />
        ) : !history.length ? (
          <NoItem />
        ) : (
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
                {history.map((row, index) => QueueRow(row, index))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getWebhookHistory: (id) => dispatch(startGetWebhookHistory(id)),
});

export default connect(null, mapDispatchToProps)(WebhookQueue);
