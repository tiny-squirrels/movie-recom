import React from "react";

type Props = {
  imdbId: string;
};

const MovieCard = ({ imdbId }: Props) => {
  return <div className="text-red-700 text-4xl">{imdbId}</div>;
};

export default MovieCard;
