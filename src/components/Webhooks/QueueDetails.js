import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import ReactJson from 'react-json-view';

const QueueDetails = ({ data }) => {
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
                CopyToClipboard(JSON.stringify(copy.src));
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QueueDetails;
