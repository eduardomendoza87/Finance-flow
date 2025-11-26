import React from "react";
import { Search, TrendingUp, AlertCircle } from "lucide-react"; 
import ExpenseDonut from "../components/charts/ExpenseDonut";

const stats = [
  { id: 1, titulo: "Balance total", dinero: "$12,450.00", tendencia: "+12% vs mes ant", color: "text-white" },
  { id: 2, titulo: "Ingresos", dinero: "$4,534.00", tendencia: "", color: "text-success" },
  { id: 3, titulo: "Gastos", dinero: "$1,805.00", tendencia: "", color: "text-danger" }
];

const metasAhorro = [
  { id: 1, tituloMeta: "Viaje a Japón", porcentaje: 45 },
  { id: 2, tituloMeta: "Comprar iPhone", porcentaje: 60 },
  { id: 3, tituloMeta: "Viaje a España", porcentaje: 80 },
];

const transacciones = [
  { id: 1, fecha: "Hoy", categoria: "🍔 Comida", descripcion: "Burger King", mood: "😩", esencial: false, monto: -150.0 },
  { id: 2, fecha: "Ayer", categoria: "🏠 Internet", descripcion: "Pago Izzi", mood: "😐", esencial: true, monto: -500.0 },
  { id: 3, fecha: "Oct 21", categoria: "💰 Nómina", descripcion: "Sueldo Quincena", mood: "🎉", esencial: null, monto: 2500.0 }
];

const Home = () => {
  return (
    <div className="bg-background min-h-screen text-text-main font-sans selection:bg-primary selection:text-white pb-12">
      
      {/* --- HEADER Y BUSQUEDA --- */}
      <section className="px-6 py-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-1">
              Hola, Eduardo 
            </h1>
            <p className="text-text-muted">Aquí tienes el resumen de tus finanzas.</p>
          </div>

          {/* Barra de búsqueda */}
          <div className="relative w-full md:w-96 group">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Buscar movimientos..."
              className="w-full bg-surface border border-border text-sm rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all shadow-sm"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-text-muted border border-border px-1.5 py-0.5 rounded hidden md:block">⌘K</span>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: STATS*/}
      <section className="px-6 md:px-12 lg:px-16 mb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((item) => (
            <div key={item.id} className="bg-surface p-6 rounded-2xl border border-border shadow-sm hover:border-primary/30 transition-colors">
              <h3 className="text-sm font-medium text-text-muted mb-1 uppercase tracking-wider">{item.titulo}</h3>
              <div className="flex items-end justify-between">
                <p className={`text-2xl font-bold font-mono ${item.color}`}>{item.dinero}</p>
                {item.tendencia && (
                  <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full flex items-center gap-1">
                    <TrendingUp size={12} /> {item.tendencia}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*  SECCIÓN 3: GRID PRINCIPAL  */}
      <section className="px-6 md:px-12 lg:px-16 mb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLUMNA IZQUIERDA: GRÁFICA (2/3) */}
          <div className="lg:col-span-2 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-surface border border-border rounded-2xl p-6 shadow-xl h-full flex flex-col md:flex-row items-center gap-8">
              
              {/* El Componente de Gráfica */}
              <div className="w-full md:w-1/2 h-64">
                 <ExpenseDonut />
              </div>

              {/* EL INSIGHT DE IA  */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-xl font-bold font-display">Análisis Semanal</h3>
                <div className="bg-background/50 border border-border p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                        <div className="bg-warning/20 p-2 rounded-lg text-warning mt-1">
                            <AlertCircle size={18} />
                        </div>
                        <div>
                            <p className="text-sm text-text-main font-medium mb-1">Patrón Detectado</p>
                            <p className="text-xs text-text-muted leading-relaxed">
                                "Cuidado, gastas un <span className="text-danger font-bold">20% más</span> en comida rápida los viernes cuando reportas estar 'Estresado'."
                            </p>
                        </div>
                    </div>
                </div>
                <button className="text-sm text-primary hover:underline font-medium">Ver todos los insights &rarr;</button>
              </div>

            </div>
          </div>

          {/* COLUMNA DERECHA: METAS (1/3) */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-bold text-text-main font-display">Mis Metas</h3>
              <button className="text-xs text-primary hover:underline">Gestionar</button>
            </div>

            {metasAhorro.map((meta) => (
              <div key={meta.id} className="bg-surface p-4 rounded-xl border border-border hover:border-primary/50 transition-all shadow-sm group">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-sm text-text-main">{meta.tituloMeta}</h4>
                  <span className="text-xs font-bold text-primary">{meta.porcentaje}%</span>
                </div>
                <div className="w-full bg-background rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-primary to-purple-500 h-1.5 rounded-full transition-all duration-500" 
                    style={{ width: `${meta.porcentaje}%` }}
                  ></div>
                </div>
              </div>
            ))}
            
            <button className="w-full py-3 border border-dashed border-border text-text-muted rounded-xl hover:border-primary hover:text-primary transition text-xs font-medium">
              + Crear nueva meta
            </button>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: ÚLTIMAS TRANSACCIONES */}
      <section className="px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto bg-surface border border-border rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-border flex justify-between items-center">
            <h3 className="font-bold text-lg font-display">Últimos movimientos</h3>
            <button className="text-sm text-text-muted hover:text-white transition">Filtrar</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-text-muted uppercase bg-background/50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 font-medium">Fecha</th>
                  <th className="px-6 py-4 font-medium">Categoría</th>
                  <th className="px-6 py-4 font-medium">Descripción</th>
                  <th className="px-6 py-4 font-medium text-center">Mood</th>
                  <th className="px-6 py-4 font-medium text-center">Esencial</th>
                  <th className="px-6 py-4 font-medium text-right">Monto</th>
                </tr>
              </thead>
              <tbody>
                {transacciones.map((trans) => (
                  <tr key={trans.id} className="border-b border-border/50 last:border-none hover:bg-background/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-text-muted">{trans.fecha}</td>
                    <td className="px-6 py-4 text-text-main">{trans.categoria}</td>
                    <td className="px-6 py-4 text-text-main">{trans.descripcion}</td>
                    <td className="px-6 py-4 text-center text-lg">{trans.mood}</td>
                    <td className="px-6 py-4 text-center">
                        {trans.esencial === true && <span className="px-2 py-1 rounded text-xs bg-success/10 text-success border border-success/20">Sí</span>}
                        {trans.esencial === false && <span className="px-2 py-1 rounded text-xs bg-surface border border-border text-text-muted">No</span>}
                        {trans.esencial === null && <span className="text-text-muted">-</span>}
                    </td>
                    <td className={`px-6 py-4 text-right font-mono font-medium ${trans.monto < 0 ? 'text-danger' : 'text-success'}`}>
                      {trans.monto < 0 ? '-' : '+'} ${Math.abs(trans.monto).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;