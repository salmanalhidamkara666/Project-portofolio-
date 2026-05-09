import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, Code2, ShieldAlert, Sparkles, Flame, HelpCircle, Laptop, Settings, CheckCircle
} from 'lucide-react';

interface TechItem {
  name: string;
  category: 'ai' | 'web' | 'cyber';
  description: string;
  masteryLevel: string;
  metric: string;
  color: string;
}

const TECH_ITEMS: TechItem[] = [
  // AI-Powered Dev
  { name: 'Cursor AI', category: 'ai', description: 'Advanced AI agent orchestration, multi-file codebases, custom prompt rules.', masteryLevel: 'Expert', metric: '65% cycle time reduction', color: 'from-violet-500 to-glow' },
  { name: 'Claude AI', category: 'ai', description: 'Highly accurate algorithmic refinement, software architecture and structured reasoning.', masteryLevel: 'Elite', metric: 'Flawless code scaffolding', color: 'from-amber-600 to-orange-400' },
  { name: 'ChatGPT', category: 'ai', description: 'Rapid script drafting, developer helper bots, natural conversation interfaces.', masteryLevel: 'Fluent', metric: 'Dynamic payload modeling', color: 'from-emerald-500 to-teal-400' },
  { name: 'GitHub Copilot', category: 'ai', description: 'Real-time contextual autocompletion and line optimizations.', masteryLevel: 'Synergized', metric: 'Inline velocity catalyst', color: 'from-sky-500 to-blue-600' },
  
  // Web & Automation
  { name: 'HTML5', category: 'web', description: 'Semantic, accessibility-compliant standards (WAI-ARIA) and SEO layouts.', masteryLevel: 'Foundational', metric: 'Lighthouse score ideal', color: 'from-orange-500 to-red-500' },
  { name: 'CSS3', category: 'web', description: 'Innovative interactive designs, grid bento schemes, and custom animations.', masteryLevel: 'Creative', metric: 'Perfect fluid layouts', color: 'from-blue-500 to-indigo-500' },
  { name: 'JavaScript', category: 'web', description: 'Asynchronous event patterns, modern functional logic paradigms.', masteryLevel: 'Advanced', metric: 'Deterministic DOM operations', color: 'from-yellow-400 to-amber-500' },
  { name: 'Google Apps Script', category: 'web', description: 'Custom macros, sheets integrations, and background automation triggers.', masteryLevel: 'Automated Expert', metric: '90%+ office speedup achieved', color: 'from-emerald-600 to-teal-700' },
  { name: 'REST API', category: 'web', description: 'Dynamic endpoint generation, token auth headers, structured payloads.', masteryLevel: 'Robust Architecture', metric: 'Unified secure endpoint integration', color: 'from-violet-500 to-indigo-700' },
  
  // Cyber Sec
  { name: 'Kali Linux', category: 'cyber', description: 'Offensive and defensive security infrastructure, virtualized sandbox audits.', masteryLevel: 'Pen-Tester Profile', metric: 'Sandbox system hardening', color: 'from-slate-700 to-blue-900' },
  { name: 'Metasploit', category: 'cyber', description: 'Practical payload trigger development, vulnerability vetting, sandbox modeling.', masteryLevel: 'Exploit Auditing', metric: 'CVE mitigation workflows', color: 'from-rose-600 to-red-700' },
  { name: 'Nmap', category: 'cyber', description: 'Port scanning, service monitoring, network footprint maps.', masteryLevel: 'Advanced Networker', metric: 'Secure packet analyzer', color: 'from-cyan-500 to-emerald-400' }
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'web' | 'cyber'>('all');
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(TECH_ITEMS[0]);

  const filteredTech = TECH_ITEMS.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <div className="w-full space-y-10" id="tech-stack-interface-block">
      {/* Selection Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-center" id="tech-filters-tablist">
        {[
          { id: 'all', label: 'All Technologies', icon: Cpu },
          { id: 'ai', label: 'AI Copilots & Dev Workflow', icon: Sparkles },
          { id: 'web', label: 'Systems & Web Engineering', icon: Code2 },
          { id: 'cyber', label: 'Information Security & Hardening', icon: ShieldAlert }
        ].map((tab) => {
          const TabIcon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase border transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white border-glow/30 shadow-[0_0_15px_rgba(124,58,237,0.25)]'
                  : 'bg-white/5 border-white/5 text-white/50 hover:text-white hover:bg-white/15'
              }`}
            >
              <TabIcon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Grid: Orbit Hologram Sphere + Bento Grid Diagnostics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Bento: Interactive Orbital Hologram */}
        <div className="lg:col-span-4 rounded-2xl glass-panel border-white/5 p-6 flex flex-col justify-between items-center text-center relative overflow-hidden" style={{ minHeight: '340px' }}>
          {/* Neon Grid Backing */}
          <div className="absolute inset-0 bg-grid-cyber opacity-35" />
          
          <div className="z-10 w-full flex items-center justify-between text-left">
            <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase block">// STACK HELIOPARK</span>
            <span className="px-2 py-0.5 rounded bg-glow/10 text-glow text-[9px] font-mono">DOCKING HUB</span>
          </div>

          {/* Interactive animated orbit display representing AI Developer core */}
          <div className="relative w-48 h-48 my-6 flex items-center justify-center z-10" id="tech-hologram-stage">
            {/* Inner Ring */}
            <div className="absolute inset-4 rounded-full border border-dashed border-primary/40 animate-orbit-inner" />
            
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-glow/20 animate-orbit-outer" />

            {/* Central Node representing Salman */}
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-[#7C3AED] via-glow to-[#05010A] flex items-center justify-center border border-glow/30 shadow-[0_0_30px_#7C3AED]">
              <Cpu className="w-8 h-8 text-white animate-pulse" />
            </div>

            {/* Floating Orbiting elements */}
            <div className="absolute top-2 left-6 w-3.5 h-3.5 rounded-full bg-primary animate-ping" />
            <div className="absolute bottom-4 right-10 w-2 h-2 rounded-full bg-glow animate-bounce" />
            <div className="absolute top-1/2 right-2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_#A855F7]" />
          </div>

          <div className="z-10">
            <p className="text-xs font-mono text-white/50 lowercase leading-relaxed">
              Hover, click or filter technologies on the right to examine exact diagnostic levels, telemetry insights and workflow values.
            </p>
          </div>
        </div>

        {/* Right Bento: Grid items + Details Panel */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Grid list of targeted tech */}
          <div className="glass-panel rounded-2xl border-white/5 p-5 flex flex-col justify-between" style={{ minHeight: '340px' }}>
            <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase block mb-4">// SELECTABLE COMPONENTS</span>
            
            <div className="grid grid-cols-3 gap-3 overflow-y-auto max-h-[300px] fancy-scrollbar pr-1">
              {filteredTech.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setSelectedTech(item)}
                  className={`relative p-3 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                    selectedTech?.name === item.name
                      ? 'bg-glow/10 border-glow/40 shadow-[0_0_15px_rgba(192,132,252,0.15)] text-white'
                      : 'bg-white/5 border-white/5 text-white/60 hover:border-white/10 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color}`} />
                  <span className="text-xs font-semibold tracking-tight uppercase block leading-tight">{item.name}</span>
                </button>
              ))}
            </div>

            <div className="border-t border-white/5 pt-4 mt-4 flex items-center justify-between text-[11px] text-white/40">
              <span className="font-mono">INDEX: {filteredTech.length} ACTIVE LIBS</span>
              <span className="flex items-center gap-1 font-mono uppercase"><Laptop className="w-3.5 h-3.5" /> AGENT SYNERGIZED</span>
            </div>
          </div>

          {/* Details Diagnostic HUD */}
          <div className="glass-panel rounded-2xl border-white/5 p-6 flex flex-col justify-between text-left relative overflow-hidden" style={{ minHeight: '340px' }}>
            {selectedTech ? (
              <div className="space-y-4 h-full flex flex-col justify-between" id="tech-stack-individual-hud">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono tracking-widest text-[#A855F7] uppercase px-2 py-0.5 rounded bg-[#A855F7]/10 inline-block">
                      {selectedTech.category === 'ai' ? 'AI COPILOT' : selectedTech.category === 'web' ? 'WEB ARCH' : 'SECURITY DEV'}
                    </span>
                    <Settings className="w-4 h-4 text-white/20 animate-spin-slow" />
                  </div>

                  <h4 className="text-2xl font-bold font-display text-white tracking-tight">
                    {selectedTech.name}
                  </h4>
                  
                  <div className="h-[1px] bg-white/5" />

                  <p className="text-xs text-white/70 leading-relaxed font-mono">
                    {selectedTech.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-white/40 uppercase block">Telemetry Metric</span>
                    <span className="text-sm font-semibold text-glow font-mono flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 animate-pulse text-glow" />
                      {selectedTech.metric}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
                    <div>
                      <span className="text-[10px] font-mono text-white/40 uppercase block">Expertise Integration</span>
                      <span className="text-xs font-bold text-white font-mono uppercase tracking-wider block mt-1">{selectedTech.masteryLevel}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-white/40 uppercase block">Status Node</span>
                      <span className="text-xs font-bold text-emerald-400 font-mono tracking-wider flex items-center gap-1.5 mt-1">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> SYNCED
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center text-white/30 space-y-2">
                <HelpCircle className="w-8 h-8 opacity-40" />
                <p className="text-xs font-mono">Select any component on the left to examine advanced metrics</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
