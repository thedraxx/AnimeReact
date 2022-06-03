import React from "react";
import { useNavigate } from "react-router-dom";

export const HomeGaleryRecomends = ({ recomends }) => {
  const navigate = useNavigate();

  return (
    <div className="HomeGalery__container">
      {recomends.map((recomend) => {
        return (
          <img
            key={recomend.id}
            src={recomend.src}
            alt={recomend.name}
            onClick={() => navigate(`/recomends/${recomend.id}`)} //Envia el ID del anime al que se le dio click a Recomends.jsx
          />
        );
      })}
    </div>
  );
};
