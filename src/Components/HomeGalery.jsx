import React from "react";
import styled from "styled-components";
import { recomends } from "../data/Recomends";
import "../styles/Styles.scss";
import { HomeGaleryRecomends } from "./HomeGaleryRecomends";

const H1 = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const HomeGalery = () => {
  return (
    <div className="HomeGalery">
      <H1>Nuestras Recomendaciones</H1>
      <HomeGaleryRecomends recomends={recomends} />
    </div>
  );
};
