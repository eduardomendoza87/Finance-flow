import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Importamos useLocation
import {
  Menu,
  Home,
  BarChart3,
  Target,
  LineChart,
  Settings,
  User,
  PlusCircle,
  ChevronLeft
} from "lucide-react";
import logo from "../assets/logo_finance_flow.png"; // Ajusta la ruta si es necesario

// 1. AGREGA LAS RUTAS AQUI
const menuItems = [
  { icon: Home, label: "Inicio", path: "/dashboard" },
  { icon: BarChart3, label: "Historial", path: "/historic" },
  { icon: Target, label: "Metas", path: "/goals" },
  { icon: LineChart, label: "Insights", path: "/insights" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const location = useLocation(); // Hook para saber en qué ruta estamos

  return (
    <nav
      className={`
        h-screen flex flex-col border-r border-border bg-surface text-text-main transition-all duration-300
        ${open ? "w-64" : "w-20"}
      `}
    >
      {/* --- HEADER --- */}
      <div className="flex items-center justify-between p-4 h-16 border-b border-border/50">
        <div className={`flex items-center gap-2 overflow-hidden transition-all ${open ? "w-32" : "w-0"}`}>
            <img src={logo} alt="Logo" className="w-8 h-8 min-w-8" />
            <span className="font-display font-bold text-lg whitespace-nowrap">FinanFlow</span>
        </div>
        
        <button 
            onClick={() => setOpen(!open)}
            className="p-1.5 rounded-lg hover:bg-background text-text-muted hover:text-text-main transition"
        >
            {open ? <ChevronLeft size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* --- MENU ITEMS --- */}
      <ul className="flex-1 px-3 py-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          // Verificamos si esta es la ruta activa
          const isActive = location.pathname === item.path;

          return (
            <li key={index}>
              <Link
                to={item.path}
                className={`
                  flex items-center gap-3 px-3 py-3 rounded-xl transition-all group relative
                  ${isActive 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" // Estilo Activo
                    : "text-text-muted hover:bg-background hover:text-text-main" // Estilo Inactivo
                  }
                `}
              >
                {/* Icono */}
                <Icon size={20} className={`min-w-5 ${isActive ? "text-white" : ""}`} />
                
                {/* Texto (Se oculta si está cerrado) */}
                <span
                  className={`
                    whitespace-nowrap font-medium transition-all overflow-hidden
                    ${open ? "w-auto opacity-100" : "w-0 opacity-0"}
                  `}
                >
                  {item.label}
                </span>

                {/* Tooltip flotante (Solo cuando está cerrado) */}
                {!open && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-surface border border-border rounded text-xs text-text-main opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                    {item.label}
                  </div>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* --- BOTÓN NUEVO GASTO --- */}
      <div className="px-3 mb-6">
        <Link 
          to="/new-transaction" // Asegúrate de tener esta ruta definida
          className={`
            flex items-center gap-3 px-3 py-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all group
            ${!open ? "justify-center" : ""}
          `}
        >
          <PlusCircle size={20} />
          <span className={`whitespace-nowrap font-bold overflow-hidden transition-all ${open ? "w-auto opacity-100" : "w-0 opacity-0"}`}>
            Nuevo Gasto
          </span>
        </Link>
      </div>

      {/* --- FOOTER (Perfil) --- */}
      <div className="border-t border-border p-3 space-y-1">
        <Link to="/settings" className="flex items-center gap-3 px-3 py-3 rounded-xl text-text-muted hover:bg-background hover:text-text-main transition-all">
            <Settings size={20} className="min-w-5" />
            <span className={`overflow-hidden transition-all ${open ? "w-auto opacity-100" : "w-0 opacity-0"}`}>Configuración</span>
        </Link>
        <Link to="/profile" className="flex items-center gap-3 px-3 py-3 rounded-xl text-text-muted hover:bg-background hover:text-text-main transition-all">
            <User size={20} className="min-w-5" />
            <span className={`overflow-hidden transition-all ${open ? "w-auto opacity-100" : "w-0 opacity-0"}`}>Perfil</span>
        </Link>
      </div>
    </nav>
  );
}