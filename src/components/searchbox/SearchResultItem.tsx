import React from "react";

type Props = {
  poster: string;
  title: string;
  year: number;
  id: string;
  onSelected(id: string, poster: string): void;
};

const SearchResultItem = ({ poster, title, year, onSelected, id }: Props) => {
  return (
    <div className="" onClick={() => onSelected(id, poster)}>
      {title} {year}
      <img src={poster} />
    </div>
  );
};

export default SearchResultItem;
