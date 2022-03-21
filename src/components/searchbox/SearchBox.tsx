import React, { useEffect, useState } from "react";
import { SearchResult } from "../../types";
import { fetchSearchList } from "../../utils";
import BackgroundImage from "../background/BackgroundImage";
import DefaultBackground from "../background/DefaultBackground";
import SelectedMovies from "../selectedMovies/SelectedMovies";
import SearchResultItem from "./SearchResultItem";

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState<string>();
  const [searchResultList, setSearchResultList] =
    useState<Array<SearchResult>>();
  const [selectedIds, setSelectedIds] = useState<Array<string>>();
  const [selectedPosters, setSelectedPosters] = useState<Array<string>>();

  const selectItem = (id: string, poster: string) => {
    setSelectedIds(selectedIds ? [...selectedIds, id] : [id]);
    setSelectedPosters(
      selectedPosters ? [...selectedPosters, poster] : [poster]
    );
  };

  useEffect(() => {
    if (searchInput) {
      fetchSearchList(searchInput)
        .then((res) => {
          setSearchResultList(res.data.Search);
        })
        .catch((err) => console.log(err));
    }
  }, [searchInput]);

  return (
    <div className="relative w-full flex flex-col">
      {selectedPosters ? (
        <BackgroundImage
          className="absolute top-0 left-0 right-0 bottom-0"
          posters={selectedPosters}
        />
      ) : (
        <DefaultBackground />
      )}
      <input
        type="text"
        className="searchBox"
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <div className="flex flex-row z-10">
        {searchResultList
          ? searchResultList.map((searchResultItem) => (
              <SearchResultItem
                id={searchResultItem.imdbID}
                onSelected={selectItem}
                key={searchResultItem.imdbID}
                poster={searchResultItem.Poster}
                title={searchResultItem.Title}
                year={searchResultItem.Year}
              />
            ))
          : null}
      </div>
      {selectedIds ? <SelectedMovies imdbIds={selectedIds} /> : null}
    </div>
  );
};

export default SearchBox;
