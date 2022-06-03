import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { SearchRecomendbyId } from "../Components/SearchRecomendbyId";

//StyledComponents
const ContainerRecomends = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: black;
`;

const BackgroundBlur = styled.div`
  display: flex;
  width: 100%;
  background-image: url(${(props) => props.description});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 600px;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
`;

const ImageRecomend = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 20%;
  z-index: 1;
  position: absolute;
  z-index: 9999;
`;

const DIVINFO = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
`;

const H1 = styled.h1`
  color: white;
  font-size: 1.5rem;
`;
const H2 = styled.h2`
  color: white;
  font-size: 1.3rem;
`;

const RecomendTitle = styled.h1`
  color: white;
  font-size: 2rem;
`;

export const Recomends = () => {
  //Recibe el Id proveniente de la URL (HomeGaleryRecomends)
  const { recomendsid } = useParams();

  // Gracias al ID que se obtiene de useParams llama a esta funcion que retorna el componente que se busca
  const animeRecomend = SearchRecomendbyId(recomendsid);
  return (
    <ContainerRecomends>
      <BackgroundBlur description={animeRecomend.src}></BackgroundBlur>
      <ImageRecomend src={animeRecomend.src} alt={animeRecomend.name} />

      <DIVINFO>
        <RecomendTitle>Nuestras Recomendaciones:</RecomendTitle>
        <H1>{animeRecomend.name}</H1>
        <H2>{animeRecomend.synopsis}</H2>
      </DIVINFO>
    </ContainerRecomends>
  );
};
