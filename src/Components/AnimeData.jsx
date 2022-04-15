import React, { useEffect, useState } from 'react'
import { Animes } from '../Pages/Animes';
import {helpHttp} from './helpers/helphttp';

export const AnimeData = () => {

  const [AnimeData, setAnimeData] = useState([]);
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let AnimeById = `https://api.jikan.moe/v4/top/anime`;
      const Data = await Promise.resolve(helpHttp().get(AnimeById));
      setAnimeData(Data);
      setCondition(true);
    };
    fetchData();
  }, []);

  return (
    <Animes AnimeData={AnimeData}  condition={condition}/>
  )
}
