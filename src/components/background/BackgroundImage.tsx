import React, { useEffect, useState } from "react";

type Props = {
  posters?: Array<string>;
  className?: string;
};

const backgroundImageFac = (posters: Array<string>) => {
  const result = [];
  for (const poster of posters) {
    const style = {
      backgroundImage: `url(${poster})`,
      backgroundSize: "cover",
      flexBasis: `${(1 / posters.length) * 100}%`,
      opacity: 0.3,
      minWidth: "33%",
    };

    result.push(<div style={style} />);
  }

  return result;
};

const BackgroundImage = ({ posters, className }: Props) => {
  return (
    <div
      className={`flex flex-row w-full h-full flex-wrap justify-center ${className}`}
    >
      {posters ? backgroundImageFac(posters) : null}
    </div>
  );
};

export default BackgroundImage;
