import React from "react";
import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const length = movies?.length;
  let random = Math.floor(Math.random() * length);
  if (movies === null) return;
  const mainMovie = movies[random];
  return (
    <div>
      <VideoTitle title={mainMovie.title} overview={mainMovie.overview} />
      <VideoBackGround id={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
