import { Routes, Route, Navigate } from 'react-router-dom';

//Layouts
import LandingLayout from '../Layouts/LandingLayout'; 
import MainLayout from '../Layouts/MainLayout';

// Pages
import LandingPage from '../pages/LandingPage';


const AppRoutes = () => {
  return (
    <Routes>
      {/* 1. RUTAS DE MARKETING (Con Navbar y Footer) */}
      <Route element={<LandingLayout />}>
        <Route path="/" element={<LandingPage />} />
        {/* Aquí pondrías /terms, /privacy en el futuro */}
      </Route>

      {/* 2. RUTAS DE AUTH (Limpias, sin Layout o con uno centrado) */}
      <Route path="/login" element={<div>Login Page</div>} />
      <Route path="/register" element={<div>Register Page</div>} />

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