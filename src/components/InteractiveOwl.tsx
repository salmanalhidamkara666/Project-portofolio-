import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Eye, Shield, Cpu, RefreshCw, Radio } from 'lucide-react';

export default function InteractiveOwl() {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse position coordinates for eye tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply smooth springs
  const eyeX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const eyeY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      
      // Center of the owl/card
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Relative offset from current card center (-1 to 1 range, limited)
      const diffX = (e.clientX - centerX) / (window.innerWidth / 2);
      const diffY = (e.clientY - centerY) / (window.innerHeight / 2);
      
      // Limit eye look range to +/- 12 pixels
      mouseX.set(diffX * 12);
      mouseY.set(diffY * 12);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Simulated live cyber diagnostics
  const [diagnosticMsg, setDiagnosticMsg] = useState("VIGILANCE INTERFACE ONLINE");
  const diagnostics = [
    "COGNITIVE LATENCY: 1.4ms",
    "DEEP LEARNING NEURAL MATRIX ACTIVE",
    "SIGHT WAVE SPECTRUM: INFRARED",
    "TACTICAL DECISION EMULATOR: STABLE",
    "INTELLIGENT WORKFLOW: STREAMLINED",
    "SYS RECONNAISSANCE: STATUS EXCELLENT",
    "OWL MATRIX SYNCHRONIZED: 100%"
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (hovered) {
        setDiagnosticMsg("CYBERNETIC INSTINCT: TRIGGERED");
      } else {
        index = (index + 1) % diagnostics.length;
        setDiagnosticMsg(diagnostics[index]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [hovered]);

  return (
    <div 
      ref={cardRef}
      id="neon-owl-widget-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full max-w-[390px] mx-auto aspect-square rounded-3xl glass-panel p-6 overflow-hidden flex flex-col justify-between border-glow/10 transition-all duration-700 shadow-2xl hover:border-glow/30"
      style={{
        boxShadow: hovered 
          ? '0 20px 50px rgba(124, 58, 237, 0.15), inset 0 0 20px rgba(192, 132, 252, 0.1)' 
          : '0 10px 30px rgba(0,0,0,0.5)',
      }}
    >
      {/* Visual background ambient beam */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/10 blur-[60px] transition-all duration-1000 ${hovered ? 'scale-125 opacity-100 bg-glow/15' : 'opacity-60'}`} />

      {/* Cyber circuitry SVG decorative corners */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <path d="M 20,40 L 40,40 L 40,20" fill="none" stroke="#C084FC" strokeWidth="1" />
        <circle cx="20" cy="40" r="2" fill="#C084FC" />
        <path d="M 370,40 L 350,40 L 350,20" fill="none" stroke="#C084FC" strokeWidth="1" />
        <circle cx="370" cy="40" r="2" fill="#C084FC" />
        <path d="M 20,350 L 40,350 L 40,370" fill="none" stroke="#C084FC" strokeWidth="1" />
        <circle cx="20" cy="350" r="2" fill="#C084FC" />
        <path d="M 370,350 L 350,350 L 350,370" fill="none" stroke="#C084FC" strokeWidth="1" />
        <circle cx="370" cy="350" r="2" fill="#C084FC" />
      </svg>

      {/* Widget Header bar */}
      <div className="flex items-center justify-between z-10 w-full">
        <div className="flex items-center gap-2">
          <Radio className={`w-4 h-4 ${hovered ? 'text-glow animate-ping' : 'text-primary'}`} />
          <span className="text-[10px] font-mono tracking-[0.2em] text-white/50 uppercase">
            COGNITIVE UNIT
          </span>
        </div>
        <div className="px-2 py-0.5 rounded bg-glow/10 border border-glow/20 text-[9px] font-mono text-glow">
          SALMAN_BOT_V1
        </div>
      </div>

      {/* Main Owl Vector Composition */}
      <div className="relative flex-1 flex items-center justify-center py-4 z-10" id="interactive-owl-canvas-surface">
        <div className="relative w-56 h-56 flex items-center justify-center">
          {/* Outer Cyber Shield Shell Vector */}
          <svg 
            viewBox="0 0 100 100" 
            className={`w-full h-full transition-all duration-1000 ${hovered ? 'scale-105 rotate-1' : ''}`}
          >
            {/* Outline of futuristic owl head/shield design */}
            <defs>
              <linearGradient id="cyber-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#A855F7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#C084FC" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="cyber-wing-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Futuristic Head Shield Frame */}
            <path 
              d="M 50,5 L 85,25 L 80,65 L 50,95 L 20,65 L 15,25 Z" 
              fill="rgba(5, 1, 10, 0.4)" 
              stroke="url(#cyber-grad)" 
              strokeWidth="2" 
              className="drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]"
            />

            {/* Circuit traces on the side panels */}
            <path d="M 23,30 L 35,42 L 35,55" fill="none" stroke="rgba(192, 132, 252, 0.3)" strokeWidth="1" />
            <circle cx="35" cy="55" r="1.5" fill="#C084FC" />

            <path d="M 77,30 L 65,42 L 65,55" fill="none" stroke="rgba(192, 132, 252, 0.3)" strokeWidth="1" />
            <circle cx="65" cy="55" r="1.5" fill="#C084FC" />

            {/* Forehead V-plate and AI Processor chip design */}
            <path d="M 40,15 L 50,28 L 60,15" fill="none" stroke="#C084FC" strokeWidth="1.5" />
            
            {/* Structural Cyber Beak */}
            <polygon 
              points="46,46 54,46 50,58" 
              fill="#A855F7" 
              className={`transition-all duration-500 origin-center ${hovered ? 'scale-y-[1.15] fill-glow' : 'opacity-80'}`}
            />
          </svg>

          {/* Absolute Eyes Overlay (Centered perfectly above the SVG nodes) */}
          <div className="absolute inset-0 flex justify-center items-center gap-12" style={{ top: '-14px' }}>
            {/* Left Eye */}
            <div className="relative w-14 h-14 rounded-full border border-primary/40 bg-black/70 flex items-center justify-center overflow-hidden">
              {/* Outer mechanical revolving ring */}
              <div 
                className={`absolute inset-1 rounded-full border border-dashed border-glow/30 ${hovered ? 'animate-spin-slow' : 'animate-spin'}`}
                style={{ animationDuration: hovered ? '8s' : '15s' }}
              />
              
              {/* Eye Hologram Scan Grid */}
              <div className="absolute inset-2 rounded-full bg-radial from-glow/20 via-transparent to-transparent opacity-80" />
              
              {/* Interactive Reticle Tracking Pupil */}
              <motion.div 
                style={{ x: eyeX, y: eyeY }}
                className="relative w-5 h-5 rounded-full bg-gradient-to-tr from-primary to-glow flex items-center justify-center shadow-[0_0_15px_#C084FC]"
              >
                {/* Micro pupil reflection */}
                <div className="w-1.5 h-1.5 rounded-full bg-white opacity-80 absolute top-1 left-1" />
              </motion.div>
            </div>

            {/* Right Eye */}
            <div className="relative w-14 h-14 rounded-full border border-primary/40 bg-black/70 flex items-center justify-center overflow-hidden">
              {/* Outer mechanical revolving ring */}
              <div 
                className={`absolute inset-1 rounded-full border border-dashed border-glow/30 ${hovered ? 'animate-spin-slow' : 'animate-spin'}`}
                style={{ animationDuration: hovered ? '8s' : '15s' }}
              />
              
              {/* Eye Hologram Scan Grid */}
              <div className="absolute inset-2 rounded-full bg-radial from-glow/20 via-transparent to-transparent opacity-80" />
              
              {/* Interactive Reticle Tracking Pupil */}
              <motion.div 
                style={{ x: eyeX, y: eyeY }}
                className="relative w-5 h-5 rounded-full bg-gradient-to-tr from-primary to-glow flex items-center justify-center shadow-[0_0_15px_#C084FC]"
              >
                {/* Micro pupil reflection */}
                <div className="w-1.5 h-1.5 rounded-full bg-white opacity-80 absolute top-1 left-1" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Widget Footer System State details */}
      <div className="w-full mt-2 font-mono flex flex-col gap-1.5 text-[10px] text-left text-white/40">
        <div className="flex justify-between border-t border-white/5 pt-3">
          <span className="flex items-center gap-1">
            <Cpu className={`w-3.5 h-3.5 text-primary ${hovered ? 'animate-pulse' : ''}`} />
            PROCESSOR CORE:
          </span>
          <span className="text-white/80 font-semibold text-right">
            {hovered ? 'BOOST 4.20 GHz' : 'NOMINAL 2.45 GHz'}
          </span>
        </div>
        
        <div className="flex justify-between text-[9px] text-[#A855F7] tracking-wider animate-pulse font-mono">
          <span className="flex items-center gap-1">
            <RefreshCw className={`w-3 h-3 ${hovered ? 'animate-spin' : ''}`} />
            DIAGNOSTICS:
          </span>
          <span className="text-glow font-bold">{diagnosticMsg}</span>
        </div>
      </div>
    </div>
  );
}
