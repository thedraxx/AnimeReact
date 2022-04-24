import React, { useEffect, useState } from 'react'
import { Animes } from '../Pages/Animes';
import {helpHttp} from './helpers/helphttp';

export const RandomAnime = ({setDataRandom,number,setLoad}) => {

  const [condition, setCondition] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setCondition(false);
      let AnimeById = `https://api.jikan.moe/v4/anime/${number}`;
      const Data = await Promise.resolve(helpHttp().get(AnimeById));
      setDataRandom(Data);
      setCondition(true);
      setLoad(false);
    };
    fetchData();
  }, []);

  return (
    <>
    </>
  )
}
