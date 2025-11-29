import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBasket, Bus, Utensils, Home, Gamepad2, 
  PiggyBank, ArrowDownCircle, CircleDot, Plus, 
  MoreVertical, Edit2, Trash2, ChevronLeft
} from "lucide-react";

// Datos (Simulando DB)
export const categoriasData = [
  { id: 1, nombre: "Mercado", tipo: "gasto", icon: <ShoppingBasket size={24} className="text-primary"/> },
  { id: 2, nombre: "Transporte", tipo: "gasto", icon: <Bus size={24} className="text-primary"/> },
  { id: 3, nombre: "Comida", tipo: "gasto", icon: <Utensils size={24} className="text-primary"/> },
  { id: 4, nombre: "Casa", tipo: "gasto", icon: <Home size={24} className="text-primary"/> },
  { id: 5, nombre: "Juegos", tipo: "gasto", icon: <Gamepad2 size={24} className="text-primary"/> },
  { id: 6, nombre: "Nómina", tipo: "ingreso", icon: <PiggyBank size={24} className="text-success"/> }, // Cambié color a verde
  { id: 7, nombre: "Transferencia", tipo: "ingreso", icon: <ArrowDownCircle size={24} className="text-success"/> },
  { id: 8, nombre: "Otros", tipo: "gasto", icon: <CircleDot size={24} className="text-text-muted"/> }
];

const Categories = () => {
  // Estado para las pestañas 
  const [activeTab, setActiveTab] = useState("gasto"); // 'gasto' o 'ingreso'
  
  // Estado para el menú de acciones
  const [activeMenu, setActiveMenu] = useState(null);

  // Filtrar categorías según el tab activo
  const filteredCategories = categoriasData.filter(cat => cat.tipo === activeTab);

  const toggleMenu = (id) => setActiveMenu(activeMenu === id ? null : id);

  return (
    <div className="bg-background min-h-screen text-text-main font-sans pb-12">
      
      {/* Overlay para cerrar menús */}
      {activeMenu && <div className="fixed inset-0 z-10" onClick={() => setActiveMenu(null)} />}

      {/* --- HEADER --- */}
      <section className="px-6 py-8 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
            <Link to="/settings" className="inline-flex items-center gap-2 text-text-muted hover:text-text-main mb-6 transition-colors">
                <ChevronLeft size={20} /> Volver a Configuración
            </Link>
            
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold font-display mb-1">Mis Categorías</h1>
                    <p className="text-text-muted">Gestiona las etiquetas de tus movimientos.</p>
                </div>
                
                {/* Botón Nueva Categoría */}
                <Link 
                    to="/settings/categories/new-category" 
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-hover hover:scale-105 transition shadow-lg shadow-primary/25"
                >
                    <Plus size={20} /> Nueva categoría
                </Link>
            </div>
        </div>
      </section>

      {/* --- TABS (Pestañas) --- */}
      <section className="px-6 md:px-12 lg:px-16 mb-8">
        <div className="max-w-5xl mx-auto">
            <div className="flex p-1 bg-surface border border-border rounded-xl w-fit">
                <button
                    onClick={() => setActiveTab("gasto")}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === "gasto" ? "bg-primary text-white shadow-md" : "text-text-muted hover:text-text-main"
                    }`}
                >
                    Gastos
                </button>
                <button
                    onClick={() => setActiveTab("ingreso")}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === "ingreso" ? "bg-success text-white shadow-md" : "text-text-muted hover:text-text-main"
                    }`}
                >
                    Ingresos
                </button>
            </div>
        </div>
      </section>

      {/* --- LISTA DE CATEGORÍAS --- */}
      <section className="px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCategories.map((data) => (
                <div key={data.id} className="relative bg-surface p-4 rounded-xl border border-border hover:border-primary/50 transition-all shadow-sm group flex items-center justify-between">
                    
                    {/* Info Izquierda */}
                    <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl border border-border transition-colors ${data.tipo === 'ingreso' ? 'bg-success/10 border-success/20' : 'bg-background'}`}>
                            {data.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-text-main">{data.nombre}</h3>
                            <span className="text-xs text-text-muted capitalize">{data.tipo}</span>
                        </div>
                    </div>

                    {/* Menú de Acciones (Kebab) */}
                    <div className="relative">
                        <button 
                            onClick={() => toggleMenu(data.id)}
                            className={`p-2 rounded-lg transition ${activeMenu === data.id ? 'bg-background text-primary' : 'text-text-muted hover:text-text-main hover:bg-background'}`}
                        >
                            <MoreVertical size={20} />
                        </button>

                        {/* Dropdown */}
                        {activeMenu === data.id && (
                            <div className="absolute right-0 mt-2 w-32 bg-surface border border-border rounded-xl shadow-xl z-20 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                <Link to={`/settings/categories/edit/${data.id}`} className="w-full text-left px-4 py-2.5 text-sm text-text-main hover:bg-background flex items-center gap-2 transition-colors">
                                    <Edit2 size={14} /> Editar
                                </Link>
                                <button className="w-full text-left px-4 py-2.5 text-sm text-danger hover:bg-danger/10 flex items-center gap-2 transition-colors border-t border-border">
                                    <Trash2 size={14} /> Eliminar
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            ))}
        </div>
      </section>

    </div>
  );
};

export default Categories;