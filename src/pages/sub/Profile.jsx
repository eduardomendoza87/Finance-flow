import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Edit2, CreditCard, Calendar, Fingerprint, User } from "lucide-react";

// Datos simulados 
const userData = {
  nombre: "Eduardo Mendoza",
  correo: "eduardo@finanflow.com",
  plan: "PLAN PRO",
  moneda: "MXN ($)",
  fechaIngreso: "Octubre 2025",
  idUsuario: "user_837492"
};

const Profile = () => {
  return (
    <div className="bg-background min-h-screen text-text-main font-sans pb-12">
      
      {/* HEADER DE NAVEGACIÓN */}
      <section className="px-6 py-8 md:px-12 lg:px-16">
        <div className="max-w-2xl mx-auto">
            <Link 
                to="/settings" 
                className="inline-flex items-center gap-2 text-text-muted hover:text-text-main transition-colors mb-8"
            >
                <ChevronLeft size={20} />
                <span>Volver a Configuración</span>
            </Link>

            {/* TARJETA DE PERFIL */}
            <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                
                {/* Fondo decorativo sutil */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    
                    {/* AVATAR CON PLACEHOLDER */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-zinc-800 to-black border-4 border-surface shadow-xl flex items-center justify-center mb-6 text-text-muted">
                        <User size={64} strokeWidth={1.5} />
                    </div>

                    {/* NOMBRE Y PLAN */}
                    <h1 className="text-3xl md:text-4xl font-bold font-display text-text-main mb-2">
                        {userData.nombre}
                    </h1>
                    <p className="text-text-muted mb-4">{userData.correo}</p>
                    
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold tracking-wider mb-8">
                        {userData.plan}
                    </span>

                    {/* GRID DE DETALLES */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-border pt-8 mb-8 text-left md:text-center">
                        <div className="p-4 rounded-2xl bg-background/50 border border-border/50">
                            <div className="flex flex-col items-center gap-2">
                                <CreditCard size={20} className="text-primary" />
                                <span className="text-xs text-text-muted uppercase">Moneda</span>
                                <span className="font-mono font-bold">{userData.moneda}</span>
                            </div>
                        </div>
                        <div className="p-4 rounded-2xl bg-background/50 border border-border/50">
                            <div className="flex flex-col items-center gap-2">
                                <Calendar size={20} className="text-primary" />
                                <span className="text-xs text-text-muted uppercase">Miembro desde</span>
                                <span className="font-medium">{userData.fechaIngreso}</span>
                            </div>
                        </div>
                        <div className="p-4 rounded-2xl bg-background/50 border border-border/50">
                            <div className="flex flex-col items-center gap-2">
                                <Fingerprint size={20} className="text-primary" />
                                <span className="text-xs text-text-muted uppercase">ID Usuario</span>
                                <span className="font-mono text-sm">{userData.idUsuario}</span>
                            </div>
                        </div>
                    </div>

                    {/* BOTÓN PRINCIPAL */}
                    <Link 
                        to="/settings/profile/edit-perfil" 
                        className="flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-hover hover:scale-105 transition shadow-lg shadow-primary/25"
                    >
                        <Edit2 size={18} />
                        Editar Perfil
                    </Link>

                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;