import React from "react";
import { Link } from "react-router-dom";
import { User, FolderOpen, Bell, Shield, ChevronRight } from "lucide-react";

// Configuración de las tarjetas
const settingsOptions = [
  {
    id: "profile",
    title: "Perfil",
    description: "Actualiza tu información y ve tu perfil",
    icon: User,
    path: "/settings/profile", 
  },
  {
    id: "categories",
    title: "Categorías",
    description: "Personaliza, agrega y gestiona tus categorías",
    icon: FolderOpen,
    path: "/settings/categories",
  },
  {
    id: "preferences",
    title: "Preferencias",
    description: "Ajusta tus preferencias a tu gusto",
    icon: Bell,
    path: "/settings/preferences",
  },
  {
    id: "account",
    title: "Cuenta",
    description: "Gestiona tu cuenta y seguridad",
    icon: Shield,
    path: "/settings/account",
  },
];

const Settings = () => {
  return (
    <div className="bg-background min-h-screen text-text-main font-sans pb-12">
      
      {/* HEADER */}
      <section className="px-6 py-8 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">Configuración</h1>
          <p className="text-text-muted">Administra tu cuenta y preferencias.</p>
        </div>
      </section>

      {/* MENÚ DE OPCIONES (Tus Tarjetas) */}
      <section className="px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {settingsOptions.map((option) => {
            const Icon = option.icon;
            return (
              <Link
                key={option.id}
                to={option.path}
                className="group flex items-center justify-between p-6 bg-surface border border-border rounded-2xl hover:border-primary/50 hover:bg-surface/80 transition-all duration-200 shadow-sm"
              >
                <div className="flex items-center gap-5">
                  {/* Icono con fondo suave */}
                  <div className="p-3 bg-background rounded-xl border border-border group-hover:border-primary/30 group-hover:text-primary transition-colors">
                    <Icon size={24} />
                  </div>
                  
                  {/* Textos */}
                  <div>
                    <h3 className="text-lg font-bold text-text-main mb-1 group-hover:text-primary transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-sm text-text-muted">
                      {option.description}
                    </p>
                  </div>
                </div>

                {/* Flecha a la derecha */}
                <div className="text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all">
                  <ChevronRight size={24} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default Settings;