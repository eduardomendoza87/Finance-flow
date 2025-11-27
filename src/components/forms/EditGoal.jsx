import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { X, Calendar, Target, Save } from "lucide-react";

const FormEditarGoal = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtenemos el ID de la meta a editar
  
  // 1. ESTADO INICIAL
  const [formData, setFormData] = useState({
    title: "",          
    target_amount: "",  
    deadline: "",       
  });

  const [monthlySaving, setMonthlySaving] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 2. SIMULACIÓN DE "FETCH" (Cargar datos existentes)
  useEffect(() => {
    // Aquí harías la llamada a Supabase: supabase.from('goals').select('*').eq('id', id)
    // Por ahora, simulamos que cargamos datos después de 500ms
    setTimeout(() => {
      setFormData({
        title: "Comprar Laptop", // Dato simulado
        target_amount: "12500",  // Dato simulado
        deadline: "2025-12-31",  // Dato simulado
      });
      setIsLoading(false);
    }, 500);
  }, [id]);

  // 3. CÁLCULO AUTOMÁTICO (Efecto inteligente)
  useEffect(() => {
    if (formData.target_amount && formData.deadline) {
      const today = new Date();
      const targetDate = new Date(formData.deadline);
      
      const yearsDiff = targetDate.getFullYear() - today.getFullYear();
      const monthsDiff = (yearsDiff * 12) + (targetDate.getMonth() - today.getMonth());
      
      if (monthsDiff > 0) {
        const savingNeeded = parseFloat(formData.target_amount) / monthsDiff;
        setMonthlySaving(savingNeeded);
      } else {
        setMonthlySaving(null);
      }
    } else {
      setMonthlySaving(null);
    }
  }, [formData.target_amount, formData.deadline]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Actualizando meta ${id} con datos:`, formData);
    // Aquí iría el UPDATE a Supabase
    navigate("/dashboard"); 
  };

  if (isLoading) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="text-primary animate-pulse font-display text-xl">Cargando meta...</div>
        </div>
    );
  }

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
            <h2 className="text-xl font-bold font-display text-text-main">Editar Meta</h2>
          </div>
          <button onClick={() => navigate(-1)} className="text-text-muted hover:text-white p-2 rounded-full hover:bg-background transition">
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <form id="edit-goal-form" onSubmit={handleSubmit} className="space-y-8">
            
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

            {/* 4. MENSAJE INTELIGENTE */}
            <div className="flex items-center justify-center min-h-12">
               {monthlySaving && monthlySaving > 0 ? (
                 <p className="text-center text-sm text-text-muted bg-surface border border-border px-4 py-2 rounded-lg animate-in fade-in">
                    Nuevo plan: necesitas ahorrar <span className="text-success font-bold font-mono">${monthlySaving.toFixed(2)}</span> al mes. 🔄
                 </p>
               ) : (
                 <p className="text-center text-sm text-text-muted/50">Ajusta la fecha o monto para recalcular.</p>
               )}
            </div>

          </form>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-surface/50 backdrop-blur-md rounded-b-2xl">
          <button 
            type="submit" 
            form="edit-goal-form"
            className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary-hover transition-all shadow-xl shadow-primary/20 active:scale-95 flex items-center justify-center gap-2"
          >
            <Save size={20} />
            Actualizar Meta
          </button>
        </div>

      </div>
    </div>
  );
}

export default FormEditarGoal;