import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Camera, Save, User, Mail, CreditCard, Loader2 } from "lucide-react";

const FormEditProfile = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // 1. ESTADO DEL FORMULARIO
  const [formData, setFormData] = useState({
    fullName: "Eduardo Mendoza",
    email: "eduardo@finanflow.com",
    currency: "MXN",
    bio: "" // Un campo extra opcional
  });

  // 2. HANDLER DE CAMBIOS
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. GUARDAR CAMBIOS (Simulado)
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular petición a Supabase
    setTimeout(() => {
      console.log("Perfil actualizado:", formData);
      setIsLoading(false);
      navigate("/settings/profile"); // Volver a la vista de perfil
    }, 1500);
  };

  return (
    <div className="bg-background min-h-screen text-text-main font-sans pb-12">
      
      {/* HEADER NAV */}
      <section className="px-6 py-8 md:px-12 lg:px-16">
        <div className="max-w-2xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-text-muted hover:text-text-main transition-colors mb-6 group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Cancelar</span>
          </button>

          <h1 className="text-3xl font-bold font-display mb-2">Editar Perfil</h1>
          <p className="text-text-muted">Actualiza tu información personal.</p>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="px-6 md:px-12 lg:px-16">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-3xl p-8 shadow-sm">
            
            {/* --- SECCIÓN AVATAR --- */}
            <div className="flex flex-col items-center mb-10">
              <div className="relative group cursor-pointer">
                {/* Círculo del Avatar */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-zinc-800 to-black border-2 border-border flex items-center justify-center text-text-muted overflow-hidden group-hover:border-primary transition-colors">
                   <User size={48} />
                   {/* Si hubiera imagen: <img src={url} /> */}
                </div>
                
                {/* Botón de Cámara (Overlay) */}
                <div className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full shadow-lg border-2 border-surface hover:scale-110 transition-transform">
                  <Camera size={18} />
                </div>
              </div>
              <p className="mt-4 text-sm text-primary font-medium cursor-pointer hover:underline">
                Cambiar foto de perfil
              </p>
            </div>

            {/* --- INPUTS --- */}
            <div className="space-y-6">
              
              {/* Nombre Completo */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium text-text-muted">Nombre completo</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 pl-12 text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
              </div>

              {/* Correo (Read Only) */}
              <div className="space-y-2 opacity-75">
                <div className="flex justify-between">
                    <label htmlFor="email" className="text-sm font-medium text-text-muted">Correo electrónico</label>
                    <span className="text-xs text-text-muted flex items-center gap-1">🔒 No editable</span>
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    disabled
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 pl-12 text-text-muted cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Moneda Principal */}
              <div className="space-y-2">
                <label htmlFor="currency" className="text-sm font-medium text-text-muted">Moneda principal</label>
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                  <select
                    id="currency"
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 pl-12 text-text-main focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="MXN">MXN - Peso Mexicano ($)</option>
                    <option value="USD">USD - Dólar Estadounidense ($)</option>
                    <option value="EUR">EUR - Euro (€)</option>
                    <option value="COP">COP - Peso Colombiano ($)</option>
                  </select>
                  {/* Flechita custom */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                    <ChevronLeft size={16} className="-rotate-90" />
                  </div>
                </div>
              </div>

            </div>

            {/* --- FOOTER DE ACCIÓN --- */}
            <div className="mt-10 pt-6 border-t border-border flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-hover transition-all shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-wait"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Guardando...
                  </>
                ) : (
                  <>
                    <Save size={20} /> Guardar Cambios
                  </>
                )}
              </button>
            </div>

          </form>
        </div>
      </section>

    </div>
  );
};

export default FormEditProfile;