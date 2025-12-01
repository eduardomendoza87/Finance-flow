import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  X, Save, Check, Loader2, 
  ShoppingBasket, Bus, Utensils, Home, Gamepad2, 
  PiggyBank, ArrowDownCircle, CircleDot, Heart, 
  Zap, Briefcase, GraduationCap, Plane, Music, 
  Coffee, Gift, Dumbbell, Dog
} from "lucide-react";

// IMPORTACIONES DE BACKEND
import { useAuth } from "../../context/AuthContext";
import { createCategory } from "../../services/categories"; 

// --- LISTAS ESTÁTICAS (Se mantienen igual) ---
const availableIcons = [
  { id: "basket", component: ShoppingBasket },
  { id: "bus", component: Bus },
  { id: "food", component: Utensils },
  { id: "home", component: Home },
  { id: "game", component: Gamepad2 },
  { id: "money", component: PiggyBank },
  { id: "transfer", component: ArrowDownCircle },
  { id: "heart", component: Heart },
  { id: "zap", component: Zap },
  { id: "work", component: Briefcase },
  { id: "study", component: GraduationCap },
  { id: "travel", component: Plane },
  { id: "music", component: Music },
  { id: "coffee", component: Coffee },
  { id: "gift", component: Gift },
  { id: "gym", component: Dumbbell },
  { id: "pet", component: Dog },
  { id: "other", component: CircleDot },
];

const availableColors = [
  { id: "indigo", value: "text-indigo-500", bg: "bg-indigo-500" },
  { id: "emerald", value: "text-emerald-500", bg: "bg-emerald-500" },
  { id: "rose", value: "text-rose-500", bg: "bg-rose-500" },
  { id: "amber", value: "text-amber-500", bg: "bg-amber-500" },
  { id: "blue", value: "text-blue-500", bg: "bg-blue-500" },
  { id: "purple", value: "text-purple-500", bg: "bg-purple-500" },
  { id: "cyan", value: "text-cyan-500", bg: "bg-cyan-500" },
];

const FormNewCategory = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // OBTENER USUARIO ACTUAL
  
  const [isLoading, setIsLoading] = useState(false); // Estado de carga

  const [formData, setFormData] = useState({
    name: "",
    type: "expense",
    iconId: "basket",
    colorId: "indigo"
  });

  const SelectedIcon = availableIcons.find(i => i.id === formData.iconId)?.component || CircleDot;
  const selectedColorClass = availableColors.find(c => c.id === formData.colorId)?.value || "text-white";

  //  FUNCIÓN DE GUARDADO CONECTADA A SUPABASE
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return; 

    setIsLoading(true); 

    try {
      const newCategory = {
        name: formData.name,
        type: formData.type,   
        icon: formData.iconId, 
        color: formData.colorId, 
        user_id: user.id      
      };

      // Llamada al servicio
      await createCategory(newCategory);
      
      // Si todo sale bien, volvemos a la lista
      console.log("Categoría creada con éxito");
      navigate("/settings/categories");

    } catch (error) {
      console.error("Error al crear categoría:", error);
      alert("Hubo un error al guardar. Revisa la consola.");
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm p-0 md:p-4">
      
      <div className="w-full max-w-lg bg-surface rounded-t-2xl md:rounded-2xl border-t md:border border-border shadow-2xl h-[95vh] md:h-auto flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold font-display text-text-main">Nueva Categoría</h2>
          <button onClick={() => navigate(-1)} className="text-text-muted hover:text-white p-2 rounded-full hover:bg-background transition">
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <form id="category-form" onSubmit={handleSubmit} className="space-y-8">
            
            {/* Nombre y Preview */}
            <div className="flex gap-4 items-end">
                <div className="flex-1 space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-text-muted">¿Cómo se llama?</label>
                    <input 
                        type="text" 
                        id="name"
                        autoFocus
                        placeholder="Ej. Mascotas"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-lg font-medium text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>
                
                {/* Vista Previa */}
                <div className="flex flex-col items-center justify-center gap-2 pb-1">
                    <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Vista previa</span>
                    <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center shadow-lg transition-all duration-300">
                        <SelectedIcon size={28} className={selectedColorClass} />
                    </div>
                </div>
            </div>

            {/* Tipo */}
            <div className="p-1 bg-background border border-border rounded-xl flex">
                <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: "expense" })}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                        formData.type === "expense" 
                        ? "bg-surface border border-border text-danger shadow-sm" 
                        : "text-text-muted hover:text-text-main"
                    }`}
                >
                    Gasto
                </button>
                <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: "income" })}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                        formData.type === "income" 
                        ? "bg-surface border border-border text-success shadow-sm" 
                        : "text-text-muted hover:text-text-main"
                    }`}
                >
                    Ingreso
                </button>
            </div>

            {/* Iconos */}
            <div>
                <label className="text-sm font-medium text-text-muted mb-3 block">Elige un icono</label>
                <div className="grid grid-cols-6 gap-3 p-4 bg-background/50 rounded-2xl border border-border h-48 overflow-y-auto custom-scrollbar">
                    {availableIcons.map((iconItem) => {
                        const IconComponent = iconItem.component;
                        const isSelected = formData.iconId === iconItem.id;
                        return (
                            <button
                                key={iconItem.id}
                                type="button"
                                onClick={() => setFormData({ ...formData, iconId: iconItem.id })}
                                className={`
                                    flex items-center justify-center aspect-square rounded-xl transition-all
                                    ${isSelected 
                                        ? "bg-primary/20 border-2 border-primary text-primary shadow-lg shadow-primary/20 scale-110" 
                                        : "bg-surface border border-border text-text-muted hover:bg-background hover:text-text-main"
                                    }
                                `}
                            >
                                <IconComponent size={20} />
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Colores */}
            <div>
                <label className="text-sm font-medium text-text-muted mb-3 block">Elige un color</label>
                <div className="flex flex-wrap gap-4">
                    {availableColors.map((color) => (
                        <button
                            key={color.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, colorId: color.id })}
                            className={`
                                w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110
                                ${color.bg} 
                                ${formData.colorId === color.id ? "ring-4 ring-offset-2 ring-offset-surface ring-primary/50 scale-110" : "opacity-80 hover:opacity-100"}
                            `}
                        >
                            {formData.colorId === color.id && <Check size={16} className="text-white drop-shadow-md" />}
                        </button>
                    ))}
                </div>
            </div>

          </form>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-surface/50 backdrop-blur-md rounded-b-2xl">
          <button 
            type="submit" 
            form="category-form"
            disabled={isLoading}
            className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary-hover transition-all shadow-xl shadow-primary/20 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
                <>
                    <Loader2 size={20} className="animate-spin" /> Guardando...
                </>
            ) : (
                <>
                    <Save size={20} /> Guardar Categoría
                </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default FormNewCategory;