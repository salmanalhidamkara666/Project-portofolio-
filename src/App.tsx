import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Terminal, Shield, ArrowRight, AppWindow, 
  MessageSquare, Cpu, ExternalLink, Calendar, Code, ChevronRight, Menu, X, ArrowUpCircle,
  GraduationCap
} from 'lucide-react';

// Relative path imports
import ParticlesBackground from './components/ParticlesBackground';
import InteractiveOwl from './components/InteractiveOwl';
import AICopilot from './components/AICopilot';
import ProjectShowcase from './components/ProjectShowcase';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scrolling to highlight nav & show backup arrow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = ['hero', 'about', 'projects', 'tech', 'experience', 'certs', 'copilot', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-white bg-[#05010A] font-sans selection:bg-glow selection:text-[#05010A]" id="main-root-workspace">
      {/* Premium Particles and Spotlight Background */}
      <ParticlesBackground />

      {/* Floating Glassmorphism Dock Nav */}
      <nav 
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-2xl border transition-all duration-500 z-40 ${
          scrolled 
            ? 'bg-black/60 backdrop-blur-md border-glow/20 py-2.5 shadow-[0_15px_30px_rgba(0,0,0,0.6)]' 
            : 'bg-white/5 backdrop-blur-sm border-white/5 py-4'
        }`}
        id="floating-navigation-dock"
      >
        <div className="px-5 mx-auto flex items-center justify-between">
          {/* Branded Initials Logo */}
          <button 
            onClick={() => scrollTo('hero')} 
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-glow flex items-center justify-center font-display font-black text-sm tracking-tight shadow-[0_0_15px_rgba(124,58,237,0.4)] group-hover:scale-105 transition-transform duration-300">
              S
            </div>
            <span className="font-display font-medium text-sm tracking-widest uppercase text-white/90 group-hover:text-glow transition-colors">
              SALMAN.DEV
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {[
              { id: 'about', label: 'About' },
              { id: 'projects', label: 'Projects' },
              { id: 'tech', label: 'Tech Stack' },
              { id: 'experience', label: 'Experience' },
              { id: 'certs', label: 'Degrees/Certs' },
              { id: 'copilot', label: 'Ask AI' },
              { id: 'contact', label: 'Contact' }
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                  activeSection === section.id
                    ? 'text-glow bg-glow/10 font-bold border border-glow/20'
                    : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Hero CTAs on Nav */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollTo('copilot')}
              className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-primary to-glow text-xs font-semibold hover:opacity-90 active:scale-95 transition-all duration-300 shadow-md inline-flex items-center gap-1.5 cursor-pointer border border-glow/30"
            >
              <span>AI Agent Consult</span>
              <Cpu className="w-3.5 h-3.5 animate-pulse" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 rounded bg-white/5 border border-white/5 text-white/80 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-20 bg-black/95 border border-white/10 rounded-2xl p-6 z-40 lg:hidden font-mono space-y-4"
          >
            <div className="flex flex-col gap-2 text-left">
              {[
                { id: 'about', label: 'ABOUT BIO' },
                { id: 'projects', label: 'PROJECT SIMULATORS' },
                { id: 'tech', label: 'TECH STANDARDS' },
                { id: 'experience', label: 'JOURNEY TIMELINE' },
                { id: 'certs', label: 'COGNITIVE DEGREES' },
                { id: 'copilot', label: 'ASK MY DIGITAL DOUBLE' },
                { id: 'contact', label: 'SECURE DOCK CONTACT' }
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="py-2.5 px-4 text-xs tracking-widest text-white/70 hover:text-white border-b border-white/5 text-left active:bg-glow/5"
                >
                  {s.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollTo('copilot')}
              className="w-full py-3 bg-gradient-to-r from-primary to-glow text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>LAUNCH AI ASSISTANT</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Structural Body Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-32 pt-28 max-w-7xl">
        
        {/* ====================================================
            1. HERO SECTION
            ==================================================== */}
        <section 
          id="hero" 
          className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-12 pt-8 text-left relative"
        >
          {/* Hero Typography */}
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-glow/10 border border-glow/20 text-xs font-mono text-glow animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SECURE AI PROTOCOLS ENABLED</span>
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.1]" id="hero-title-main">
              SALMAN<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#A855F7] drop-shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                ALHIDAMKARA
              </span>
            </h1>

            <h2 className="text-lg sm:text-2xl font-display font-medium text-white/90">
              AI-Powered Web Developer | Digital Solutions Developer
            </h2>

            <p className="text-sm sm:text-base text-white/60 max-w-lg leading-relaxed font-mono">
              “Building intelligent digital experiences with AI-driven development workflows.”
            </p>

            {/* Micro floating code snippets mockup */}
            <div className="rounded-xl bg-black/60 border border-white/5 p-3.5 font-mono text-[11px] text-white/50 max-w-md relative overflow-hidden flex flex-col gap-1 shadow-2xl">
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-glow/50 animate-ping" />
              <div>
                <span className="text-primary font-bold">const</span> compiler = <span className="text-[#A855F7]">new</span> AIDeveloperSpeedrun({`{`}
              </div>
              <div className="pl-4">
                workflow: <span className="text-glow">'Cursor + Claude + ChatGPT'</span>,
              </div>
              <div className="pl-4">
                proficiency: <span className="text-glow">'State-Logic Automations'</span>,
              </div>
              <div className="pl-4">
                speedMultiplier: <span className="text-glow">'4x Fast Scaffolding'</span>,
              </div>
              <div className="pl-4">
                credentials: [<span className="text-emerald-400">'Graduate'</span>, <span className="text-emerald-400">'English_B2'</span>, <span className="text-emerald-400">'JLPT_A2'</span>]
              </div>
              <div>{`});`}</div>
            </div>

            {/* Glowing CTA actions */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-glow text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl hover:shadow-glow/20 flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-glow/30 text-sm font-semibold text-white transition-all duration-300 cursor-pointer"
              >
                Hire Me
              </button>
            </div>
          </div>

          {/* Interactive Geometric Owl Widget */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <InteractiveOwl />
          </div>
        </section>

        {/* ====================================================
            2. ABOUT SECTION
            ==================================================== */}
        <section id="about" className="space-y-10 scroll-mt-24 text-left">
          <div className="text-left space-y-2">
            <div className="text-glow text-[10px] font-mono tracking-[0.2em] uppercase">// [01 // INTRODUCTION]</div>
            <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
              Engineering Baseline
            </h2>
            <p className="text-xs sm:text-sm text-white/50 font-mono tracking-wider">
              INFORMATICS GRADUATE × AUTOMATION SPECIALIST × INTERNATIONAL COMMUNICATOR
            </p>
          </div>

          {/* Glassmorphism Bento Grid layout for about values */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Graduate details */}
            <div className="md:col-span-8 group rounded-2xl glass-panel border-white/5 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:border-glow/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px]" />
              <div className="space-y-4 z-10 relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#A855F7] tracking-wider font-semibold uppercase px-2 py-0.5 rounded bg-[#A855F7]/10">ACADEMICS</span>
                  <GraduationCap className="w-5 h-5 text-glow" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                  Informatics Engineering Graduate
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-2xl font-mono">
                  Leveraging a deep, computer science equivalent education. Fully trained in fundamental analysis vectors including discrete mathematics, system structures, database schemas, and networking. Ready to integrate into complex high-productivity squads.
                </p>
              </div>

              {/* Layout highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/5 z-10">
                {[
                  { value: 'Discrete Math', label: 'Algorithms' },
                  { value: 'Structured Databases', label: 'Cloud Schemes' },
                  { value: 'Computational Logic', label: 'Protocols' },
                  { value: 'Dynamic Middleware', label: 'Systems API' }
                ].map((item, index) => (
                  <div key={index} className="text-left border-l border-[#A855F7]/30 pl-3">
                    <span className="text-xs font-mono font-bold text-white block">{item.value}</span>
                    <span className="text-[9px] font-mono text-white/40 block mt-0.5 uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI assisted development specialization */}
            <div className="md:col-span-4 group rounded-2xl glass-panel border-[#a855f7]/10 p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:border-glow/30">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-glow/5 rounded-full blur-[40px]" />
              <div className="space-y-4 z-10 relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-glow tracking-wider font-semibold uppercase px-2 py-0.5 rounded bg-glow/10">COGNITIVE ENGINE</span>
                  <Code className="w-4 h-4 text-glow animate-pulse" />
                </div>
                <h3 className="text-lg font-display font-bold text-white tracking-tight">
                  AI-Assisted Development Expert
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-mono">
                  Pioneering direct workflow augmentation. By double-leveraging modern LLM models with highly specialized prompt orchestration, I construct secure, clean full-stack systems with 4x efficiency over traditional manual coders.
                </p>
              </div>

              <div className="border-t border-white/5 pt-4 mt-6 z-10">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/40">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <span>SPEED PROFILE: MAXIMUM VELOCITY</span>
                </div>
              </div>
            </div>

            {/* Fast workflow */}
            <div className="md:col-span-4 group rounded-2xl glass-panel border-white/5 p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:border-glow/30">
              <div className="space-y-4">
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">// WORKFLOW HYPERTENSION</div>
                <h3 className="text-base font-display font-bold text-white tracking-tight">
                  Fast AI-Powered Pipeline
                </h3>
                <p className="text-xs text-white/50 leading-relaxed font-mono">
                  Engineered to scaffold systems within hours. Integrating Cursor and Claude APIs dynamically for rapid UI mockups and database micro-links.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-2.5 text-[9px] font-mono text-white/40 border border-white/5 mt-4 text-left">
                STATE: FAST PROTOTYPE-TO-PROD MATCH
              </div>
            </div>

            {/* Experience in automation */}
            <div className="md:col-span-4 group rounded-2xl glass-panel border-white/5 p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:border-glow/30">
              <div className="space-y-4">
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">// MACRO ENGINES</div>
                <h3 className="text-base font-display font-bold text-white tracking-tight">
                  Cloud Systems Automation
                </h3>
                <p className="text-xs text-white/50 leading-relaxed font-mono">
                  Broad competencies in automated triggers. Developed secure pipeline links between spreadsheets and third-party APIs via Apps Script micro-services.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-2.5 text-[9px] font-mono text-white/40 border border-white/5 mt-4 text-left">
                AUTOMATION TRACES: SYNCED
              </div>
            </div>

            {/* Experience in cybersecurity */}
            <div className="md:col-span-4 group rounded-2xl glass-panel border-white/5 p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:border-glow/30">
              <div className="space-y-4">
                <div className="text-[10px] font-mono text-red-400 uppercase tracking-widest block font-bold">// SEC AUDIT SHELL</div>
                <h3 className="text-base font-display font-bold text-white tracking-tight">
                  Cybersecurity Research
                </h3>
                <p className="text-xs text-white/50 leading-relaxed font-mono">
                  Deeply researched on offensive vulnerability behaviors (Android-13 security model) and mitigation schemes. Fully capable of defensive network auditing.
                </p>
              </div>
              <div className="bg-red-500/10 rounded-lg p-2.5 text-[9px] font-mono text-rose-300 border border-red-500/20 mt-4 text-left font-bold uppercase">
                MITIGATION TEMPLATE: SYSTEM SECURED
              </div>
            </div>

            {/* International Language metrics */}
            <div className="md:col-span-12 group rounded-2xl glass-panel border-white/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden transition-all duration-500 hover:border-glow/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-glow/5 rounded-full blur-[40px]" />
              <div className="space-y-2 max-w-md z-10">
                <h3 className="text-xl font-display font-bold text-white tracking-tight">
                  Global Scale Execution Mindset
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-mono">
                  Fully operational within multicultural scrum environments, providing direct communications for English and Japanese speaking boards.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto z-10">
                <div className="bg-black/60 border border-white/5 hover:border-glow/20 p-4 rounded-xl flex items-center gap-3 w-full sm:w-[190px]">
                  <div className="text-xs font-bold text-center bg-glow/20 text-glow px-2 py-1 rounded tracking-widest font-mono">B2</div>
                  <div className="text-left">
                    <span className="text-white text-xs font-semibold uppercase block font-mono">ENGLISH LINGUISTICS</span>
                    <span className="text-[10px] text-white/40 uppercase block font-mono">Upper-Intermediate</span>
                  </div>
                </div>

                <div className="bg-black/60 border border-white/5 hover:border-glow/20 p-4 rounded-xl flex items-center gap-3 w-full sm:w-[190px]">
                  <div className="text-xs font-bold text-center bg-[#A855F7]/20 text-[#A855F7] px-2 py-1 rounded tracking-widest font-mono">A2</div>
                  <div className="text-left font-mono">
                    <span className="text-white text-xs font-semibold uppercase block">JAPANESE LANGUAGE</span>
                    <span className="text-[10px] text-white/40 uppercase block">Conversational level</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================
            3. PROJECT SHOWCASE SECTION
            ==================================================== */}
        <section id="projects" className="space-y-10 scroll-mt-24 text-left">
          <div className="text-left space-y-2">
            <div className="text-glow text-[10px] font-mono tracking-[0.2em] uppercase">// [02 // COGNITIVE LABS]</div>
            <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
              Project Showcases
            </h2>
            <p className="text-xs sm:text-sm text-white/50 font-mono tracking-wider">
              INSPECT LIVE COMPREHENSIVE EMBEDDED SYSTEM SIMULATORS
            </p>
          </div>

          <ProjectShowcase />
        </section>

        {/* ====================================================
            4. TECH STACK SECTION
            ==================================================== */}
        <section id="tech" className="space-y-10 scroll-mt-24 text-left">
          <div className="text-left space-y-2">
            <div className="text-glow text-[10px] font-mono tracking-[0.2em] uppercase">// [03 // FRAMEWORKS & AUTOMATIONS]</div>
            <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
              Unified Tech Stack
            </h2>
            <p className="text-xs sm:text-sm text-white/50 font-mono tracking-wider">
              PIONEERING COGNITIVE AI AGENT FLOWS WITH CORE MODERN ENVIRONMENTS
            </p>
          </div>

          <TechStack />
        </section>

        {/* ====================================================
            5. EXPERIENCE TIMELINE SECTION
            ==================================================== */}
        <section id="experience" className="space-y-10 scroll-mt-24 text-left">
          <div className="text-left space-y-2">
            <div className="text-glow text-[10px] font-mono tracking-[0.2em] uppercase">// [04 // COMPILER ROADMAP]</div>
            <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
              Professional Journey
            </h2>
            <p className="text-xs sm:text-sm text-white/50 font-mono tracking-wider">
              A CHRONOLOGICAL EVOLUTION OF HIGH-OUTPUT DIGITAL CONTRIBUTIONS
            </p>
          </div>

          <Timeline />
        </section>

        {/* ====================================================
            6. CERTIFICATIONS SECTION
            ==================================================== */}
        <section id="certs" className="space-y-10 scroll-mt-24 text-left">
          <div className="text-left space-y-2">
            <div className="text-glow text-[10px] font-mono tracking-[0.2em] uppercase">// [05 // VERIFIED STATUS]</div>
            <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
              Degrees & Certifications
            </h2>
            <p className="text-xs sm:text-sm text-white/50 font-mono tracking-wider">
              GLOBAL EDUCATION STANDARDS AND ACQUIRED ENGLISH/JAPANESE CREDENTIALS
            </p>
          </div>

          <Certifications />
        </section>

        {/* ====================================================
            7. COGNITIVE CHATBOT DOUBLE
            ==================================================== */}
        <section id="copilot" className="space-y-10 scroll-mt-24 text-left">
          <div className="text-left space-y-2">
            <div className="text-glow text-[10px] font-mono tracking-[0.2em] uppercase">// [06 // REAL-TIME COGNITION]</div>
            <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
              Salman Alhidamkara AI Agent
            </h2>
            <p className="text-xs sm:text-sm text-white/50 font-mono tracking-wider">
              QUERY MY DIRECT DIGITAL REPLICA OPERATING VIA GEMINI ENGINE IN REAL-TIME
            </p>
          </div>

          <AICopilot />
        </section>

        {/* ====================================================
            8. CONTACT SECTION
            ==================================================== */}
        <section id="contact" className="space-y-10 pt-10 scroll-mt-24 text-left">
          <div className="text-left space-y-2">
            <div className="text-glow text-[10px] font-mono tracking-[0.2em] uppercase">// [07 // SECURE HANDSHAKES]</div>
            <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
              Initialize Connection
            </h2>
            <p className="text-xs sm:text-sm text-white/50 font-mono tracking-wider">
              ENGAGE REMOTE TALENT CHANNELS OR SECURE LOCAL RECRUITMENT OFFERS
            </p>
          </div>

          <Contact />
        </section>

      </main>

      {/* ====================================================
          9. FUTURISTIC FOOTER
          ==================================================== */}
      <footer className="relative mt-32 border-t border-white/5 bg-black/80 py-12 px-6 overflow-hidden z-20 text-left font-mono">
        {/* Animated shining line separator */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C084FC]/40 to-transparent animate-pulse" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] text-white/40">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-5 h-5 rounded bg-primary flex items-center justify-center text-white text-[10px] font-black">
                S
              </div>
              <span className="font-display font-bold text-white text-xs tracking-wider uppercase">SALMAN ALHIDAMKARA</span>
            </div>
            <p className="text-white/30 max-w-sm">
              AI-Powered Web Developer & Digital Solutions Developer. Operating globally from a secure automated environment.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {[
              { label: 'Bio Introduction', target: 'about' },
              { label: 'Cyber Labs', target: 'projects' },
              { label: 'Verified Degrees', target: 'certs' },
              { label: 'Cognitive Double', target: 'copilot' },
              { label: 'Secure Dock', target: 'contact' }
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.target)}
                className="hover:text-glow transition-all uppercase tracking-wider text-[10px] cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="text-center md:text-right space-y-1">
            <p className="text-glow font-bold uppercase tracking-widest">// SECURE STATUS ONLINE</p>
            <p>© {new Date().getFullYear()} SALMAN ALHIDAMKARA. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>

      {/* Backup Scroll to Top component */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 p-2 rounded-full border bg-black/60 backdrop-blur-md text-white/50 hover:text-glow hover:border-glow/40 transition-all duration-300 z-50 cursor-pointer ${
          scrolled ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
        title="Scroll back to initialization core"
      >
        <ArrowUpCircle className="w-5 h-5" />
      </button>
    </div>
  );
}
