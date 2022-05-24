import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { PrincipalScreen } from "./PrincipalScreen";

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
