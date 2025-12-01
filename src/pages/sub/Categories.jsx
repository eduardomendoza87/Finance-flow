import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBasket, Bus, Utensils, Home, Gamepad2, 
  PiggyBank, ArrowDownCircle, CircleDot, Plus, 
  MoreVertical, Edit2, Trash2, ChevronLeft, Loader2,
  Heart, Zap, Briefcase, GraduationCap, Plane, Music, 
  Coffee, Gift, Dumbbell, Dog
} from "lucide-react";

// Importamos el servicio
import { getCategories, deleteCategory } from "../../services/categories"; 
import { useAuth } from "../../context/AuthContext";

//  DICCIONARIO DE ICONOS 
const ICON_MAP = {
  basket: ShoppingBasket,
  bus: Bus,
  food: Utensils,
  home: Home,
  game: Gamepad2,
  money: PiggyBank,
  transfer: ArrowDownCircle,
  heart: Heart,
  zap: Zap,
  work: Briefcase,
  study: GraduationCap,
  travel: Plane,
  music: Music,
  coffee: Coffee,
  gift: Gift,
  gym: Dumbbell,
  pet: Dog,
  other: CircleDot,
};

const Categories = () => {
  const { user } = useAuth();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Estado para las pestañas 
  const [activeTab, setActiveTab] = useState("expense"); // 'expense' o 'income'
  
  // Estado para el menú de acciones
  const [activeMenu, setActiveMenu] = useState(null);

  //  CARGAR DATOS DE SUPABASE
  useEffect(() => {
    if (user) {
      loadData();
    }
  }, [user]);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await getCategories(user.id);
      setCategories(data || []);
    } catch (error) {
      console.error("Error cargando categorías:", error);
    } finally {
      setLoading(false);
    }
  };

  // ELIMINAR CATEGORÍA
  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar esta categoría?")) {
      try {
        await deleteCategory(id);
        // Actualizamos el estado local para que desaparezca visualmente
        setCategories(categories.filter((cat) => cat.id !== id));
        setActiveMenu(null);
      } catch (error) {
        console.error("Error al eliminar:", error);
      }
    }
  };

  // Filtrar categorías según el tab activo
  const filteredCategories = categories.filter(cat => cat.type === activeTab);

  const toggleMenu = (id) => setActiveMenu(activeMenu === id ? null : id);

  return (
    <div className="bg-background min-h-screen text-text-main font-sans pb-12">
      
      {/* Overlay para cerrar menús */}
      {activeMenu && <div className="fixed inset-0 z-10" onClick={() => setActiveMenu(null)} />}

      {/* HEADER  */}
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
                    onClick={() => setActiveTab("expense")}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === "expense" ? "bg-primary text-white shadow-md" : "text-text-muted hover:text-text-main"
                    }`}
                >
                    Gastos
                </button>
                <button
                    onClick={() => setActiveTab("income")}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === "income" ? "bg-success text-white shadow-md" : "text-text-muted hover:text-text-main"
                    }`}
                >
                    Ingresos
                </button>
            </div>
        </div>
      </section>

      {/* --- LISTA DE CATEGORÍAS --- */}
      <section className="px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
            
            {/* Estado de Carga */}
            {loading ? (
                <div className="flex justify-center py-20">
                    <Loader2 className="animate-spin text-primary" size={40} />
                </div>
            ) : filteredCategories.length === 0 ? (
                // Estado Vacío
                <div className="text-center py-16 border border-dashed border-border rounded-2xl bg-surface/30 text-text-muted">
                    No tienes categorías de {activeTab === 'expense' ? 'gasto' : 'ingreso'} creadas.
                </div>
            ) : (
                // Grid de Datos Reales
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredCategories.map((data) => {
                        // Mapeo dinámico del icono
                        const IconComponent = ICON_MAP[data.icon] || CircleDot;
                        const isIncome = data.type === 'income';
                        // Usamos el color guardado en DB o uno por defecto
                        const colorClass = data.color ? `text-${data.color}-500` : (isIncome ? "text-success" : "text-primary");

                        return (
                            <div key={data.id} className="relative bg-surface p-4 rounded-xl border border-border hover:border-primary/50 transition-all shadow-sm group flex items-center justify-between">
                                
                                {/* Info Izquierda */}
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl border border-border transition-colors ${isIncome ? 'bg-success/10 border-success/20' : 'bg-background'}`}>
                                        <IconComponent size={24} className={isIncome ? "text-success" : "text-primary"} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-text-main">{data.name}</h3>
                                        <span className={`text-xs capitalize px-2 py-0.5 rounded border ${isIncome ? 'text-success border-success/30 bg-success/5' : 'text-text-muted border-border bg-background'}`}>
                                            {data.type === 'expense' ? 'Gasto' : 'Ingreso'}
                                        </span>
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
                                            {/* Enlace CORREGIDO a la ruta de edición */}
                                            <Link 
                                                to={`/settings/categories/edit/${data.id}`} 
                                                className="w-full text-left px-4 py-2.5 text-sm text-text-main hover:bg-background flex items-center gap-2 transition-colors"
                                            >
                                                <Edit2 size={14} /> Editar
                                            </Link>
                                            <button 
                                                className="w-full text-left px-4 py-2.5 text-sm text-danger hover:bg-danger/10 flex items-center gap-2 transition-colors border-t border-border"
                                                onClick={() => handleDelete(data.id)}
                                            >
                                                <Trash2 size={14} /> Eliminar
                                            </button>
                                        </div>
                                    )}
                                </div>

                            </div>
                        );
                    })}
                </div>
            )}
        </div>
      </section>

    </div>
  );
};

export default Categories;