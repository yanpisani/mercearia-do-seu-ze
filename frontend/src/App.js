import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Login from './components/admin/login'

export default function App() {
  return (
      <div className={`app`}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/entrar' element={<Login />} />
        </Routes>
      </div>
  );
}