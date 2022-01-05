import React from "react";
import { Paper, Typography, Box } from "@material-ui/core";

/* Main video component */
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }
  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
  return (
    <React.Fragment>
      <Paper elevation={6}>
        <Box style={{ paddingBottom: "56.25%", position: "relative" }}>
          <iframe
            frameBorder="0"
            height="100%"
            width="100%"
            title="Video Player"
            src={videoSrc}
            style={{ position: "absolute" }}
          />
        </Box>
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h6">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetail;
