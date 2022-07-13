import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimeData } from "../Components/AnimeData";
import { Favorites } from "../Pages/Favorites";
import { NavBar } from "../Components/Navbar";
import { Animes } from "../Pages/MostPopulars/Animes";
import { Recomends } from "../Pages/MoreInfo/Recomends";
import { HomePage } from "../Pages/HomePage/HomePage";

export const PrincipalScreen = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="animes" element={<AnimeData />} />
        <Route path="animes" element={<Animes />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="recomends/:recomendsid" element={<Recomends />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </>
  );
};
