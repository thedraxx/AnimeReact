import React, { useEffect } from 'react'
import {helpHttp, helphttp} from './helpers/helphttp';

export const AnimeData = () => {


  useEffect(() => {
    const fetchData = async () => {
      let AnimeById = `https://api.jikan.moe/v4/anime/100`;
      const AnimeData = await Promise.resolve(helpHttp().get(AnimeById));
      console.log(AnimeData);

    };

    fetchData();
  }, []);


  return (
    <div><h1>Anime</h1></div>
    
  )
}
