
import React from 'react';
import { SectionId } from '../types';

interface NavigationProps {
  activeSection: SectionId;
  onSectionChange: (section: SectionId) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const sections = [
    { id: SectionId.COVER, label: '00. Inicio', full: 'Carátula del Caso' },
    { id: SectionId.HERO, label: '01. Contexto', full: 'El Gigante Estancado' },
    { id: SectionId.DIAGNOSIS, label: '02. Auditoría', full: 'Análisis de Eficiencia' },
    { id: SectionId.ERRORS, label: '03. Crisis', full: 'El Fracaso de Nokia' },
    { id: SectionId.CULTURE, label: '04. Cultura', full: 'Mentalidad de Crecimiento' },
    { id: SectionId.PIVOT, label: '05. Pivot', full: 'Reingeniería de Ingresos' },
    { id: SectionId.METRICS, label: '06. KPIs', full: 'De Performance a Power Metrics' },
    { id: SectionId.REBIRTH, label: '07. Expansión', full: 'Resultados y Valoración' }
  ];

  return (
    <nav className="fixed left-0 top-0 h-full w-24 md:w-32 z-50 bg-white border-r border-gray-100 flex flex-col items-center py-12 justify-between">
      <div className="flex flex-col items-center space-y-1">
        <div className="w-8 h-8 bg-blue-600 rounded-sm mb-12 flex items-center justify-center text-white font-black text-xs">MS</div>
        <div className="flex flex-col space-y-6">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className="group relative flex flex-col items-center"
            >
              <span className={`text-[10px] font-black tracking-tighter transition-colors ${
                activeSection === section.id ? 'text-blue-600' : 'text-gray-300 group-hover:text-gray-500'
              }`}>
                {String(index).padStart(2, '0')}
              </span>
              <div className={`w-0.5 h-6 my-1 transition-all duration-500 ${
                activeSection === section.id ? 'bg-blue-600 h-8' : 'bg-gray-100 group-hover:bg-gray-200'
              }`} />
              <span className={`absolute left-16 opacity-0 group-hover:opacity-100 transition-all bg-black text-white text-[10px] py-1 px-3 rounded whitespace-nowrap pointer-events-none uppercase tracking-widest font-bold`}>
                {section.full}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="text-[10px] text-gray-400 font-bold rotate-180 [writing-mode:vertical-lr] tracking-[0.3em] uppercase opacity-30">
        Board Briefing 2015
      </div>
    </nav>
  );
};

export default Navigation;
