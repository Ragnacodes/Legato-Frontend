import React from "react";
import { useEffect } from "react";
import {
  Paper,
  Typography,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const QueueDetails = ({ data }) => {
  //   const dataNames = ;
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className="wh-queue-details">
      <Typography variant="h6">
        <b>Data</b>
      </Typography>
      <div className="details">
        {Object.keys(data).length ? (
          <Paper variant="outlined">
            <Table size="small" aria-label="a dense table">
              <TableBody>
                {Object.keys(data).map((k) => (
                  <TableRow key={k}>
                    <TableCell
                      className="data-key"
                      align="right"
                      component="th"
                      scope="row"
                    >
                      {k}
                    </TableCell>
                    <TableCell align="left">{data[k]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        ) : (
          <Typography variant="caption">(empty)</Typography>
        )}
      </div>
    </div>
  );
};

export default QueueDetails;
