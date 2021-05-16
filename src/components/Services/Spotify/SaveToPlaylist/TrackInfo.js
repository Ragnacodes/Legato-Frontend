import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export function TrackInfo({ track }) {
  return (
    <Card variant="outlined">
      <CardContent className="track-info">
        <img src={track.album.images[0].url} alt="track's album cover" />
        <div className="info">
          <div>
            <Typography className="name" variant="h6" component="h2">
              {track.name}
            </Typography>

            <Typography
              className="artists"
              variant="body2"
              color="textSecondary"
            >
              {track.artists.map((a) => a.name).join(', ')}
            </Typography>
          </div>
          <div>
            <Typography className="album" variant="body1">
              {track.album.name}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TrackInfo;
