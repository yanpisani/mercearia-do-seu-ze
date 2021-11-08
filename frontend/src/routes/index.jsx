import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/admin/login";
import PassRecovery from "../pages/admin/pass_recovery";

export default function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<Login/>} />
      <Route path="/entrar" element={<Login/>} />
      <Route path="/recuperar-senha" element={<PassRecovery/>} />
      <Route render={() => <Navigate to={{ pathname: "/entrar" }} />} />
    </Routes>
  );
}