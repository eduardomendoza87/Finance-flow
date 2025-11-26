import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

// Datos de ejemplo 
const data = [
  { name: 'Comida', value: 400, color: '#6366F1' }, 
  { name: 'Casa', value: 300, color: '#10B981' },   
  { name: 'Ocio', value: 300, color: '#F59E0B' },   
  { name: 'Otros', value: 200, color: '#EF4444' }, 
];

const ExpenseDonut = () => {
  return (
    <div className="w-full h-[300px]"> {/* Contenedor con altura fija */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%" // Centro X
            cy="50%" // Centro Y
            innerRadius={60} // Esto crea el hueco de la "Dona"
            outerRadius={80}
            paddingAngle={5} // Espacio entre segmentos
            dataKey="value"
            stroke="none" // Quitamos bordes blancos feos
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          
          {/* Tooltip Personalizado (Dark Mode) */}
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#18181B', // Zinc-900
              borderColor: '#27272A',     // Zinc-800
              borderRadius: '8px',
              color: '#FAFAFA' 
            }} 
            itemStyle={{ color: '#A1A1AA' }}
          />
          
          <Legend verticalAlign="bottom" height={36} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseDonut;