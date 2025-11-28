import React, { useState } from "react";

import {
  AlertTriangle,
  Calendar,
  ChevronDown,
  TrendingUp

} from "lucide-react";

import ChartEssentialvsLuxury from "../components/charts/EssentialvsLuxury";

import ChartEmotions from "../components/charts/ChartEmotionsSpending";
// Datos Simulados 
const gastosStats = [
  { id: 1, tituloGasto: "Comida", porcentaje: 45, color: "from-orange-400 to-orange-600" },
  { id: 2, tituloGasto: "Casa", porcentaje: 30, color: "from-blue-400 to-blue-600" },
  { id: 3, tituloGasto: "Transporte", porcentaje: 15, color: "from-purple-400 to-purple-600" },
  { id: 4, tituloGasto: "Juegos", porcentaje: 10, color: "from-emerald-400 to-emerald-600" },
];

const gastosPorEmocion = [
  { mood: "😀 Feliz", amount: 5400 },
  { mood: "😫 Estresado", amount: 8200 },
  { mood: "😐 Neutro", amount: 3100 },
  { mood: "😭 Triste", amount: 1500 },
];

const misTotales = {
  esencial: 15000,
  capricho: 4500,
};

const filtros = [
  {
    id: "fecha",
    titulo: "Este mes",
    icono: Calendar,
    opciones: ["Hoy", "Ayer", "Esta semana", "Este mes"],
  },
];

const Insights = () => {
  const [abierto, setAbierto] = useState(null);
  const [seleccionados, setSeleccionados] = useState({
    fecha: "Este mes",
  });

  const toggleDropdown = (id) => setAbierto(abierto === id ? null : id);

  const seleccionarOpcion = (filtroId, opcion) => {
    setSeleccionados({ ...seleccionados, [filtroId]: opcion });
    setAbierto(null);
  };

  return (
    <div className="bg-background min-h-screen text-text-main font-sans pb-12">
      
      {/* --- HEADER --- */}
      <section className="px-6 py-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-1">
              Insights y Comportamiento
            </h1>
            <p className="text-text-muted">Análisis mensual de tus finanzas.</p>
          </div>
          
          {/* Filtro de Fecha */}
          <div className="relative">
            <button
                onClick={() => toggleDropdown("fecha")}
                className="flex items-center gap-2 px-4 py-2.5 bg-surface border border-border rounded-xl text-sm font-medium hover:border-primary/50 transition-all"
            >
                <Calendar size={16} className="text-primary" />
                <span>{seleccionados.fecha}</span>
                <ChevronDown size={16} className={`transition-transform ${abierto === "fecha" ? "rotate-180" : ""}`} />
            </button>

            {abierto === "fecha" && (
                <>
                <div className="fixed inset-0 z-10" onClick={() => setAbierto(null)} />
                <div className="absolute right-0 mt-2 w-40 bg-surface border border-border rounded-xl shadow-xl z-20 overflow-hidden">
                    {filtros[0].opciones.map((opcion, idx) => (
                    <button
                        key={idx}
                        onClick={() => seleccionarOpcion("fecha", opcion)}
                        className="w-full px-4 py-2.5 text-left text-sm hover:bg-background text-text-muted hover:text-text-main transition-colors border-b border-border/50 last:border-none"
                    >
                        {opcion}
                    </button>
                    ))}
                </div>
                </>
            )}
          </div>
        </div>
      </section>

      {/* --- KPI CARDS (Tasa Ahorro & Días sin Gasto) --- */}
      <section className="px-6 md:px-12 lg:px-16 mb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Tasa de Ahorro */}
          <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <TrendingUp size={48} className="text-success" />
            </div>
            <h3 className="text-text-muted font-medium text-sm uppercase tracking-wider mb-2">
              Tasa de Ahorro
            </h3>
            <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold font-display text-text-main">20%</span>
                <span className="text-sm text-success font-medium">+2% vs mes anterior</span>
            </div>
            <div className="w-full bg-background rounded-full h-1.5 mt-4">
                <div className="bg-success h-1.5 rounded-full w-[20%] shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
            </div>
          </div>

          {/* Card 2: Días sin Gastos */}
          <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Calendar size={48} className="text-primary" />
            </div>
            <h3 className="text-text-muted font-medium text-sm uppercase tracking-wider mb-2">
              Días sin gastar
            </h3>
            <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold font-display text-text-main">4</span>
                <span className="text-sm text-text-muted font-medium">días consecutivos</span>
            </div>
             {/* Pequeños cuadros representando días */}
             <div className="flex gap-1 mt-4">
                {[...Array(7)].map((_, i) => (
                    <div key={i} className={`h-2 flex-1 rounded-sm ${i < 4 ? 'bg-primary' : 'bg-background'}`}></div>
                ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- GRID PRINCIPAL (Gráficas) --- */}
      <section className="px-6 md:px-12 lg:px-16 mb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            {/* COLUMNA IZQUIERDA (2/3): Emociones */}
            <div className="lg:col-span-2 space-y-6">
                
                {/* 1. Gráfica de Emociones */}
                <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm h-[400px]">
                    {/* Renderizamos el componente de Emociones */}
                    <ChartEmotions data={gastosPorEmocion} />
                </div>

                {/* 2. Insight de Texto (Importante para UX) */}
                <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl flex gap-4 items-start">
                    <div className="p-2 bg-primary/20 rounded-lg text-primary mt-1">
                        <AlertTriangle size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-text-main text-sm">Patrón Detectado</h4>
                        <p className="text-sm text-text-muted mt-1">
                            Tu gasto aumenta un <span className="text-danger font-bold">35%</span> cuando estás "Estresado". Considera actividades gratuitas para manejar el estrés.
                        </p>
                    </div>
                </div>

            </div>

            {/* COLUMNA DERECHA (1/3): Calidad y Categorías */}
            <div className="lg:col-span-1 flex flex-col gap-6">
                
                {/* 1. Esencial vs Capricho */}
                <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm h-80">
                    <ChartEssentialvsLuxury
                        montoEsencial={misTotales.esencial} 
                        montoCapricho={misTotales.capricho} 
                    />
                </div>

                {/* 2. Top Categorías (Lista) */}
                <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm">
                    <h3 className="font-bold text-text-main mb-4">Top Categorías</h3>
                    <div className="space-y-4">
                        {gastosStats.map((stats) => (
                            <div key={stats.id} className="group">
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-text-muted">{stats.tituloGasto}</span>
                                    <span className="text-text-main font-mono">{stats.porcentaje}%</span>
                                </div>
                                <div className="w-full bg-background rounded-full h-2 overflow-hidden">
                                    <div 
                                        className={`h-full rounded-full bg-gradient-to-r ${stats.color || 'from-primary to-purple-500'}`} 
                                        style={{ width: `${stats.porcentaje}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
      </section>

    </div>
  );
};

export default Insights;