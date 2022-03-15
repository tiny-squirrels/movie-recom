import axios from "axios";
import { SearchResult } from "./types";

export const fetchSearchList = (
  searchStr: string
): Promise<{
  data: { Response: string; Search: Array<SearchResult>; totalResults: string };
}> => {
  return axios.get(`http://www.omdbapi.com/?s=${searchStr}&apiKey=6d7de5df`);
};
