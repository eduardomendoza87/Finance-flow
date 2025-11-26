// src/components/layout/LandingLayout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-main">
      <Navbar />
      {/* El contenido de la página */}
      <main className="grow">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default LandingLayout;