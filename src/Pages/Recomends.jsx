import React from "react";
import { useParams } from "react-router-dom";
import { SearchRecomendbyId } from "../Components/SearchRecomendbyId";

export const Recomends = () => {
  //Recibe el Id proveniente de la URL (HomeGaleryRecomends)
  const { recomendsid } = useParams();

  // Gracias al ID que se obtiene de useParams llama a esta funcion que retorna el componente que se busca
  const animeRecomend = SearchRecomendbyId(recomendsid);

  return (
    <div>
      <h1>{animeRecomend.name}</h1>
    </div>
  );
};
