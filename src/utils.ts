import axios from "axios";
import { MovieInfo, SearchResult } from "./types";

export const fetchSearchList = (
  searchStr: string
): Promise<{
  data: { Response: string; Search: Array<SearchResult>; totalResults: string };
}> => {
  return axios.get(`http://www.omdbapi.com/?s=${searchStr}&apiKey=6d7de5df`);
};

export const fetchMovieInfo = (
  imdbId: string
): Promise<{ data: MovieInfo }> => {
  return axios.get(`http://www.omdbapi.com/?i=${imdbId}&apiKey=6d7de5df`);
};

export const sortGenres = (genresArray: Array<string>) => {
  let genres: Array<string> = [];
  genresArray.map((genreStr) => genres.push(...genreStr.split(", ")));
  let result: { [key: string]: number } = {};

  for (const genre of genres) {
    if (Object.keys(result).includes(genre)) result[genre] += 1;
    else result[genre] = 1;
  }

  const frequents = Object.values(result)
    .sort((a, b) => {
      return b - a;
    })
    .slice(0, 3);

  const frequentGenres = [];

  for (const value of frequents) {
    const _res = Object.entries(result).find((genre) => genre[1] === value);
    if (_res) frequentGenres.push(_res[0]);
  }

  return frequentGenres;
};
