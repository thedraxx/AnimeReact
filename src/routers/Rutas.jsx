import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrincipalScreen } from "../Components/PrincipalScreen";
import { Login } from "../Pages/Login";

export const Rutas = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<PrincipalScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
