import React from "react";

type Props = {
  poster: string;
  title: string;
  year: number;
};

const SearchResultItem = ({ poster, title, year }: Props) => {
  return (
    <div>
      {title} {year}
      <img src={poster} />
    </div>
  );
};

export default SearchResultItem;
