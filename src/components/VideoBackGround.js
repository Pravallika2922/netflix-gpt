import React from "react";
import useVideoTrailer from "../hooks/useVideoTrailer";
import { useSelector } from "react-redux";

const VideoBackGround = ({ id }) => {
  useVideoTrailer(id);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div className="w-screen relative">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
