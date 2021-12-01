import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/admin/login';
import RecoveryPass from '../pages/admin/pass_recovery';
import Layout from '../pages/admin/dashboard/';
import Home from '../pages/admin/dashboard/home';
import Stock from '../pages/admin/dashboard/stock';
import Employees from '../pages/admin/dashboard/employees';
import Sales from '../pages/admin/dashboard/sales';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/entrar" element={<Login />} />
      <Route path="/recuperar-senha" element={<RecoveryPass />} />
      <Route path="/admin" element={<Layout />}>
        <Route path="inicio" element={<Home />} />
        <Route path="estoque" element={<Stock />} />
        <Route path="funcionarios" element={<Employees />} />
        <Route path="vendas" element={<Sales />} />
      </Route>
    </Routes>
  );
}
