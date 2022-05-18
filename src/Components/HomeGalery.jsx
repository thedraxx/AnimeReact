import React from "react";
import styled from "styled-components";
import "../styles/Styles.scss";

const H1 = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;

`;

export const HomeGalery = () => {
  return (
    <div className="HomeGalery">
      <H1>Nuestras Recomendaciones</H1>
      <div className="HomeGalery__container">
        <img
          src="https://i.pinimg.com/originals/3a/f6/59/3af6591bb43de594f289dca8823772a4.jpg"
          alt="dasd"
        />

        <img
          src="https://www.animefagos.com/wp-content/uploads/2018/12/bungostrays301.jpg"
          alt="dassd"
        />

        <img src="https://i.pinimg.com/originals/7f/1f/fe/7f1ffea16bf4ac5c78a216bbe169d4e1.jpg" alt="" />
      
        <img src="https://multianime.com.mx/wp-content/uploads/2020/08/given-pelicula-anime.jpg" alt="" />
      </div>
    </div>
  );
};
