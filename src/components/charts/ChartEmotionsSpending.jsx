import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

//  Colores para cada Mood 
const MOOD_COLORS = {
  '😀 Feliz': '#10B981',    // Emerald (Success)
  '😐 Neutro': '#6366F1',   // Indigo (Primary)
  '😩 Estresado': '#F59E0B', // Amber (Warning)
  '😭 Triste': '#EF4444',    // Red (Danger)
};


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface border border-border p-3 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-90 text-text-main">
        <p className="font-bold mb-1 font-display">{label}</p> {/* El Mood */}
        <p className="text-sm">
          Gasto Total: <span className="font-mono font-bold text-primary">${payload[0].value.toLocaleString()}</span>
        </p>
      </div>
    );
  }
  return null;
};

const ChartEmotions= ({ data = [] }) => {
  const hasData = data && data.length > 0;

  const sortedData = hasData ? [...data].sort((a, b) => b.amount - a.amount) : [];

  return (
    <div className="w-full h-full min-h-[350px] p-4 bg-surface rounded-2xl border border-border flex flex-col relative">
      <h3 className="text-lg font-bold text-text-main mb-4 font-display">Gasto por Estado de Ánimo</h3>

      <div className="flex-1 w-full min-h-0 relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sortedData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* Rejilla de fondo sutil */}
            <CartesianGrid strokeDasharray="3 3" stroke="#27272A" vertical={false} />

            {/* Eje X (Moods) */}
            <XAxis
              dataKey="mood"
              tick={{ fill: '#A1A1AA', fontSize: 12 }} // Color text-muted
              tickLine={false}
              axisLine={{ stroke: '#27272A' }} // Color border
            />

            {/* Eje Y (Montos) */}
            <YAxis
              tick={{ fill: '#A1A1AA', fontSize: 12 }} // Color text-muted
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value >= 1000 ? (value / 1000).toFixed(0) + 'k' : value}`} // Formato compacto (ej. $1k)
            />

            {/* Tooltip */}
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(99, 102, 241, 0.1)' }} />

            {/* Barras */}
            <Bar dataKey="amount" radius={[4, 4, 0, 0]} maxBarSize={60}>
              {sortedData.map((entry, index) => (
                // Asignamos un color diferente a cada barra según el mood
                <Cell key={`cell-${index}`} fill={MOOD_COLORS[entry.mood] || '#6366F1'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {/* Estado Vacío */}
        {!hasData && (
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-surface/50 backdrop-blur-sm rounded-2xl">
             <p className="text-text-muted text-sm font-medium">No hay suficientes datos para analizar.</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default ChartEmotions;