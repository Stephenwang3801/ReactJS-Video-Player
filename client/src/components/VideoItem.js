import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

/* Individual Videos on the right side recommended list */
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ marginRight: "10px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
          width="50%"
        />
        <Typography variant="subtitle1" width="50%">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
