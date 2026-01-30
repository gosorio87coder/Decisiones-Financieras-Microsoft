
import React, { useState } from 'react';
import { SectionId } from './types';
import { COLORS } from './constants';
import Navigation from './components/Navigation';
import { DecadeLostChart, EfficiencyChart } from './components/Charts';
import { ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, TrendingUp, Cloud, BarChart3, Package, ArrowRight, Zap, Target, ShieldAlert, Users, LayoutDashboard, GraduationCap, Briefcase } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.COVER);
  
  const sections = Object.values(SectionId);
  const currentIndex = sections.indexOf(activeSection);

  const nextSlide = () => {
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1]);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1]);
    }
  };

  const SlideHeader = ({ module, title, dark = false }: { module: string; title: string; dark?: boolean }) => (
    <div className="absolute top-12 left-0 w-full px-12 md:px-24 pointer-events-none z-10">
      <div className={`flex items-center space-x-4 mb-2`}>
        <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
          {module}
        </span>
        <div className={`h-[1px] w-12 ${dark ? 'bg-blue-900' : 'bg-blue-100'}`} />
      </div>
      <h2 className={`text-2xl md:text-3xl font-black tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
    </div>
  );

  return (
    <div className="h-screen w-screen overflow-hidden bg-white selection:bg-blue-100 flex text-gray-900">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Presentation Area */}
      <main className="flex-1 h-full relative overflow-hidden pl-24 md:pl-32">
        
        {/* Slide Navigation Controls - Bottom Corner */}
        <div className="fixed bottom-12 right-12 z-50 flex items-center space-x-4">
          <div className="text-[10px] font-black text-gray-400 mr-4 tracking-[0.3em] uppercase">
            Pág. {currentIndex} / {sections.length - 1}
          </div>
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-4 rounded-xl border border-gray-200 bg-white shadow-lg transition-all ${currentIndex === 0 ? 'opacity-0 scale-90' : 'hover:bg-gray-50 active:scale-95'}`}
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentIndex === sections.length - 1}
            className={`p-4 rounded-xl bg-blue-600 text-white shadow-xl shadow-blue-200 transition-all ${currentIndex === sections.length - 1 ? 'opacity-0 scale-90' : 'hover:bg-blue-700 active:scale-95'}`}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* SECTION 0: COVER */}
        {activeSection === SectionId.COVER && (
          <section className="h-full w-full flex flex-col items-center justify-center px-12 md:px-24 animate-in fade-in zoom-in-95 duration-1000 bg-slate-50">
            <div className="max-w-5xl w-full flex flex-col items-center text-center space-y-12">
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-px w-16 bg-blue-200"></div>
                <span className="text-xs font-black uppercase tracking-[0.5em] text-blue-600">Executive Case Study</span>
                <div className="h-px w-16 bg-blue-200"></div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-slate-900">
                  The Transformation <br/>
                  <span className="text-blue-600">of Microsoft</span>
                </h1>
                <div className="h-2 w-32 bg-blue-600 mx-auto mt-6"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full pt-12 border-t border-slate-200">
                <div className="text-left space-y-4">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="text-blue-600" size={20} />
                    <span className="text-sm font-black uppercase tracking-widest text-slate-500">Programa Académico</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xl font-bold text-slate-900">Tech MBA - UTEC</p>
                    <p className="text-lg text-slate-600 font-medium italic">Curso: Decisiones Financieras</p>
                  </div>
                </div>

                <div className="text-left space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="text-blue-600" size={20} />
                    <span className="text-sm font-black uppercase tracking-widest text-slate-500">Integrantes</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    {['Gonzalo Osorio', 'Bryan Condor', 'Cesar Huaman', 'Rafael Lopez'].map(name => (
                      <p key={name} className="text-base font-bold text-slate-800">{name}</p>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                onClick={nextSlide}
                className="group flex items-center space-x-4 bg-white border border-slate-200 px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:border-blue-200 transition-all active:scale-95"
              >
                <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-600 group-hover:text-blue-600 transition-colors">Empezar Presentación</span>
                <ArrowRight size={18} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="absolute bottom-12 left-24 md:left-32 right-12 flex justify-between items-end opacity-40">
              <div className="text-[10px] font-black uppercase tracking-widest">UTEC 2024</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-blue-600">Internal Use Only</div>
            </div>
          </section>
        )}

        {/* SECTION 1: HERO (EL GIGANTE ESTANCADO) */}
        {activeSection === SectionId.HERO && (
          <section className="h-full w-full flex flex-col justify-center px-12 md:px-24 animate-in fade-in zoom-in-95 duration-700">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded text-[10px] font-black tracking-[0.2em] uppercase">
                  Análisis Estratégico 2013
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold leading-none tracking-tighter text-gray-900">
                  El Gigante <br/><span className="text-blue-600 underline underline-offset-8 decoration-blue-100">Estancado.</span>
                </h1>
                <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
                  Durante varios años, Microsoft fue una empresa altamente rentable, pero con dificultades para visionar o generar nuevas fuentes de crecimiento (dirección estratégica) en un mercado que estaba cambiando rápidamente.
                </p>
                
                {/* PER Comparison Table */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Múltiplo de Valoración (PER 2013)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-white p-3 rounded border-l-4 border-blue-600 shadow-sm">
                      <span className="text-sm font-bold text-gray-900">Microsoft</span>
                      <span className="text-lg font-black text-blue-600">8.5x</span>
                    </div>
                    <div className="flex justify-between items-center opacity-60">
                      <span className="text-sm font-medium text-gray-500">Apple Inc.</span>
                      <span className="text-sm font-bold text-gray-900">12.2x</span>
                    </div>
                    <div className="flex justify-between items-center opacity-60">
                      <span className="text-sm font-medium text-gray-500">Google (Alphabet)</span>
                      <span className="text-sm font-bold text-gray-900">25.4x</span>
                    </div>
                  </div>
                  <p className="text-[9px] text-gray-400 mt-4 italic leading-tight">
                    * El mercado valoraba a Microsoft como una empresa de servicios básicos (Utilities) en lugar de una tecnológica de alto crecimiento.
                  </p>
                </div>
              </div>
              <div className="relative">
                 <DecadeLostChart />
              </div>
            </div>
          </section>
        )}

        {/* SECTION 2: DIAGNOSIS (EFICIENCIA) */}
        {activeSection === SectionId.DIAGNOSIS && (
          <section className="h-full w-full flex flex-col justify-center px-12 md:px-24 animate-in fade-in slide-in-from-right-8 duration-700 bg-slate-50 relative">
            <SlideHeader 
              module="Fase 01: Auditoría Operativa" 
              title="Crecimiento vs Rentabilidad" 
            />
            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-20 items-center mt-12">
              <div className="scale-95">
                <EfficiencyChart />
              </div>
              <div className="space-y-8">
                <div className="grid gap-6">
                  <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-3 mb-2">
                       <Target size={18} className="text-blue-600" />
                       <h4 className="font-bold text-gray-900 uppercase tracking-tight text-sm">La Trampa del Volumen</h4>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      El equipo directivo estaba obsesionado con las ventas brutas de licencias, ignorando que el <strong>Costo de Adquisición</strong> y la <strong>Infraestructura</strong> estaban canibalizando los márgenes.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-3 mb-2">
                       <ShieldAlert size={18} className="text-red-600" />
                       <h4 className="font-bold text-gray-900 uppercase tracking-tight text-sm">Erosión del Valor Neto</h4>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Mientras los ingresos crecían a doble dígito, la utilidad neta se reducía. La empresa se volvía más compleja y menos rentable año tras año.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 3: ERRORS (NOKIA) */}
        {activeSection === SectionId.ERRORS && (
          <section className="h-full w-full flex flex-col justify-center px-12 md:px-24 animate-in fade-in slide-in-from-right-8 duration-700 bg-slate-900 text-white relative">
            <SlideHeader 
              module="Fase 02: Gestión de Crisis" 
              title="El Fracaso de Nokia: Limpieza de Balance" 
              dark 
            />
            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center mt-12">
              <div className="space-y-12">
                 <div className="space-y-2">
                    <h2 className="text-7xl font-black text-red-600 tracking-tighter">-$7.6B</h2>
                    <p className="text-gray-400 text-sm uppercase tracking-[0.4em] font-bold">Impairment Charge (2015)</p>
                 </div>
                 <p className="text-xl text-gray-300 font-light leading-relaxed max-w-lg">
                   Comprar Nokia fue el intento desesperado de Ballmer por salvar Windows Phone. Nadella llegó con una orden clara: <strong>Cortar pérdidas y pivotar a servicios.</strong>
                 </p>
                 <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                    <div>
                      <div className="text-3xl font-black text-red-500">18,000</div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Despidos (Ajuste de Estructura)</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-blue-500">7.2B</div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Precio de Compra (Sunk Cost)</div>
                    </div>
                 </div>
              </div>
              <div className="relative">
                 <div className="p-10 border border-white/10 rounded bg-white/5 backdrop-blur-xl shadow-2xl">
                    <h4 className="text-sm font-black mb-6 text-red-400 uppercase tracking-widest">Lección Financiera: Stop Loss</h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                      "Reconocer un error de este calibre es vital para recuperar la confianza de Wall Street. Al limpiar el balance, Microsoft eliminó la incertidumbre sobre su exposición a hardware fallido."
                    </p>
                    <p className="text-[11px] text-blue-400 font-black uppercase tracking-widest mb-8">
                      La salida de Nokia marcó un cambio en la manera en que Microsoft evaluaba y priorizaba sus inversiones.
                    </p>
                    <div className="flex items-center space-x-3 text-red-500 bg-red-500/10 p-4 rounded border border-red-500/20">
                       <AlertCircle size={20} />
                       <span className="text-[10px] font-black uppercase tracking-[0.2em]">Ejecución de Disciplina de Capital</span>
                    </div>
                 </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 4: CULTURE (LA MENTALIDAD) */}
        {activeSection === SectionId.CULTURE && (
          <section className="h-full w-full flex flex-col items-center justify-center px-12 md:px-24 animate-in fade-in slide-in-from-right-8 duration-700 bg-white relative">
            <SlideHeader 
              module="Fase 03: Transformación Cultural" 
              title="El Activo Invisible" 
            />
            
            <div className="max-w-6xl w-full flex flex-col space-y-8 mt-12">
              <div className="text-center">
                <h3 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight italic leading-tight max-w-3xl mx-auto">
                  "La cultura se come a la estrategia en el desayuno."
                </h3>
                <p className="text-blue-600 font-bold uppercase tracking-[0.2em] text-[9px] mt-2">
                  — Peter Drucker (adoptado por Satya Nadella)
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* Era Ballmer */}
                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col group overflow-hidden relative transition-all hover:shadow-lg">
                  <div className="absolute -bottom-6 -right-6 text-gray-200 opacity-20"><Users size={160} /></div>
                  <div className="relative z-10">
                    <div className="inline-block px-3 py-1 bg-gray-200 text-gray-500 text-[9px] font-black uppercase mb-4 tracking-widest">Era Ballmer (Fixed Mindset)</div>
                    <h4 className="text-xl font-bold mb-4 text-gray-800">La Cultura del 'Sabelotodo'</h4>
                    <ul className="space-y-3 text-sm text-gray-500">
                      <li className="flex items-start"><AlertCircle size={16} className="mr-3 mt-0.5 flex-shrink-0 text-gray-400" /> Competencia interna destructiva (silos)</li>
                      <li className="flex items-start"><AlertCircle size={16} className="mr-3 mt-0.5 flex-shrink-0 text-gray-400" /> Miedo al error (parálisis por análisis)</li>
                      <li className="flex items-start"><AlertCircle size={16} className="mr-3 mt-0.5 flex-shrink-0 text-gray-400" /> Obsesión por defender el legado (Windows)</li>
                    </ul>
                  </div>
                </div>

                {/* Era Nadella */}
                <div className="p-8 bg-blue-600 text-white rounded-2xl shadow-xl flex flex-col group overflow-hidden relative transition-all hover:scale-[1.01]">
                  <div className="absolute -bottom-6 -right-6 text-white opacity-10"><Zap size={160} /></div>
                  <div className="relative z-10">
                    <div className="inline-block px-3 py-1 bg-blue-500 text-blue-100 text-[9px] font-black uppercase mb-4 tracking-widest">Era Nadella (Growth Mindset)</div>
                    <h4 className="text-xl font-bold mb-4">La Cultura del 'Aprendelotodo'</h4>
                    <ul className="space-y-3 text-sm text-blue-100">
                      <li className="flex items-start"><Zap size={16} className="mr-3 mt-0.5 flex-shrink-0" /> Colaboración radical ("One Microsoft")</li>
                      <li className="flex items-start"><Zap size={16} className="mr-3 mt-0.5 flex-shrink-0" /> Empatía con el cliente sobre el ego del producto</li>
                      <li className="flex items-start"><Zap size={16} className="mr-3 mt-0.5 flex-shrink-0" /> Iteración continua: "Falla rápido, aprende rápido"</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl text-center shadow-sm max-w-4xl mx-auto">
                 <p className="text-xs md:text-sm text-blue-800 font-semibold italic">
                   "Financieramente, una cultura tóxica es un impuesto oculto. Ralentiza la ejecución y aumenta la rotación de talento. Nadella eliminó esa fricción permitiendo que la Nube despegara."
                 </p>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 5: PIVOT (REINGENIERÍA) */}
        {activeSection === SectionId.PIVOT && (
          <section className="h-full w-full flex flex-col justify-center px-12 md:px-24 animate-in fade-in slide-in-from-right-8 duration-700 relative">
            <SlideHeader 
              module="Fase 04: Reingeniería de Ingresos" 
              title="El Pivot Estratégico a la Nube (SaaS)" 
            />
            <div className="max-w-7xl w-full mt-24">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col transition-all hover:bg-white hover:shadow-xl">
                   <div className="mb-8">
                     <div className="inline-block px-3 py-1 bg-gray-200 text-gray-600 text-[10px] font-black uppercase mb-4">Venta Transaccional</div>
                     <h3 className="text-2xl font-bold mb-4 text-gray-400">Software Licenciado (Legacy)</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">
                       Un modelo de pago único que obligaba a Microsoft a buscar nuevos clientes cada mes para mantener el crecimiento.
                     </p>
                   </div>
                   <div className="text-4xl font-black text-gray-300 mt-auto">$180 <span className="text-sm font-normal">venta única</span></div>
                </div>

                <div className="bg-blue-600 p-8 rounded-2xl text-white shadow-2xl flex flex-col relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform"><Cloud size={140} /></div>
                   <div className="relative z-10 mb-8">
                     <div className="inline-block px-3 py-1 bg-blue-500 text-blue-100 text-[10px] font-black uppercase mb-4">SaaS Economy</div>
                     <h3 className="text-2xl font-bold mb-4">Modelo Azure & Office 365</h3>
                     <p className="text-blue-100 text-sm leading-relaxed">
                       Ingresos recurrentes que se acumulan. La empresa dejó de vender productos para empezar a vender relaciones de largo plazo.
                     </p>
                   </div>
                   <div className="text-4xl font-black mt-auto relative z-10">$100 <span className="text-sm font-normal text-blue-200">/ usuario / año</span></div>
                </div>
              </div>
              
              {/* Bloque Financiero Añadido */}
              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
                  <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3">Implicancias financieras del modelo SaaS:</h4>
                  <ul className="space-y-2">
                    {['Mayor predictibilidad de flujos de caja', 'Ingresos recurrentes reducen volatilidad', 'Incremento del Lifetime Value (LTV) frente a venta transaccional'].map((text) => (
                      <li key={text} className="text-xs text-blue-900 flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-center">
                   <div className="px-10 py-5 bg-white border border-blue-100 rounded-2xl flex items-center space-x-6 shadow-sm">
                      <div className="text-center">
                         <span className="text-[9px] font-black text-blue-400 uppercase block mb-1">Previsibilidad</span>
                         <span className="text-xl font-black text-blue-600">+90%</span>
                      </div>
                      <div className="h-8 w-[1px] bg-blue-200"></div>
                      <div className="text-center">
                         <span className="text-[9px] font-black text-blue-400 uppercase block mb-1">Lifetime Value (LTV)</span>
                         <span className="text-xl font-black text-blue-600">+4.5x</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 4.5: METRICS (UBICADA DESPUÉS DE PIVOT) */}
        {activeSection === SectionId.METRICS && (
          <section className="h-full w-full flex flex-col items-center justify-center px-12 md:px-24 animate-in fade-in slide-in-from-right-8 duration-700 bg-slate-50 relative">
            <SlideHeader 
              module="Fase 05: Evolución de KPIs" 
              title="De Performance Metrics a Power Metrics" 
            />
            
            <div className="max-w-6xl w-full flex flex-col space-y-12 mt-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Legacy Metrics */}
                <div className="p-10 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col group overflow-hidden relative transition-all">
                  <div className="absolute -bottom-6 -right-6 text-gray-50 opacity-10"><LayoutDashboard size={180} /></div>
                  <div className="relative z-10">
                    <div className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-[9px] font-black uppercase mb-6 tracking-widest">Performance Metrics (Legacy)</div>
                    <p className="text-gray-400 text-xs mb-6 uppercase font-bold tracking-widest">(Métricas que miden el pasado)</p>
                    <ul className="space-y-4">
                      {['Ingresos totales', 'Margen operativo', 'EPS trimestral', 'Licencias vendidas'].map((item) => (
                        <li key={item} className="flex items-center space-x-3 text-gray-600 font-semibold">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Power Metrics */}
                <div className="p-10 bg-white rounded-2xl border-2 border-blue-600 shadow-xl flex flex-col group overflow-hidden relative transition-all">
                  <div className="absolute -bottom-6 -right-6 text-blue-50 opacity-20"><TrendingUp size={180} /></div>
                  <div className="relative z-10">
                    <div className="inline-block px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase mb-6 tracking-widest">Power Metrics (Narrativa Financiera)</div>
                    <p className="text-blue-400 text-xs mb-6 uppercase font-bold tracking-widest">(Métricas que explican creación de valor futura)</p>
                    <ul className="space-y-4">
                      {['Usuarios activos (MAU / DAU)', 'Ingresos recurrentes anuales (ARR)', 'Consumo real de Azure', 'Retención y Lifetime Value (LTV)'].map((item) => (
                        <li key={item} className="flex items-center space-x-3 text-gray-900 font-bold">
                          <CheckCircle2 size={18} className="text-blue-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center p-10 bg-white rounded-3xl border border-blue-100 shadow-2xl max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-blue-900 font-black tracking-tight leading-snug italic">
                  “Microsoft cambio el modelo, pero también cambio cómo explicaba el negocio al mercado.”
                </p>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 6: REBIRTH (EXPANSIÓN) */}
        {activeSection === SectionId.REBIRTH && (
          <section className="h-full w-full flex flex-col justify-center px-12 md:px-24 animate-in fade-in slide-in-from-right-8 duration-700 bg-white relative">
            <SlideHeader 
              module="Fase Final: Resultados de Mercado" 
              title="La Expansión de Múltiplos" 
            />
            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center mt-20">
              <div className="bg-blue-600 p-16 rounded-3xl shadow-2xl text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 text-white/10 rotate-12"><TrendingUp size={240} /></div>
                <h3 className="text-xl font-bold mb-10 uppercase tracking-[0.2em] opacity-80">Valoración Post-Pivot</h3>
                <div className="space-y-10 relative z-10">
                  <div className="flex justify-between items-end border-b border-blue-400 pb-5">
                    <span className="text-blue-100 text-xs uppercase tracking-widest font-bold">Múltiplo PER (2013)</span>
                    <span className="text-2xl font-black">8.5x</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-blue-400 pb-5">
                    <span className="text-blue-100 text-xs uppercase tracking-widest font-bold">Múltiplo PER (2015+)</span>
                    <span className="text-3xl font-black text-green-300">22.0x</span>
                  </div>
                  <div className="pt-4">
                    <span className="text-white text-[10px] uppercase tracking-widest font-black block mb-2 opacity-60">Capitalización de Mercado</span>
                    <span className="text-5xl font-black text-white">$450B <span className="text-xs font-normal opacity-50">(vs $250B en 2013)</span></span>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="space-y-4">
                  <h4 className="text-2xl font-black text-gray-900 tracking-tighter">La Nueva Era de Azure e IA</h4>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    Al cambiar el enfoque financiero y cultural, Microsoft pasó de ser un activo de "valor" (barato) a un activo de "crecimiento" (premium). 
                  </p>
                </div>
                
                {/* Bloque Interpretativo Añadido */}
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
                  <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Lectura financiera del mercado:</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Zap size={14} className="text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-slate-700 font-semibold">Menor incertidumbre estratégica → menor prima de riesgo</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Zap size={14} className="text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-slate-700 font-semibold">Power Metrics + SaaS → reducción del WACC implícito</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-8 bg-gray-50 rounded-xl border border-gray-100 flex flex-col justify-center">
                     <div className="text-blue-600 font-black text-2xl">AZURE</div>
                     <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">Motor de Crecimiento</p>
                  </div>
                  <div className="p-8 bg-gray-50 rounded-xl border border-gray-100 flex flex-col justify-center">
                     <div className="text-blue-600 font-black text-2xl">M365</div>
                     <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">Ingresos SaaS Recurrentes</p>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveSection(SectionId.COVER)}
                  className="inline-flex items-center space-x-3 text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] hover:text-blue-800 transition-all border-b border-blue-100 pb-1"
                >
                  <ArrowRight size={14} className="rotate-180" />
                  <span>Volver a la carátula</span>
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default App;
