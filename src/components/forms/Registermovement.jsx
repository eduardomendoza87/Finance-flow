import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBasket, Bus, Utensils, Home, Gamepad2, X } from "lucide-react";
import MoodSelector from "../Selector";

const categories = [
  { id: 1, name: "Mercado", icon: ShoppingBasket },
  { id: 2, name: "Transporte", icon: Bus },
  { id: 3, name: "Comida", icon: Utensils },
  { id: 4, name: "Casa", icon: Home },
  { id: 5, name: "Juegos", icon: Gamepad2 },
];

const RegisterMovement = () => {
  const navigate = useNavigate();
  
  // Estado único para todo el formulario
  const [formData, setFormData] = useState({
    amount: "",
    category: null,
    mood: null,
    isEssential: false,
    note: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos a guardar:", formData);
    navigate("/dashboard"); // Redirigir al terminar
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm p-0 md:p-4">
      
      {/* Contenedor Modal */}
      <div className="w-full max-w-md bg-surface rounded-t-2xl md:rounded-2xl border-t md:border border-border shadow-2xl h-[90vh] md:h-auto flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold font-display text-text-main">Nuevo Gasto</h2>
          <button onClick={() => navigate(-1)} className="text-text-muted hover:text-white p-2 rounded-full hover:bg-background transition">
            <X size={24} />
          </button>
        </div>

        {/* Body Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <form id="expense-form" onSubmit={handleSubmit} className="space-y-8">
            
            {/* 1. MONTO HERO (Gigante) */}
            <div className="text-center">
              <label htmlFor="amount" className="sr-only">Monto</label>
              <div className="relative inline-block">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl text-text-muted font-display">$</span>
                <input
                  type="number"
                  id="amount"
                  placeholder="0.00"
                  className="w-full bg-transparent text-center text-6xl font-bold font-mono text-white placeholder-text-muted/20 focus:outline-none py-4"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  autoFocus
                  required
                />
              </div>
            </div>

            {/* 2. CATEGORÍAS  */}
            <div>
              <label className="block mb-3 text-sm font-medium text-text-main">Categoría</label>
              <div className="flex gap-3 overflow-x-auto pb-2 snap-x scrollbar-hide">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = formData.category === cat.name;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, category: cat.name })}
                      className={`
                        flex flex-col items-center justify-center min-w-20 p-3 rounded-xl border transition-all snap-start
                        ${isSelected 
                          ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                          : "bg-background border-border text-text-muted hover:border-primary/50"
                        }
                      `}
                    >
                      <Icon size={24} strokeWidth={1.5} className="mb-2" />
                      <span className="text-xs font-medium">{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. MOOD SELECTOR */}
            <MoodSelector 
              selectedMood={formData.mood} 
              onSelect={(moodId) => setFormData({ ...formData, mood: moodId })} 
            />

            {/* 4. TOGGLE ESENCIAL & NOTA */}
            <div className="grid grid-cols-2 gap-4">
              {/* Toggle Personalizado */}
              <div 
                onClick={() => setFormData({ ...formData, isEssential: !formData.isEssential })}
                className={`
                  cursor-pointer p-4 rounded-xl border flex flex-col justify-between transition-all
                  ${formData.isEssential 
                    ? "bg-success/10 border-success text-success" 
                    : "bg-background border-border text-text-muted hover:border-text-muted"
                  }
                `}
              >
                <span className="text-xs font-bold uppercase tracking-wider">Prioridad</span>
                <span className="text-lg font-medium">
                  {formData.isEssential ? "Esencial" : "Capricho"}
                </span>
              </div>

              {/* Input Nota */}
              <div className="bg-background border border-border rounded-xl p-2 focus-within:border-primary transition-colors">
                <input 
                  type="text" 
                  placeholder="Nota (opcional)..." 
                  className="w-full h-full bg-transparent text-sm text-white px-2 focus:outline-none"
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                />
              </div>
            </div>

          </form>
        </div>

        {/* Footer Fijo */}
        <div className="p-6 border-t border-border bg-surface/50 backdrop-blur-md rounded-b-2xl">
          <button 
            type="submit" 
            form="expense-form"
            className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary-hover transition-all shadow-xl shadow-primary/20 active:scale-95"
          >
            Guardar Movimiento
          </button>
        </div>

      </div>
    </div>
  );
}

export default RegisterMovement;