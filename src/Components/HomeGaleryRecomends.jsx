import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const HomeGaleryRecomends = ({ recomends }) => {
  const navigate = useNavigate();

  return (
    <div className="HomeGalery__container">
      {recomends.map((r) => {
        return (
          <img
            key={r.id}
            src={r.src}
            alt={r.name}
            onClick={() => navigate(`/recomends/${r.id}`)} //Envia el ID del anime al que se le dio click a Recomends.jsx
          />
        );
      })}
    </div>
  );
};
