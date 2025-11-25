// src/components/layout/LandingLayout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const LandingLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-main">
      {/* Navbar Fijo o Absoluto en la parte superior */}
      <Navbar />

      {/* El contenido de la página (Landing, Pricing, etc.) se renderiza aquí */}
      <main className="grow">
        <Outlet />
      </main>

      {/* Footer siempre al final */}
    </div>
  );
};

export default LandingLayout;