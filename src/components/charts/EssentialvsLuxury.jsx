import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const COLORS = {
  esencial: '#6366F1', // Indigo-500 (Color estable/necesario)
  capricho: '#F43F5E', // Rose-500 (Color de deseo/alerta)
  vacio: '#3f3f46'     // Zinc-700 (Para el estado sin datos)
};


const CustomTooltip = ({ active, payload, totalValue }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    // Evitamos dividir por cero si totalValue es 0
    const porcentaje = totalValue > 0 ? ((data.value / totalValue) * 100).toFixed(1) : 0;

    return (
      <div className="bg-surface border border-border p-3 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-90 text-text-main">
        <p className="font-bold mb-1">{data.name}</p>
        <p className="text-sm">
          Monto: <span className="font-mono font-bold">${data.value.toLocaleString()}</span>
        </p>
        <p className="text-xs text-text-muted">
          {porcentaje}% del total
        </p>
      </div>
    );
  }
  return null;
};

const ChartEssentialvsLuxury = ({ montoEsencial = 0, montoCapricho = 0 }) => {
  const totalValue = montoEsencial + montoCapricho;
  const hasData = totalValue > 0;

  const data = hasData ? [
    { name: 'Esencial', value: montoEsencial, color: COLORS.esencial },
    { name: 'Capricho', value: montoCapricho, color: COLORS.capricho },
  ] : [
    { name: 'Sin gastos', value: 1, color: COLORS.vacio }
  ];

  return (
    <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center p-4 bg-surface rounded-2xl border border-border">
      <h3 className="text-lg font-bold text-text-main mb-4 font-display">Balance de Gastos</h3>

      <div className="w-full h-64 relative z-10"> {/* Contenedor para el gráfico */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%" // Centro X
              cy="50%" // Centro Y
              innerRadius={hasData ? 60 : 70} // Radio interno (Dona)
              outerRadius={hasData ? 80 : 80} // Radio externo
              paddingAngle={hasData ? 4 : 0}  // Espacio entre rebanadas
              dataKey="value"
              stroke="none" 
              isAnimationActive={hasData} 
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} style={{ outline: 'none' }} />
              ))}
            </Pie>
            
            {/* Solo mostramos Tooltip y Leyenda si hay datos reales */}
            {hasData && (
              <>
                <Tooltip content={<CustomTooltip totalValue={totalValue} />} cursor={false} />
                 <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle"
                  formatter={(value, entry) => <span className="text-text-main ml-1">{value}</span>}
                />
              </>
            )}
          </PieChart>
        </ResponsiveContainer>

        {/* Texto central si no hay datos */}
        {!hasData && (
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <p className="text-text-muted text-sm font-medium">Sin datos aún</p>
           </div>
        )}
      </div>
       {/* Resumen rápido debajo del gráfico  */}
       {hasData && (
        <div className="flex justify-between w-full mt-4 px-4 text-sm">
            <div className="text-center">
                <p className="text-text-muted">Esencial</p>
                <p className="font-bold text-indigo-500 font-mono">${montoEsencial.toLocaleString()}</p>
            </div>
             <div className="text-center">
                <p className="text-text-muted">Capricho</p>
                <p className="font-bold text-rose-500 font-mono">${montoCapricho.toLocaleString()}</p>
            </div>
        </div>
       )}
    </div>
  );
};

export default ChartEssentialvsLuxury;