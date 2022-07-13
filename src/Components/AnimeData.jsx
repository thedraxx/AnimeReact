import React, { useEffect, useState } from "react";
import { Animes } from "../Pages/MostPopulars/Animes";
import { helpHttp } from "../helpers/helphttp";
import { Loader } from "./Loader";

export const AnimeData = () => {
  const [AnimeData, setAnimeData] = useState([]);
  const [condition, setCondition] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setCondition(false);
      let AnimeById = `https://api.jikan.moe/v4/top/anime`;
      const Data = await Promise.resolve(helpHttp().get(AnimeById));
      setAnimeData(Data);
      setCondition(true);
    };
    fetchData();
  }, []);

  return (
    <>
      {AnimeData.length === 0 || AnimeData === null ? (
        <Loader />
      ) : (
        <Animes AnimeData={AnimeData} condition={condition} />
      )}
    </>
  );
};
