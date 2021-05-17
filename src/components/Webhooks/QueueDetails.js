import React, { useEffect } from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import ReactJson from 'react-json-view';

const QueueDetails = ({ data }) => {
  //   const dataNames = ;
  useEffect(() => {
    console.log(data);
  }, [data]);

  const CopyToClipboard = (data) => {
    navigator.clipboard.writeText(data);
  };

  return (
    <div className="wh-queue-details">
      <Typography variant="h6">Data</Typography>
      <div className="details">
        <Card variant="outlined">
          <CardContent className="wh-json-data">
            <ReactJson
              src={data}
              name={false}
              enableClipboard={(copy) => {
                console.log(copy);
                CopyToClipboard(JSON.stringify(copy.src));
              }}
            />
          </CardContent>
        </Card>

        {/* {Object.keys(data).length ? (
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
        )} */}
      </div>
    </div>
  );
};

export default QueueDetails;
