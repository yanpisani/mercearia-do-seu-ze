import React from "react";
import { Routes, Route} from "react-router-dom";
import Login from "../pages/admin/login";
import Layout from "../pages/admin/dashboard/";
import Home from "../pages/admin/dashboard/home";
import Stock from "../pages/admin/dashboard/stock";

export default function Router() {
  return (
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Layout />}>
              <Route path="inicio" element={<Home />} />
              <Route path="estoque" element={<Stock />} />
          </Route>
      </Routes>
  );
}