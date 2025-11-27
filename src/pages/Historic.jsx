import React, { useState } from "react";
import { Search, Pencil, Trash2, Calendar, ListFilter, Smile, ChevronDown, Ban } from "lucide-react";

const transaccionesData = [
  {
    id: 1,
    fecha: "Hoy",
    categoria: "🍔 Comida",
    descripcion: "Burger King",
    mood: "😩",
    esencial: false,
    monto: -150.0,
  },
  {
    id: 2,
    fecha: "Ayer",
    categoria: "🏠 Internet",
    descripcion: "Pago Izzi",
    mood: "😐",
    esencial: true,
    monto: -500.0,
  },
  {
    id: 3,
    fecha: "Oct 21",
    categoria: "💰 Nómina",
    descripcion: "Sueldo Quincena",
    mood: "🎉",
    esencial: null, // null significa que es un ingreso (no aplica esencial)
    monto: 2500.0,
  },
];

const filtros = [
  { id: "fecha", titulo: "Este mes", icono: Calendar, opciones: ["Hoy", "Ayer", "Esta semana", "Este mes"] },
  { id: "categoria", titulo: "Categoría", icono: ListFilter, opciones: ["Todas", "Comida", "Transporte", "Servicios"] },
  { id: "mood", titulo: "Mood", icono: Smile, opciones: ["Todos", "😀", "😐", "😩"] },
];

const TransactionHistory = () => {
  const [abierto, setAbierto] = useState(null);
  const [transacciones, setTransacciones] = useState(transaccionesData); // Estado para simular eliminación
  const [seleccionados, setSeleccionados] = useState({
    fecha: "Este mes",
    categoria: "Categoría",
    mood: "Mood"
  });

  // Formateador de dinero profesional
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const toggleDropdown = (id) => setAbierto(abierto === id ? null : id);

  const seleccionarOpcion = (filtroId, opcion) => {
    setSeleccionados({ ...seleccionados, [filtroId]: opcion });
    setAbierto(null);
  };

  const eliminarTransaccion = (id) => {
    // Simulación de eliminar visualmente
    setTransacciones(transacciones.filter((t) => t.id !== id));
  };

  return (
    <div className="bg-background min-h-screen text-text-main font-sans pb-12">
      
      {/* --- HEADER --- */}
      <section className="px-6 py-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-1">Historial</h1>
            <p className="text-text-muted">Gestiona y analiza todos tus movimientos.</p>
          </div>

          {/* Búsqueda */}
          <div className="relative w-full md:w-96 group">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Buscar por nombre, nota..."
              className="w-full bg-surface border border-border text-sm rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* --- FILTROS --- */}
      <section className="px-6 md:px-12 lg:px-16 mb-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {filtros.map((filtro) => {
            const Icon = filtro.icono;
            const isOpen = abierto === filtro.id;
            
            return (
              <div key={filtro.id} className="relative">
                <button
                  onClick={() => toggleDropdown(filtro.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 bg-surface border rounded-xl text-sm font-medium transition-all
                    ${isOpen ? 'border-primary text-primary ring-2 ring-primary/20' : 'border-border text-text-main hover:border-text-muted'}
                  `}
                >
                  <Icon size={16} />
                  <span>{seleccionados[filtro.id]}</span>
                  <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setAbierto(null)} />
                    <div className="absolute top-full mt-2 w-48 bg-surface border border-border rounded-xl shadow-xl overflow-hidden z-20">
                      {filtro.opciones.map((opcion, idx) => (
                        <button
                          key={idx}
                          onClick={() => seleccionarOpcion(filtro.id, opcion)}
                          className="w-full px-4 py-2.5 text-left text-sm hover:bg-background text-text-muted hover:text-text-main transition-colors border-b border-border/50 last:border-none"
                        >
                          {opcion}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* --- TABLA --- */}
      <section className="px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto bg-surface border border-border rounded-2xl overflow-hidden shadow-sm">
          
          {/* Header Tabla */}
          <div className="p-6 border-b border-border flex justify-between items-center bg-background/50">
            <h3 className="font-bold text-lg font-display">Movimientos</h3>
            <span className="text-xs text-text-muted bg-surface border border-border px-2 py-1 rounded">
              {transacciones.length} registros
            </span>
          </div>
          
          <div className="overflow-x-auto">
            {transacciones.length > 0 ? (
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-text-muted uppercase border-b border-border bg-surface">
                  <tr>
                    <th className="px-6 py-4 font-medium">Fecha</th>
                    <th className="px-6 py-4 font-medium">Categoría</th>
                    <th className="px-6 py-4 font-medium">Descripción</th>
                    <th className="px-6 py-4 font-medium text-center">Mood</th>
                    <th className="px-6 py-4 font-medium text-center">Esencial</th>
                    <th className="px-6 py-4 font-medium text-right">Monto</th>
                    <th className="px-6 py-4 font-medium text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {transacciones.map((trans) => (
                    <tr key={trans.id} className="border-b border-border/50 last:border-none hover:bg-background/50 transition-colors group">
                      <td className="px-6 py-4 font-medium text-text-muted">{trans.fecha}</td>
                      <td className="px-6 py-4 text-text-main font-medium">{trans.categoria}</td>
                      <td className="px-6 py-4 text-text-muted">{trans.descripcion}</td>
                      <td className="px-6 py-4 text-center text-lg">{trans.mood}</td>
                      
                      {/* Badge Esencial */}
                      <td className="px-6 py-4 text-center">
                        {trans.esencial === true && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                            Esencial
                          </span>
                        )}
                        {trans.esencial === false && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-400 border border-zinc-700">
                            Capricho
                          </span>
                        )}
                        {trans.esencial === null && <span className="text-text-muted">-</span>}
                      </td>

                      {/* Monto con Color */}
                      <td className={`px-6 py-4 text-right font-mono font-bold ${trans.monto < 0 ? 'text-danger' : 'text-success'}`}>
                        {formatCurrency(trans.monto)}
                      </td>

                      {/* Acciones (Visibles en Hover) */}
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 rounded-lg hover:bg-background text-text-muted hover:text-primary transition" title="Editar">
                            <Pencil size={16} />
                          </button>
                          <button 
                            onClick={() => eliminarTransaccion(trans.id)}
                            className="p-2 rounded-lg hover:bg-red-500/10 text-text-muted hover:text-red-500 transition" 
                            title="Eliminar"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              // EMPTY STATE (Estado Vacío)
              <div className="flex flex-col items-center justify-center py-16 text-text-muted">
                <div className="bg-background p-4 rounded-full mb-4">
                  <Ban size={32} className="opacity-50" />
                </div>
                <p className="text-lg font-medium">No se encontraron movimientos</p>
                <p className="text-sm">Intenta cambiar los filtros o agrega un nuevo gasto.</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Paginación simple */}
        {transacciones.length > 0 && (
          <div className="flex justify-center mt-6 gap-4">
              <button className="px-6 py-3 border border-dashed border-primary-hover text-text-muted rounded-xl shadow-md hover:shadow-primary hover:text-primary transition text-md font-medium">Anterior</button>
              <button className="px-6 py-3 border border-dashed border-primary-hover text-text-muted rounded-xl shadow-md hover:shadow-primary hover:text-primary transition text-md font-medium">Siguiente</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default TransactionHistory;