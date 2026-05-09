import { useEffect, useRef, useState } from 'react';

export default function ParticlesBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [performanceMode, setPerformanceMode] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      containerRef.current.style.setProperty('--mouse-x', `${x}%`);
      containerRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Soft background particles
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate particles
    const count = performanceMode ? 15 : 40;
    const generated = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * -20,
    }));
    setParticles(generated);
  }, [performanceMode]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-[1] select-none bg-[#05010a]"
      id="particles-backdrop-wrap"
    >
      {/* Dynamic spotlight that follows cursor */}
      <div 
        className="absolute inset-0 spotlight-radial transition-opacity duration-1000" 
        id="cyber-spotlight-overlay"
      />

      {/* Cybernetic grid lines */}
      <div 
        className="absolute inset-0 bg-grid-cyber opacity-60" 
        id="cybernetic-background-grid"
      />

      {/* Aurora gradients in background */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-primary/10 to-secondary/5 blur-[120px] animate-pulse" style={{ animationDuration: '15s' }} />
      <div className="absolute bottom-[20%] right-[-5%] w-[45%] h-[45%] rounded-full bg-gradient-to-bl from-glow/10 to-primary/5 blur-[100px] animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute top-[40%] left-[30%] w-[35%] h-[35%] rounded-full bg-gradient-to-r from-secondary/5 to-glow/10 blur-[130px] animate-pulse" style={{ animationDuration: '18s' }} />

      {/* Interactive floating particles */}
      {!performanceMode && particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-glow/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float-slow ${p.duration}s infinite ease-in-out`,
            animationDelay: `${p.delay}s`,
            boxShadow: '0 0 8px rgba(192, 132, 252, 0.4)',
          }}
        />
      ))}

      {/* Horizontal Ambient Line Glow */}
      <div 
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" 
        id="top-glowing-edge-ray"
      />

      {/* Performance mode toggler floating in bottom left corner */}
      <div className="fixed bottom-4 left-4 z-50 pointer-events-auto">
        <button
          id="perf-toggle-btn"
          onClick={() => setPerformanceMode(!performanceMode)}
          className="px-3 py-1.5 text-[10px] font-mono tracking-wider uppercase border border-white/10 rounded-full hover:border-glow/40 bg-black/40 backdrop-blur-md text-white/50 hover:text-white transition-all duration-300 flex items-center gap-1.5"
          title={performanceMode ? "Sparsity optimization is active" : "Enable light performance mode"}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${performanceMode ? 'bg-amber-400' : 'bg-emerald-500'} animate-ping`} />
          <span>{performanceMode ? 'Perf Mode: HIGH' : 'Effects: MAX'}</span>
        </button>
      </div>
    </div>
  );
}
