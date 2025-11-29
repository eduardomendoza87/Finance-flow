import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Lock, Mail, Eye, EyeOff, ShieldAlert, CreditCard, Trash2 } from "lucide-react";

const SecurityAndAccount = () => {
  // Estado para mostrar/ocultar contraseña (simulada)
  const [showPassword, setShowPassword] = useState(false);

  // Datos simulados del usuario
  const userData = {
    email: "eduardo@finanflow.com",
    password: "password123", 
    plan: "Free"
  };

  return (
    <div className="bg-background min-h-screen text-text-main font-sans pb-12">
      
      {/* --- HEADER --- */}
      <section className="px-6 py-8 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/settings"
            className="inline-flex items-center gap-2 text-text-muted hover:text-text-main mb-6 transition-colors group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Volver a Configuración
          </Link>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">
              Cuenta y Seguridad
            </h1>
            <p className="text-text-muted">
              Administra tus credenciales y plan de suscripción.
            </p>
          </div>
        </div>
      </section>

      {/* --- CREDENCIALES --- */}
      <section className="px-6 md:px-12 lg:px-16 mb-8">
        <div className="max-w-3xl mx-auto">
            
            <div className="flex items-center gap-2 mb-4 text-primary">
                <Lock size={20} />
                <h2 className="font-bold text-lg font-display uppercase tracking-wider">Credenciales de Acceso</h2>
            </div>

            <div className="bg-surface p-8 rounded-3xl border border-border shadow-sm space-y-6">
                
                {/* Correo Principal (Read Only) */}
                <div>
                    <label className="text-sm font-medium text-text-muted mb-2 block">Correo Electrónico</label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-hover:text-text-main transition-colors" size={20} />
                        <input
                            type="email"
                            value={userData.email}
                            readOnly
                            className="w-full bg-background border border-border rounded-xl py-3 pl-12 pr-4 text-text-muted font-mono text-sm cursor-not-allowed focus:outline-none"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-text-muted bg-surface px-2 py-1 rounded border border-border">
                            ID Principal
                        </span>
                    </div>
                </div>

                {/* Contraseña */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-medium text-text-muted">Contraseña</label>
                        <Link to="/security/change-password" className="text-xs font-bold text-primary hover:underline">
                            Cambiar contraseña
                        </Link>
                    </div>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-hover:text-text-main transition-colors" size={20} />
                        <input
                            type={showPassword ? "text" : "password"}
                            value="supersecreto" // Valor dummy visual
                            readOnly
                            className="w-full bg-background border border-border rounded-xl py-3 pl-12 pr-12 text-text-main font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                        <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main transition-colors"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* --- PLAN ACTUAL --- */}
      <section className="px-6 md:px-12 lg:px-16 mb-8">
        <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4 text-primary">
                <CreditCard size={20} />
                <h2 className="font-bold text-lg font-display uppercase tracking-wider">Suscripción</h2>
            </div>

            <div className="bg-surface p-8 rounded-3xl border border-border shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                    <h3 className="text-text-muted text-sm font-medium mb-1">Tu plan actual</h3>
                    <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold font-display text-text-main">Free</span>
                        <span className="px-3 py-1 rounded-full bg-success/10 text-success text-xs font-bold border border-success/20 uppercase tracking-wide">
                            Activo
                        </span>
                    </div>
                    <p className="text-sm text-text-muted mt-2 max-w-sm">
                        Tienes acceso a funciones básicas. Pásate a Pro para gráficas avanzadas e IA.
                    </p>
                </div>

                <Link 
                    to="/security/manage-subscription" 
                    className="px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
                >
                    Mejorar Plan
                </Link>
            </div>
        </div>
      </section>

      {/* --- ZONA DE PELIGRO --- */}
      <section className="px-6 md:px-12 lg:px-16 mb-8">
        <div className="max-w-3xl mx-auto">
            <div className="bg-danger/5 border border-danger/20 p-8 rounded-3xl">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-danger/10 rounded-xl text-danger shrink-0">
                        <ShieldAlert size={24} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-danger mb-1">Eliminar Cuenta</h3>
                        <p className="text-sm text-danger/70 mb-6 leading-relaxed">
                            Esta acción es permanente e irreversible. Todos tus datos, transacciones y metas serán borrados de nuestros servidores inmediatamente.
                        </p>
                        <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-background border border-danger/30 text-danger font-bold hover:bg-danger hover:text-white transition-all shadow-sm text-sm">
                            <Trash2 size={16} />
                            Sí, eliminar mi cuenta permanentemente
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}

export default SecurityAndAccount;