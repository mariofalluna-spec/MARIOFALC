import React, { useState, useEffect, useRef } from 'react';
import { Phone, MapPin, Clock, Calendar, MessageCircle, Sparkles, Gem, Smile, Crown, Layers } from 'lucide-react';

// --- Assets ---
const BG_IMAGE_URL = "https://f005.backblazeb2.com/file/CLINICADENTALSANMIGUEL/Based_on_this_202601261549.jpeg";
const LOGO_URL = "https://f005.backblazeb2.com/file/CLINICADENTALSANMIGUEL/305315205_593095935845801_4397849618294542768_n.jpg";
const MAP_LINK = "https://maps.app.goo.gl/pKKudN64Kaj552A77";
const WHATSAPP_NUMBER = "51947913346";

// --- Types ---
type Position = {
  x: number;
  y: number;
};

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false); 
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  // Periodic Glow Effect
  useEffect(() => {
    const glowInterval = setInterval(() => {
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), 2000); // Glow lasts for 2 seconds
    }, 8000); // Triggers every 8 seconds

    return () => clearInterval(glowInterval);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20quisiera%20agendar%20una%20cita.`, '_blank');
  };

  // Configuration for specialties - Unified Blue Theme
  const specialties = [
    { name: 'Implantes', icon: Gem },
    { name: 'Diseño de Sonrisa', icon: Sparkles },
    { name: 'Ortodoncia', icon: Smile },
    { name: 'Coronas', icon: Crown },
    { name: 'Prótesis', icon: Layers }
  ];

  return (
    <div 
      ref={containerRef}
      className="relative w-full overflow-x-hidden bg-slate-50 text-slate-900 selection:bg-cyan-100 font-sans"
    >
      {/* --- Entrance Animation Overlay --- */}
      <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-500 delay-[1400ms] ${isLoaded ? 'pointer-events-none opacity-0' : 'opacity-100'}`}>
          {/* Top Curtain */}
          <div className={`absolute top-0 left-0 w-full h-[55%] bg-white z-20 transition-transform duration-[1800ms] ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform ${isLoaded ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className="absolute -bottom-[12vh] left-1/2 -translate-x-1/2 w-[140%] h-[24vh] bg-white rounded-[50%] shadow-[0_10px_30px_rgba(0,0,0,0.05)]"></div>
          </div>
          {/* Bottom Curtain */}
          <div className={`absolute bottom-0 left-0 w-full h-[55%] bg-white z-20 transition-transform duration-[1800ms] ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform ${isLoaded ? 'translate-y-full' : 'translate-y-0'}`}>
             <div className="absolute -top-[12vh] left-1/2 -translate-x-1/2 w-[140%] h-[24vh] bg-white rounded-[50%] shadow-[0_-10px_30px_rgba(0,0,0,0.05)]"></div>
          </div>
          {/* Center Content */}
          <div className={`relative z-30 flex flex-col items-center gap-6 transition-all duration-700 ease-out ${isLoaded ? 'opacity-0 scale-125 blur-sm' : 'opacity-100 scale-100'}`}>
             <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full animate-pulse"></div>
                <img src={LOGO_URL} alt="Loading" className="relative w-24 h-24 rounded-full border border-slate-100 shadow-[0_10px_40px_rgba(6,182,212,0.15)]" />
             </div>
             <div className="w-24 h-12 border-b-4 border-cyan-500 rounded-[100%] shadow-[0_8px_30px_rgba(6,182,212,0.2)] animate-bounce-slight"></div>
          </div>
       </div>

      {/* --- Background Image Layer --- */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out opacity-20 grayscale-[0.3]"
        style={{ 
          backgroundImage: `url(${BG_IMAGE_URL})`,
          transform: `scale(1.1)`
        }}
      />


      {/* --- Main Content Layout --- */}
      <div className="relative z-10 flex flex-col w-full">
        
        {/* --- Hero Section --- */}
        <section className="relative w-full min-h-[100dvh] flex flex-col">
          
          {/* Header */}
          <header className="w-full p-6 md:px-12 md:py-8 flex flex-col xl:flex-row items-center justify-between bg-white/70 backdrop-blur-md border-b border-slate-200/50 gap-6 xl:gap-0 z-30">
            {/* Logo */}
            <div className="flex items-center gap-4 group/logo cursor-pointer select-none">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 blur-lg opacity-0 group-hover/logo:opacity-30 transition-opacity duration-500"></div>
                <img 
                  src={LOGO_URL} 
                  alt="Clínica Dental San Miguel Logo" 
                  className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] group-hover/logo:scale-105 transition-all duration-500"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-slate-800 drop-shadow-sm font-serif pb-1">CLÍNICA DENTAL</h1>
                <h2 className="text-xs md:text-sm uppercase tracking-[0.35em] font-bold mt-1 text-cyan-600">San Miguel</h2>
              </div>
            </div>

            {/* Specialties */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
               <span className="text-[10px] md:text-xs font-medium tracking-[0.25em] text-slate-400 uppercase pb-1 md:pb-0">Nuestras Especialidades:</span>
               <nav className="flex flex-wrap justify-center gap-2 md:gap-3">
                {specialties.map((spec) => (
                  <div 
                    key={spec.name} 
                    className="group/pill flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-cyan-50 border border-cyan-100 text-[10px] md:text-sm font-bold text-cyan-700 transition-all duration-300 ease-out cursor-pointer hover:text-white hover:bg-cyan-600 hover:border-transparent hover:shadow-[0_4px_15px_rgba(6,182,212,0.3)] shadow-sm"
                  >
                    <spec.icon size={12} className="text-cyan-600 group-hover:text-white transition-colors md:w-[14px] md:h-[14px]" />
                    <span className="tracking-wider uppercase">{spec.name}</span>
                  </div>
                ))}
              </nav>
            </div>
          </header>

          {/* Centered Main Text */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 z-20 text-center">
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-slate-800 leading-tight tracking-tight mb-4 max-w-5xl">
               Tu sonrisa, diseñada por profesionales de clase mundial
             </h1>
             <h2 className="text-lg md:text-xl font-bold text-cyan-600 uppercase tracking-[0.2em] mb-8">
               Más de 15 años de excelencia y confianza
             </h2>
             <p className="max-w-2xl text-slate-500 text-lg md:text-xl font-light leading-relaxed">
               Combinamos tecnología de vanguardia y formación internacional para brindarte la salud bucal que mereces.
             </p>
          </div>

          {/* CTA Button */}
          <div className="fixed bottom-6 right-4 md:bottom-12 md:right-12 z-50">
             <div className="relative group">
               {/* Ambient glow */}
               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full blur-3xl transition-all duration-1000 
                  ${isGlowing ? 'bg-cyan-400/20 scale-110' : 'bg-cyan-400/5 group-hover:bg-cyan-400/15 scale-100'}`}>
               </div>
               
               <button 
                onClick={openWhatsApp}
                className={`relative flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-full bg-cyan-600 text-white transition-all duration-500 shadow-[0_20px_50px_rgba(6,182,212,0.3)]
                  ${isGlowing ? 'scale-105 bg-cyan-500' : 'scale-100'}
                  hover:scale-110 active:scale-95 group-hover:shadow-[0_25px_60px_rgba(6,182,212,0.4)]
                `}
               >
                 <Calendar className="mb-2 w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                 <span className="font-serif italic text-base md:text-xl leading-none">Agendar</span>
                 <span className="text-[9px] md:text-xs uppercase tracking-[0.2em] mt-1 font-bold">Cita</span>
               </button>
             </div>
          </div>
        </section>

        {/* Hero Section content ends */}

        {/* --- Footer Section --- */}
        <footer className="w-full bg-white py-16 md:py-24 px-6 md:px-16 border-t border-slate-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            
            {/* Address */}
            <div className="flex flex-col items-center md:items-start group">
              <h3 className="text-xl font-serif italic text-slate-800 mb-6 font-bold">Ubicación</h3>
              <p className="text-slate-500 text-sm md:text-base mb-6 leading-relaxed">
                Av. José de la Riva Agüero 406A,<br/>San Miguel 15087
              </p>
              <a 
                href={MAP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-600 text-xs uppercase tracking-widest font-bold hover:text-cyan-700 transition-colors bg-cyan-50 px-4 py-2 rounded-full"
              >
                <MapPin size={14} />
                Ver en Google Maps
              </a>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-serif italic text-slate-800 mb-6 font-bold">Horario</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-400 text-[10px] md:text-xs mb-1 uppercase tracking-widest">Lunes a Viernes</p>
                  <p className="text-slate-800 font-bold text-xl tracking-tight">10:00 am - 8:00 pm</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] md:text-xs mb-1 uppercase tracking-widest">Sábados</p>
                  <p className="text-slate-800 font-bold text-xl tracking-tight">10:00 am - 6:00 pm</p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-slate-500 text-sm">
                <Clock size={16} className="text-cyan-500" />
                <span>Atención previa cita</span>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-serif italic text-slate-800 mb-6 font-bold">Contacto</h3>
              <p className="text-slate-500 text-sm md:text-base mb-6">Atención inmediata vía WhatsApp</p>
              <button 
                onClick={openWhatsApp}
                className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-sm tracking-widest transition-all duration-300 hover:bg-cyan-600 hover:shadow-lg hover:scale-105"
              >
                <MessageCircle size={18} />
                947 913 346
              </button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between text-slate-400 text-[10px] uppercase tracking-widest mt-16 pt-8 border-t border-slate-50">
            <span>&copy; {new Date().getFullYear()} Clínica Dental San Miguel</span>
            <div className="flex gap-6 mt-4 md:mt-0">
               <span className="hover:text-cyan-600 cursor-pointer transition-colors">Facebook</span>
               <span className="hover:text-cyan-600 cursor-pointer transition-colors">Instagram</span>
            </div>
          </div>
        </footer>

        {/* --- Map Section (Final de la página) --- */}
        <section className="w-full bg-slate-100 py-12 px-6 overflow-hidden border-t border-slate-200">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-serif italic text-slate-800 mb-2">Nuestra Ubicación</h2>
              <div className="w-12 h-1 bg-cyan-500 mx-auto rounded-full"></div>
              <p className="text-slate-500 text-sm mt-4">Av. José de la Riva Agüero 406A, San Miguel</p>
            </div>
            
            <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-video max-w-xl mx-auto">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.365319803112!2d-77.0863038!3d-12.08705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c96030588673%3A0x6d36e768f00037a3!2sAv.%20Jos%C3%A9%20de%20la%20Riva%20Ag%C3%BCero%20406A%2C%20San%20Miguel%2015087!5e0!3m2!1ses-419!2spe!4v1715148800000" 
                className="absolute inset-0 w-full h-full grayscale-[0.2]"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-center mt-6">
              <a 
                href={MAP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-600 font-bold text-sm hover:underline"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default App;