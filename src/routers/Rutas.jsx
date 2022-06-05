import React from "react";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import { PrincipalScreen } from "../Components/PrincipalScreen";
import { Login } from "../Pages/Login";

export const Rutas = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<PrincipalScreen />} />
        </Routes>
      </HashRouter>
    </div>
  );
};
