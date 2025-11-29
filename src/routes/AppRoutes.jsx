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
import Goals from '../pages/Goals';
import FormNewGoal from '../components/forms/NewGoal';
import FormEditarGoal from '../components/forms/EditGoal';
import Insights from '../pages/Inshigths';
import Settings from '../pages/Settings';
import Profile from '../pages/sub/Profile';
import FormEditProfile from '../components/forms/EditProfile';
import Categories from '../pages/sub/Categories';
import FormNewCategory from '../components/forms/Newcategory'; 
import FormEditCategory from '../components/forms/EditCategory';


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
        <Route path='/goals' element={<Goals/>}/>
        <Route path='/new-goal' element={<FormNewGoal/>}/>
        <Route path='/edit-goal/:id' element={<FormEditarGoal/>}/>
        <Route path='/insights' element={<Insights/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='settings/profile' element={<Profile/>}/>
        <Route path='/settings/profile/edit-perfil' element={<FormEditProfile/>}/>
        <Route path='/settings/categories' element={<Categories/>}/>
        <Route path="/settings/categories/new-category" element={<FormNewCategory />} />
        <Route path="/settings/categories/edit/:id" element={<FormEditCategory />} />
        {/* ... */}
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;