
import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Legend
} from 'recharts';
import { STOCK_PRICE_DATA, REVENUE_VS_PROFIT, COLORS } from '../constants';

export const DecadeLostChart: React.FC = () => (
  <div className="h-[420px] w-full bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col">
    <div className="flex-1 min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={STOCK_PRICE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis 
            dataKey="year" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#999', fontSize: 10, fontWeight: 600 }}
            interval="preserveStartEnd"
          />
          <YAxis 
            domain={[20, 35]} 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#999', fontSize: 10, fontWeight: 600 }}
            orientation="right"
          />
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
            itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
            formatter={(value: number) => [`$${value} USD`, 'Precio']}
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke={COLORS.microsoft} 
            strokeWidth={4} 
            dot={{ r: 4, fill: COLORS.microsoft, strokeWidth: 2, stroke: '#fff' }} 
            activeDot={{ r: 7, strokeWidth: 0 }}
            animationDuration={1500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="mt-6 flex justify-between items-center px-2 flex-shrink-0 border-t border-gray-50 pt-4">
      <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">
        Acción en Rango Lateral (2000 - 2013)
      </p>
      <div className="flex items-center space-x-2">
         <div className="w-2 h-2 rounded-full bg-blue-600"></div>
         <span className="text-[10px] text-gray-600 font-black uppercase tracking-widest">MSFT Stock Price</span>
      </div>
    </div>
  </div>
);

export const EfficiencyChart: React.FC = () => (
  <div className="h-[480px] w-full bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 flex flex-col">
    <div className="flex-1 min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={REVENUE_VS_PROFIT} margin={{ top: 30, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
          <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 'bold', fill: '#666' }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#ccc' }} domain={[0, 100]} />
          <Tooltip cursor={{fill: '#fcfcfc'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
          <Legend verticalAlign="top" align="right" height={36} iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }} />
          <Bar 
            name="Revenue ($B)" 
            dataKey="revenue" 
            fill={COLORS.microsoft} 
            radius={[6, 6, 0, 0]} 
            barSize={60}
            label={{ position: 'top', fill: COLORS.microsoft, fontSize: 12, fontWeight: '800', formatter: (val: number) => `$${val}B`, offset: 10 }}
          />
          <Bar 
            name="Net Profit ($B)" 
            dataKey="profit" 
            fill={COLORS.danger} 
            radius={[6, 6, 0, 0]} 
            barSize={60}
            label={{ position: 'top', fill: COLORS.danger, fontSize: 12, fontWeight: '800', formatter: (val: number) => `$${val}B`, offset: 10 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50 flex-shrink-0">
      <div className="text-center">
        <span className="text-[9px] text-gray-400 block mb-1 uppercase font-black tracking-[0.2em]">Revenue (2014)</span>
        <span className="text-xl font-black text-blue-600">$86B</span>
      </div>
      <div className="text-center">
        <span className="text-[9px] text-gray-400 block mb-1 uppercase font-black tracking-[0.2em]">Growth</span>
        <span className="text-xl font-black text-blue-400">+24.6%</span>
      </div>
      <div className="text-center">
        <span className="text-[9px] text-gray-400 block mb-1 uppercase font-black tracking-[0.2em]">Net Profit (2014)</span>
        <span className="text-xl font-black text-red-600">$22B</span>
      </div>
      <div className="text-center">
        <span className="text-[9px] text-gray-400 block mb-1 uppercase font-black tracking-[0.2em]">Profit Change</span>
        <span className="text-xl font-black text-red-400">-4.3%</span>
      </div>
    </div>
  </div>
);
