import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

/* Right sidebar component for relevant videos */
const VideoList = ({ videos, onVideoSelect }) => {
  if (!videos) {
    return <div></div>;
  }
  const listOfVideos = videos.map((video, id) => (
    <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />
  ));
  return (
    <Grid container spacing={2}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
