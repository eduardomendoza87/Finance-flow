import {
  Home,
  Package,
  BadgeDollarSign,
  Headset,
  LogIn,
  UserPlus,
} from "lucide-react";
import logo from "../assets/logo_finance_flow.png";

export default function LandingNavbar() {
  return (
    <nav className="
      w-full flex items-center justify-between
      px-10 py-4
      bg-background text-text-main
      border-b border-border
    ">
      
      {/* LOGO */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="FinanFlow" className="w-12" />
        <span className="text-xl font-semibold hidden sm:block font-display">
          FinanFlow
        </span>
      </div>

      {/* MENÚ */}
      <ul className="hidden md:flex gap-10 text-lg font-medium">
        <li className="flex items-center gap-2 hover:text-primary transition cursor-pointer">
          <Home size={18} />
          Home
        </li>
        <li className="flex items-center gap-2 hover:text-primary transition cursor-pointer">
          <Package size={18} />
          Producto
        </li>
        <li className="flex items-center gap-2 hover:text-primary transition cursor-pointer">
          <BadgeDollarSign size={18} />
          Precio
        </li>
        <li className="flex items-center gap-2 hover:text-primary transition cursor-pointer">
          <Headset size={18} />
          Soporte
        </li>
      </ul>

      {/* BOTONES */}
      <div className="flex gap-3">
        <button
          className="
            flex items-center gap-2 px-5 py-2 rounded-lg
            border border-primary text-text-main
            hover:bg-primary-hover transition
          "
        >
          <LogIn size={18} />
          Login
        </button>

        <button
          className="
            flex items-center gap-2 px-5 py-2 rounded-lg
            bg-primary text-black
            hover:bg-primary-hover transition
          "
        >
          <UserPlus size={18} />
          Register
        </button>
      </div>
    </nav>
  );
}
