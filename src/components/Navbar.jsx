import {
  Home,
  Package,
  BadgeDollarSign,
  Headset,
  LogIn,
  UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom"; 
import logo from "../assets/logo_finance_flow.png"; 

export default function LandingNavbar() {
  return (
    <nav className="
      fixed top-0 left-0 right-0 z-50 
      w-full flex items-center justify-between
      px-10 py-4
      bg-background/95 backdrop-blur-md text-text-main
      border-b border-border
    ">
      
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="FinanFlow" className="w-12" />
        <span className="text-xl font-semibold hidden sm:block font-display">
          FinanFlow
        </span>
      </Link>

      {/* MENÚ  */}
      <ul className="hidden md:flex gap-10 text-lg font-medium">
        
        {/* Home */}
        <li>
          <a href="/" className="flex items-center gap-2 hover:text-primary transition cursor-pointer">
            <Home size={18} />
            Home
          </a>
        </li>

        {/* Producto */}
        <li>
          <a href="/#features" className="flex items-center gap-2 hover:text-primary transition cursor-pointer">
            <Package size={18} />
            Producto
          </a>
        </li>

        {/* Precio  */}
        <li>
          <a href="/#pricing" className="flex items-center gap-2 hover:text-primary transition cursor-pointer">
            <BadgeDollarSign size={18} />
            Precio
          </a>
        </li>

        {/* Soporte  */}
        <li>
          <a href="/#faq" className="flex items-center gap-2 hover:text-primary transition cursor-pointer">
            <Headset size={18} />
            Soporte
          </a>
        </li>
      </ul>

      {/* BOTONES  */}
      <div className="flex gap-3">
        <Link
          to="/login"
          className="
            flex items-center gap-2 px-5 py-2 rounded-lg
            border border-primary text-text-main
            hover:bg-primary-hover hover:scale-105 transition
          "
        >
          <LogIn size={18} />
          Login
        </Link>

        <Link
          to="/register"
          className="
            flex items-center gap-2 px-5 py-2 rounded-lg
            bg-primary text-black
            hover:bg-primary-hover hover:scale-105 transition
          "
        >
          <UserPlus size={18} />
          Register
        </Link>
      </div>
    </nav>
  );
}