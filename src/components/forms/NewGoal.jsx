import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Calendar, Target } from "lucide-react";

const FormNewGoal = () => {
  const navigate = useNavigate();
  
  // 1. ESTADO CORRECTO PARA UNA META
  const [formData, setFormData] = useState({
    title: "",          // Nombre de la meta
    target_amount: "",  // Monto objetivo
    deadline: "",       // Fecha límite
  });

  const [monthlySaving, setMonthlySaving] = useState(null);

  // 2. CÁLCULO AUTOMÁTICO (Efecto inteligente)
  useEffect(() => {
    if (formData.target_amount && formData.deadline) {
      const today = new Date();
      const targetDate = new Date(formData.deadline);
      
      // Calcular diferencia en meses
      const yearsDiff = targetDate.getFullYear() - today.getFullYear();
      const monthsDiff = (yearsDiff * 12) + (targetDate.getMonth() - today.getMonth());
      
      if (monthsDiff > 0) {
        const savingNeeded = parseFloat(formData.target_amount) / monthsDiff;
        setMonthlySaving(savingNeeded);
      } else {
        setMonthlySaving(null); // La fecha es hoy o pasada
      }
    } else {
      setMonthlySaving(null);
    }
  }, [formData.target_amount, formData.deadline]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Meta a guardar:", formData);
    // Aquí iría la conexión a Supabase
    navigate("/dashboard"); 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm p-0 md:p-4">
      
      {/* Contenedor Modal */}
      <div className="w-full max-w-md bg-surface rounded-t-2xl md:rounded-2xl border-t md:border border-border shadow-2xl h-[90vh] md:h-auto flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Target size={20} />
            </div>
            <h2 className="text-xl font-bold font-display text-text-main">Nueva Meta</h2>
          </div>
          <button onClick={() => navigate(-1)} className="text-text-muted hover:text-white p-2 rounded-full hover:bg-background transition">
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <form id="goal-form" onSubmit={handleSubmit} className="space-y-8">
            
            {/* 1. INPUT MONTO HERO */}
            <div className="text-center space-y-2">
              <label htmlFor="target_amount" className="text-sm font-medium text-text-muted uppercase tracking-wider">Monto Objetivo</label>
              <div className="relative inline-block w-full">
                <span className="absolute left-1/4 top-1/2 -translate-y-1/2 text-3xl text-text-muted/50 font-display">$</span>
                <input
                  type="number"
                  id="target_amount"
                  placeholder="0.00"
                  className="w-full bg-transparent text-center text-6xl font-bold font-mono text-white placeholder-text-muted/20 focus:outline-none py-2"
                  value={formData.target_amount}
                  onChange={(e) => setFormData({ ...formData, target_amount: e.target.value })}
                  autoFocus
                  required
                />
              </div>
            </div>

            {/* 2. INPUT NOMBRE */}
            <div className="space-y-2">
               <label htmlFor="title" className="text-sm font-medium text-text-main">Nombre de la meta</label>
               <input 
                type="text" 
                id="title"
                placeholder="Ej. Comprar iPhone 17"
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-lg font-medium text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-text-muted/50 text-center"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
               />
            </div>

            {/* 3. INPUT FECHA */}
            <div className="space-y-2">
               <label htmlFor="deadline" className="text-sm font-medium text-text-main">Fecha Límite</label>
               <div className="relative">
                 <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20}/>
                 <input 
                  type="date" 
                  id="deadline"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 pl-12 text-lg font-medium text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-center appearance-none"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  required
                 />
               </div>
            </div>

            {/* 4. MENSAJE INTELIGENTE (Cálculo) */}
            <div className="flex items-center justify-center min-h-12">
               {monthlySaving && monthlySaving > 0 ? (
                 <p className="text-center text-sm text-text-muted bg-surface border border-border px-4 py-2 rounded-lg animate-in fade-in">
                    Para lograrlo a tiempo, necesitas ahorrar <span className="text-success font-bold font-mono">${monthlySaving.toFixed(2)}</span> al mes. 🚀
                 </p>
               ) : (
                 <p className="text-center text-sm text-text-muted/50">Define fecha y monto para ver tu plan de ahorro.</p>
               )}
            </div>

          </form>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-surface/50 backdrop-blur-md rounded-b-2xl">
          <button 
            type="submit" 
            form="goal-form"
            className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary-hover transition-all shadow-xl shadow-primary/20 active:scale-95"
          >
            Crear Meta
          </button>
        </div>

      </div>
    </div>
  );
}

export default FormNewGoal;