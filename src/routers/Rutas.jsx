import { Route, Routes, HashRouter } from "react-router-dom";
import { Login } from "../Pages/Login";
import { PrincipalScreen } from "./PrincipalScreen";

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
