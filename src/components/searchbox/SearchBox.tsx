import React, { useEffect, useState } from "react";
import { SearchResult } from "../../types";
import { fetchSearchList } from "../../utils";
import SearchResultItem from "./SearchResultItem";

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState<string>();
  const [searchResultList, setSearchResultList] =
    useState<Array<SearchResult>>();

  useEffect(() => {
    if (searchInput) {
      fetchSearchList(searchInput)
        .then((res) => {
          setSearchResultList(res.data.Search);
        })
        .catch((err) => console.log(err));
    }
  }, [searchInput]);

  console.log(searchResultList);

  return (
    <div className="w-full flex flex-row my-4">
      <input
        type="text"
        className="bg-red border-2 border-black m-auto"
        onChange={(event) => setSearchInput(event.target.value)}
      />
      {searchResultList
        ? searchResultList.map((searchResultItem) => (
            <SearchResultItem
              key={searchResultItem.imdbID}
              poster={searchResultItem.Poster}
              title={searchResultItem.Title}
              year={searchResultItem.Year}
            />
          ))
        : null}
    </div>
  );
};

export default SearchBox;
