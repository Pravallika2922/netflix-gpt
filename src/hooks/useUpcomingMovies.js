import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, API_UPCOMING_URL } from "../utils/constants";
import { addUpcoming } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(API_UPCOMING_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcoming(json.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
