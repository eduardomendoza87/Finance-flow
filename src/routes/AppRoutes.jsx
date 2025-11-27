import { Routes, Route, Navigate } from 'react-router-dom';

//Layouts
import LandingLayout from '../Layouts/LandingLayout'; 
import MainLayout from '../Layouts/MainLayout';

// Pages publicas
import LandingPage from '../pages/LandingPage';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

//pages privadas
import Home from '../pages/Home';
import RegisterMovement from '../components/forms/Registermovement';
import TransactionHistory from '../pages/Historic';


const AppRoutes = () => {
  return (
    <Routes>
      {/* 1. RUTAS DE MARKETING  */}
      <Route element={<LandingLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
      </Route>
      {/* 3. RUTAS PRIVADAS  */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Home/>} />
        <Route path='/register-movement' element={<RegisterMovement/>}/>
        <Route path='/historic' element={<TransactionHistory/>} />
        {/* ... */}
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;