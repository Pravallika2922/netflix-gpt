import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    showGpt: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGpt = !state.showGpt;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieResults = movieResults;
      state.movieNames = movieNames;
    },
  },
});

export default gptSearchSlice.reducer;
export const { toggleGptSearch, addGptMovieResult } = gptSearchSlice.actions;
