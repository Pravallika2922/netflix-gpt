import { API_OPTIONS, API_NOWPLAYING_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addToNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMoviesList = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(API_NOWPLAYING_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addToNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useMoviesList;
