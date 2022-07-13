import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { SearchRecomendbyId } from "../../Components/SearchRecomendbyId";
import "../../styles/Recomends.scss";

export const Recomends = () => {
  //Recibe el Id proveniente de la URL (HomeGaleryRecomends)
  const { recomendsid } = useParams();

  // Gracias al ID que se obtiene de useParams llama a esta funcion que retorna el componente que se busca
  const animeRecomend = SearchRecomendbyId(recomendsid);

  return (
    <div className="ContainerRecomends">
      <img className="img-recomend" src={animeRecomend.src} alt="" />

      <div className="divinfo">
        <div className="divinfo-title">
          <h1>{animeRecomend.name}</h1>
          <h2>
            {animeRecomend.synopsis.length > 50
              ? animeRecomend.synopsis.substring(0, 600) + "..."
              : animeRecomend.synopsis}
          </h2>

          <div className="container-buttons">
            {animeRecomend.Genero.map((genre) => {
              return <span className="button">{genre}</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
