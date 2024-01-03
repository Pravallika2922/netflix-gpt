import { API_OPTIONS, API_POPULAR_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(API_POPULAR_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopular(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
