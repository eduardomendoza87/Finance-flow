import { useState } from "react";
import {
Menu,
Home,
BarChart3,
Target,
LineChart,
Settings,
User,
PlusCircle,
} from "lucide-react";
import logo from "../assets/logo_finance_flow.png";
import { Link } from "react-router-dom";

const menuItems = [
{ icon: <Home size={20} />, label: "Inicio" , Link:"/home" },
{ icon: <BarChart3 size={20} />, label: "Historial", Link:"/historic" },
{ icon: <Target size={20} />, label: "Metas" },
{ icon: <LineChart size={20} />, label: "Insights" },
];

export default function Sidebar() {
const [open, setOpen] = useState(true);

return (
<nav
className={`h-screen flex flex-col duration-300 
      bg-surface text-text-main border-r border-border shadow-lg
      ${open ? "w-60" : "w-20"}`}
>
{/* Header */} <div className="flex items-center justify-between p-4 h-16">
<img
src={logo}
alt="FinanFlow"
className={`${open ? "w-24" : "w-0"} transition-all`}
/>
<Menu
size={28}
className="cursor-pointer text-text-main"
onClick={() => setOpen(!open)}
/> </div>

  {/* Items */}
  <ul className="flex-1 mt-3 space-y-1">
    {menuItems.map((item, index) => (
      <li
        key={index}
        className="
          flex items-center gap-3 py-2 px-4 cursor-pointer 
          hover:bg-border/30 rounded-lg transition-all
        "
      >
        {item.icon}
        <span
          className={`
            whitespace-nowrap transition-all
            ${!open && "opacity-0 translate-x-5 pointer-events-none"}
          `}
        >
          {item.label}
        </span>
        <Link to={item.link}>
        </Link>
      </li>
    ))}
  </ul>

  {/* Botón Nuevo Gasto */}
  <div className="px-4 mb-4">
    <Link to="/register-movement"
      className={`
        flex items-center justify-center gap-2 w-full py-2 rounded-lg 
        bg-primary hover:bg-primary-hover transition
        ${!open && "px-0"}
      `}
    >
      <PlusCircle size={18} />
      <span
        className={`
          whitespace-nowrap transition-all
          ${!open && "opacity-0 translate-x-5 pointer-events-none"}
        `}
      >
        Nuevo gasto
      </span>
    </Link>
  </div>

  {/* Footer */}
  <div className="mt-auto space-y-1 mb-4">
    <div className="
      flex items-center gap-3 py-2 px-4 hover:bg-border/30 
      cursor-pointer rounded-lg
    ">
      <Settings size={20} />
      <span
        className={`
          transition-all
          ${!open && "opacity-0 translate-x-5 pointer-events-none"}
        `}
      >
        Configuración
      </span>
    </div>

    <div className="
      flex items-center gap-3 py-2 px-4 hover:bg-border/30 
      cursor-pointer rounded-lg
    ">
      <User size={20} />
      <span
        className={`
          transition-all
          ${!open && "opacity-0 translate-x-5 pointer-events-none"}
        `}
      >
        Perfil
      </span>
    </div>
  </div>
</nav>
);
}
