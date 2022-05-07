import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "../Components/Navbar";
import { Animes } from "../Pages/Animes";
import { Error404 } from "../Pages/Error404";
import { HomePage } from "../Pages/HomePage";
import { AnimeData } from "./AnimeData";
import { Favorites } from "../Pages/Favorites";

export const Rutas = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/animes" element={<AnimeData />} />
        <Route path="/animes" element={<Animes />} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};
