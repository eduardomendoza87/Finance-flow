import { Routes, Route, Navigate } from 'react-router-dom';

//Layouts
import LandingLayout from '../Layouts/LandingLayout'; 
import MainLayout from '../Layouts/MainLayout';

// Pages
import LandingPage from '../pages/LandingPage';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';


const AppRoutes = () => {
  return (
    <Routes>
      {/* 1. RUTAS DE MARKETING (Con Navbar y Footer) */}
      <Route element={<LandingLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
      </Route>
      {/* 3. RUTAS PRIVADAS (Con Sidebar) */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        {/* ... */}
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;