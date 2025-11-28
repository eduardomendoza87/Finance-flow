import React, { useState } from "react";
import { X, DollarSign, PiggyBank } from "lucide-react";

const FormAddFunds = ({ isOpen, onClose, goalTitle, onSave }) => {
  const [amount, setAmount] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) return;
    
    // Aquí enviaríamos el dato al backend
    onSave(parseFloat(amount));
    
    // Limpiar y cerrar
    setAmount("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      
      {/* Tarjeta del Modal */}
      <div className="w-full max-w-sm bg-surface border border-border rounded-2xl shadow-2xl scale-100 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2 text-text-main">
            <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
                <PiggyBank size={18} />
            </div>
            <h3 className="font-bold text-sm">Abonar a "{goalTitle}"</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-text-muted hover:text-white transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="text-center mb-6">
            <label className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2 block">
              Cantidad a sumar
            </label>
            <div className="relative inline-block w-full">
                <span className="absolute left-1/4 top-1/2 -translate-y-1/2 text-2xl text-text-muted/50 font-display">$</span>
                <input
                  type="number"
                  placeholder="0.00"
                  autoFocus
                  className="w-full bg-transparent text-center text-5xl font-bold font-mono text-white placeholder-text-muted/20 focus:outline-none py-2"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl border border-border text-text-muted font-medium hover:bg-background transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={!amount}
              className="flex-1 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg shadow-primary/20"
            >
              Confirmar
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default FormAddFunds;