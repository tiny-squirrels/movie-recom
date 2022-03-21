import React, { useEffect, useState } from "react";

const importAll = (r: any) => {
  return r.keys().map(r);
};

const images = importAll(
  require.context("../../../public/images", false, /\.(png|jpe?g|svg)$/)
);

const DefaultBackground = () => {
  const [currImage, setCurrImage] = useState();
  const [prevImage, setPrevImage] = useState();
  const [changeBackground, setChangeBackground] = useState<boolean>(true);

  useEffect(() => {
    const random = Math.ceil(Math.random() * images.length - 1);
    setCurrImage(images[random]);
    setChangeBackground(!changeBackground);
  }, []);

  useEffect(() => {
    const _timeout = setTimeout(() => {
      const random = Math.ceil(Math.random() * images.length - 1);
      return [
        setPrevImage(currImage),
        setCurrImage(images[random]),
        setChangeBackground(!changeBackground),
      ];
    }, 3000);
    return () => clearTimeout(_timeout);
  }, [changeBackground]);

  return (
    <>
      <div
        className={`transition-all h-0`}
        style={{
          background: `url(${prevImage}) no-repeat center center fixed`,
          backgroundSize: "cover",
        }}
      />
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 min-h-screen transition-all`}
        style={{
          background: `url(${currImage}) no-repeat center center fixed`,
          backgroundSize: "100% 100%",
        }}
      />
    </>
  );
};

export default DefaultBackground;
