import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import Error from "../components/Error";
import { API_OPTIONS, SEARCH_TMDB_API } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSearchSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store?.config?.language);

  const searchText = useRef(null);
  const searchTmdb = async (movie) => {
    const data = await fetch(SEARCH_TMDB_API + movie, API_OPTIONS);
    const json = await data.json();
    return json.results;
  };
  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ".only give me names of 5 movies,comma separated like the example result given ahead. Example Result:Gadar, Sholey, Don, Hum Dil De Chuke, Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      <Error />;
    }
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");
    const promiseArray = gptMovies.map((movie) => searchTmdb(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="m-auto pt-20">
      <form
        className="p-6 m-6 bg-black w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 w-1/2"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          ref={searchText}
        />
        <button
          className="py-2 px-4 m-2 text-white bg-red-700"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
