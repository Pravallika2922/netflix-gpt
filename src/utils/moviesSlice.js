import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addToNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopular: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});
export default moviesSlice.reducer;
export const {
  addToNowPlayingMovies,
  addTrailerVideo,
  addPopular,
  addUpcoming,
} = moviesSlice.actions;
