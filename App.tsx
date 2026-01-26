import React, { useState, useEffect, useRef } from 'react';
import { Phone, MapPin, Clock, Calendar, MessageCircle, Sparkles, Gem, Smile, Crown, Layers } from 'lucide-react';

// --- Assets ---
const BG_IMAGE_URL = "https://f005.backblazeb2.com/file/CLINICADENTALSANMIGUEL/Based_on_this_202601261549.jpeg";
const LOGO_URL = "https://f005.backblazeb2.com/file/CLINICADENTALSANMIGUEL/305315205_593095935845801_4397849618294542768_n.jpg";
const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=Av.+José+de+la+Riva+Agüero+406A,+San+Miguel+15087";
const WHATSAPP_NUMBER = "51947913346";

// --- Types ---
type Position = {
  x: number;
  y: number;
};

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState<Position>({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle Entrance Animation and Mouse Tracking
  useEffect(() => {
    // Initial center position
    setMousePos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    // Trigger entrance animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200);

    const updatePos = (clientX: number, clientY: number) => {
      setMousePos({ x: clientX, y: clientY });
    };

    const handleMouseMove = (event: MouseEvent) => {
      updatePos(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        updatePos(event.touches[0].clientX, event.touches[0].clientY);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        updatePos(event.touches[0].clientX, event.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchstart', handleTouchStart);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
    };
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
      className="relative min-h-screen w-full overflow-x-hidden bg-slate-950 text-slate-200 selection:bg-cyan-500/30"
    >
      {/* --- Entrance Animation Overlay (Mouth Opening Effect) --- */}
      <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-500 delay-[1400ms] ${isLoaded ? 'pointer-events-none opacity-0' : 'opacity-100'}`}>
          
          {/* Top Curtain */}
          <div className={`absolute top-0 left-0 w-full h-[55%] bg-slate-950 z-20 transition-transform duration-[1800ms] ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform ${isLoaded ? '-translate-y-full' : 'translate-y-0'}`}>
            {/* The Curve (Convex Down - Upper Lip) */}
            <div className="absolute -bottom-[12vh] left-1/2 -translate-x-1/2 w-[140%] h-[24vh] bg-slate-950 rounded-[50%]"></div>
          </div>

          {/* Bottom Curtain */}
          <div className={`absolute bottom-0 left-0 w-full h-[55%] bg-slate-950 z-20 transition-transform duration-[1800ms] ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform ${isLoaded ? 'translate-y-full' : 'translate-y-0'}`}>
             {/* The Curve (Convex Up - Lower Lip) */}
             <div className="absolute -top-[12vh] left-1/2 -translate-x-1/2 w-[140%] h-[24vh] bg-slate-950 rounded-[50%]"></div>
          </div>

          {/* Center Content (Logo/Smile) - Fades out as mouth opens */}
          <div className={`relative z-30 flex flex-col items-center gap-6 transition-all duration-700 ease-out ${isLoaded ? 'opacity-0 scale-125 blur-sm' : 'opacity-100 scale-100'}`}>
             <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full animate-pulse"></div>
                <img src={LOGO_URL} alt="Loading" className="relative w-24 h-24 rounded-full border border-white/10 shadow-[0_0_40px_rgba(6,182,212,0.2)]" />
             </div>
             {/* Smile Shape */}
             <div className="w-24 h-12 border-b-4 border-cyan-400/80 rounded-[100%] shadow-[0_4px_20px_rgba(6,182,212,0.4)] animate-bounce-slight"></div>
          </div>
       </div>

      {/* --- Background Image Layer --- */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out opacity-60"
        style={{ 
          backgroundImage: `url(${BG_IMAGE_URL})`,
          // Enable parallax movement on all devices (mouse or touch)
          transform: `scale(1.05) translate(${(mousePos.x - window.innerWidth/2) / 60}px, ${(mousePos.y - window.innerHeight/2) / 60}px)`
        }}
      />

      {/* --- Spotlight / Dark Overlay Layer --- */}
      <div 
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          // Dynamic spotlight following cursor/touch on all devices
          background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(2, 6, 23, 0.96) 100%)`
        }}
      />

      {/* --- Content Layer --- */}
      <div className="relative z-20 flex flex-col min-h-screen justify-between pointer-events-none">
        
        {/* Header */}
        <header className="pointer-events-auto w-full p-6 md:px-12 md:py-8 flex flex-col xl:flex-row items-center justify-between bg-gradient-to-b from-black/90 to-transparent backdrop-blur-[2px] gap-8 xl:gap-0">
          
          {/* Logo & Title */}
          <div className="flex items-center gap-5 group/logo cursor-pointer select-none">
            <div className="relative">
              {/* Logo Glow - Pure Cyan/Blue (No Purple) */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 blur-lg opacity-0 group-hover/logo:opacity-60 transition-opacity duration-500"></div>
              <img 
                src={LOGO_URL} 
                alt="Clínica Dental San Miguel Logo" 
                className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] grayscale-[0.2] group-hover/logo:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="text-center md:text-left">
              {/* Header Text - Pure Cyan/Blue Gradient */}
              <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 drop-shadow-sm font-serif pb-1">CLÍNICA DENTAL</h1>
              <h2 className="text-xs md:text-sm uppercase tracking-[0.35em] font-bold mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 opacity-90">San Miguel</h2>
            </div>
          </div>

          {/* Specialties Section - Refined Layout */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
             <span className="text-[10px] md:text-xs font-medium tracking-[0.25em] text-slate-500 uppercase border-b border-slate-800 pb-1 md:border-none md:pb-0">Especialistas en:</span>
             <nav className="flex flex-wrap justify-center gap-3">
              {specialties.map((spec) => (
                <div 
                  key={spec.name} 
                  className="group/pill flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/40 border border-white/5 backdrop-blur-sm text-xs md:text-sm font-medium text-slate-300 transition-all duration-300 ease-out cursor-pointer hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:border-transparent hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                >
                  <spec.icon size={14} className="text-slate-400 group-hover/pill:text-white transition-colors" />
                  <span className="tracking-wider uppercase">{spec.name}</span>
                </div>
              ))}
            </nav>
          </div>
        </header>

        {/* Central Content: Phrase - Centered in Container (Absolute instead of Fixed) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none w-full px-4 flex flex-col items-center justify-center">
           {/* The requested phrase */}
           <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-center text-white/95 drop-shadow-[0_4px_10px_rgba(0,0,0,1)] leading-tight tracking-wide opacity-90">
             Dale luz a tu sonrisa <br/>
             <span className="text-amber-100/90 not-italic font-light text-xl md:text-4xl mt-4 block tracking-[0.2em] uppercase text-shadow-gold">hoy mismo</span>
           </h1>
        </div>

        {/* CTA Button - Position Logic:
            - Absolute: Stays within the layout container (does not float on scroll)
            - Bottom Right relative to the container
        */}
        <div className="absolute z-50 pointer-events-auto transition-all duration-700 ease-in-out
                        right-4 bottom-8
                        md:right-12 md:bottom-12">
           
           <div className="relative group">
             {/* Ambient glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] md:w-[180px] h-[160px] md:h-[180px] bg-blue-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700"></div>
             
             <button 
              onClick={openWhatsApp}
              // Hover: Cyan -> Blue Gradient (No Purple)
              className="relative flex flex-col items-center justify-center w-36 h-36 md:w-40 md:h-40 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md text-white shadow-[0_0_60px_rgba(0,0,0,0.6)] hover:scale-105 active:scale-95 transition-all duration-500 ease-out hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-600 hover:border-transparent hover:shadow-[0_0_80px_rgba(6,182,212,0.5)] group-hover:text-white"
             >
               <div className="absolute inset-0 rounded-full border border-white/5 scale-90 group-hover:scale-100 group-hover:border-white/20 transition-transform duration-500"></div>
               
               <Calendar size={32} strokeWidth={1.5} className="mb-2 md:mb-3 text-amber-200/80 group-hover:text-white transition-colors duration-300" />
               <span className="font-serif italic text-lg md:text-2xl text-amber-50/90 leading-none group-hover:text-white transition-colors duration-300">Agendar</span>
               <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-amber-500/80 mt-1 font-bold group-hover:text-cyan-100 transition-colors duration-300">Cita</span>
             </button>
           </div>
        </div>

        {/* Footer - Editorial Layout */}
        <div className="pointer-events-auto w-full bg-gradient-to-t from-black via-slate-950/95 to-transparent pt-24 md:pt-32 pb-10 px-6 md:px-16 mt-auto border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
            
            {/* Address - BLUE Theme */}
            <div className="flex flex-col items-center md:items-start group hover:translate-y-[-2px] transition-transform duration-300">
              <h3 className="text-xl font-serif italic text-amber-50/90 mb-4 group-hover:text-cyan-300 transition-colors">Ubicación</h3>
              <div className="w-8 h-[1px] bg-amber-500/30 mb-4 group-hover:bg-cyan-500/50 group-hover:w-16 transition-all duration-500"></div>
              <p className="text-slate-400 text-sm md:text-base mb-4 leading-relaxed font-light tracking-wide group-hover:text-slate-300">
                Av. José de la Riva Agüero 406A,<br/>San Miguel 15087
              </p>
              <a 
                href={MAP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-amber-400/80 text-xs uppercase tracking-widest hover:text-cyan-400 hover:shadow-cyan-500/20 transition-all duration-300 px-3 py-1 rounded-full hover:bg-white/5"
              >
                <MapPin size={14} />
                Ver en Mapa
              </a>
            </div>

            {/* Hours - GOLD Theme */}
            <div className="flex flex-col items-center md:items-start group hover:translate-y-[-2px] transition-transform duration-300">
              <h3 className="text-xl font-serif italic text-amber-50/90 mb-4 group-hover:text-amber-300 transition-colors">Horario</h3>
              <div className="w-8 h-[1px] bg-amber-500/30 mb-4 group-hover:bg-amber-500/80 group-hover:w-16 transition-all duration-500"></div>
              <p className="text-slate-400 text-sm md:text-base font-light tracking-wide mb-1 group-hover:text-slate-300">Lunes a Sábado</p>
              <p className="text-white font-medium text-lg tracking-wide group-hover:text-amber-100 transition-colors">10:00 am - 8:00 pm</p>
            </div>

            {/* Contact - BLUE/INDIGO Theme */}
            <div className="flex flex-col items-center md:items-start group hover:translate-y-[-2px] transition-transform duration-300">
              <h3 className="text-xl font-serif italic text-amber-50/90 mb-4 group-hover:text-blue-300 transition-colors">Contacto</h3>
              <div className="w-8 h-[1px] bg-amber-500/30 mb-4 group-hover:bg-blue-500/50 group-hover:w-16 transition-all duration-500"></div>
              <p className="text-slate-400 text-sm md:text-base mb-5 font-light tracking-wide">Atención personalizada</p>
              <button 
                onClick={openWhatsApp}
                className="flex items-center gap-3 px-6 py-3 bg-slate-900 border border-white/10 text-white rounded-md font-medium text-sm tracking-widest transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:border-transparent hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105"
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                947 913 346
              </button>
            </div>

          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between text-slate-600 text-[10px] uppercase tracking-widest mt-16 pt-8 border-t border-white/5">
            <span>&copy; {new Date().getFullYear()} Clínica Dental San Miguel</span>
            <div className="flex gap-4 mt-2 md:mt-0">
              <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacidad</span>
              <span className="hover:text-slate-400 cursor-pointer transition-colors">Términos</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;