import React, { useEffect, useState } from "react";
import { Animes } from "../Pages/Animes";
import { helpHttp } from "../helpers/helphttp";

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
      {AnimeData.length === 0 ? (
        console.log("esta vacio")
      ) : (
        <Animes AnimeData={AnimeData} condition={condition} />
      )}
    </>
  );
};
