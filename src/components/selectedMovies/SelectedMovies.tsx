import React from "react";
import MovieCard from "./MovieCard";

type Props = {
  imdbIds: Array<string>;
};

const SelectedMovies = ({ imdbIds }: Props) => {
  return (
    <div>
      {imdbIds.map((id) => (
        <MovieCard key={id} imdbId={id} />
      ))}
    </div>
  );
};

export default SelectedMovies;
