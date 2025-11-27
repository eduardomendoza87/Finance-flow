import React, { useState } from "react";
import {
  Search,
  Plane,
  Smartphone,
  Bike,
  Plus,
  MoreVertical,
  Trash2,
  Edit2,
} from "lucide-react";
import { Link } from "react-router-dom";


const metas = [
  {
    id: 1,

    titulo: "Viaje a japón",

    icono: <Plane size={40} className="text-primary" />,

    progreso: 50,

    mesesRestantes: 4,
  },

  {
    id: 2,

    titulo: "Comprar iphone",

    icono: <Smartphone size={40} className="text-primary" />,

    progreso: 40,

    mesesRestantes: 6,
  },

  {
    id: 3,

    titulo: "Viaje a españa",

    icono: <Plane size={40} className="text-primary" />,

    progreso: 70,

    mesesRestantes: 4,
  },

  {
    id: 4,

    titulo: "Comprar moto",

    icono: <Bike size={40} className="text-primary" />,

    progreso: 60,

    mesesRestantes: 5,
  },
];

const Goals = () => {
  //  Estado para saber qué menú está abierto (guarda el ID)
  const [activeMenu, setActiveMenu] = useState(null);

  // Función para abrir/cerrar menú
  const toggleMenu = (id) => {
    if (activeMenu === id) {
      setActiveMenu(null); // Si ya está abierto, lo cierra
    } else {
      setActiveMenu(id); // Abre el nuevo
    }
  };

  //  Funciones Dummy para simular acciones
  const handleDelete = (id) => {
    console.log("Eliminar meta:", id);
    setActiveMenu(null);
  };
  return (
    <div className="bg-background min-h-screen text-text-main font-sans pb-12">
      {/*  Overlay invisible para cerrar menú al hacer clic fuera */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setActiveMenu(null)}
        />
      )}
      {/* HEADER & BÚSQUEDA */}
      <section className="px-6 py-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">
              Mis metas
            </h1>
            <p className="text-text-muted text-lg">
              Total ahorrado:{" "}
              <span className="font-mono text-xl text-success font-bold">
                $15,000
              </span>
            </p>
          </div>

          {/* Barra de búsqueda simplificada */}
          <div className="relative w-full md:w-96 group">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
            />
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full bg-surface border border-border text-sm rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* ACCIONES */}
      <section className="px-6 py-4 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex justify-end">
          <Link
            to="/new-goal"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-hover hover:scale-105 transition shadow-lg shadow-primary/25"
          >
            <Plus size={20} /> Nueva meta
          </Link>
        </div>
      </section>

      {/* CARDS DE METAS */}
      <section className="px-6 py-4 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {metas.map((meta) => (
            <div
              key={meta.id}
              className="relative bg-surface p-6 rounded-2xl border border-border hover:border-primary/50 transition-all shadow-sm group"
            >
              {/* Header Card */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-background rounded-xl border border-border group-hover:border-primary/30 transition-colors">
                    {meta.icono}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-text-main">
                      {meta.titulo}
                    </h3>
                    <p className="text-sm text-text-muted">
                      Faltan {meta.mesesRestantes} meses
                    </p>
                  </div>
                </div>

                {/* --- MENÚ KEBAB (3 PUNTOS) --- */}
                <div className="relative">
                  <button
                    onClick={() => toggleMenu(meta.id)}
                    className={`p-2 rounded-lg transition ${
                      activeMenu === meta.id
                        ? "bg-background text-primary"
                        : "text-text-muted hover:text-text-main hover:bg-background"
                    }`}
                  >
                    <MoreVertical size={20} />
                  </button>

                  {/* MENÚ DESPLEGABLE (Dropdown) */}
                  {activeMenu === meta.id && (
                    <div className="absolute right-0 mt-2 w-40 bg-surface border border-border rounded-xl shadow-xl z-20 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                      <Link
                        to={`/edit-goal/${meta.id}`}
                        className="w-full text-left px-4 py-3 text-sm text-text-main hover:bg-background flex items-center gap-2 transition-colors"
                      >
                        <Edit2 size={16} /> Editar
                      </Link>
                      <button
                        onClick={() => handleDelete(meta.id)}
                        className="w-full text-left px-4 py-3 text-sm text-danger hover:bg-danger/10 flex items-center gap-2 transition-colors border-t border-border"
                      >
                        <Trash2 size={16} /> Eliminar
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Barra de Progreso */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-text-muted">
                    Progreso
                  </span>
                  <span className="text-sm font-bold text-primary">
                    {meta.progreso}%
                  </span>
                </div>
                <div className="w-full bg-background rounded-full h-3 overflow-hidden border border-border/50">
                  <div
                    className="bg-gradient-to-r from-primary to-purple-500 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(99,102,241,0.4)]"
                    style={{ width: `${meta.progreso}%` }}
                  ></div>
                </div>
              </div>

              {/* Botones de Acción  */}
              <div className="flex gap-3">
                <button className="flex-1 py-2.5 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary hover:text-white transition border border-primary/20 flex justify-center items-center gap-2">
                  <Plus size={18} /> Abonar
                </button>
                <Link
                  to={`/edit-goal/${meta.id}`}
                  className="p-2.5 rounded-lg border border-border text-text-muted hover:text-text-main hover:bg-background transition"
                  title="Editar"
                >
                  <Edit2 size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*Paginacion*/}

      <section className="px-6 py-8 md:px-12 lg:px-16">
        <div className="flex justify-center mt-6 gap-4">
          <button className="px-6 py-3 border border-dashed border-primary-hover text-text-muted rounded-xl shadow-md hover:shadow-primary hover:text-primary transition text-md font-medium">
            Anterior
          </button>

          <button className="px-6 py-3 border border-dashed border-primary-hover text-text-muted rounded-xl shadow-md hover:shadow-primary hover:text-primary transition text-md font-medium">
            Siguiente
          </button>
        </div>
      </section>
    </div>
  );
};

export default Goals;
