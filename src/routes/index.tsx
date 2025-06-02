import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login';
import SchoolPage from '../pages/School';
import AdminSchools from "../pages/AdminSchools/DashboardSchools";
import Register from "../pages/AdminSchools/Register";


const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SchoolPage />} />
      <Route path="login" element={<LoginPage />}/>
      <Route path="/admin/schools" element={<AdminSchools />} />
      <Route path="/admin/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
