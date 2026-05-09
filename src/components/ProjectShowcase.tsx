import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  QrCode, ShieldAlert, Globe, Server, CheckCircle2, Star, 
  Terminal, ShieldCheck, Play, ArrowRight, ExternalLink, X, Laptop, UserCheck, Eye, Cpu, Award,
  RefreshCw
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  gradient: string;
  icon: any;
  achievements: string[];
  mockupType: 'qr' | 'exploit' | 'village';
}

const PROJECTS: Project[] = [
  {
    id: 'qr-attendance',
    title: 'QR Code Attendance System',
    subtitle: 'Automated check-ins with digital anti-spoof encryption',
    description: 'An enterprise-grade high-integrity attendance pipeline featuring secure QR verification and Google Sheets backend automation.',
    tech: ['React', 'JavaScript', 'Google Apps Script', 'REST API', 'Secure Tokens'],
    gradient: 'from-violet-600 via-indigo-600 to-glow',
    icon: QrCode,
    achievements: [
      'Reduced queue overhead by 85% compared to manual rosters.',
      'Constructed cryptographic rolling token to prevent QR-cloning spoof vectors.',
      'Engineered bi-directional synchronization with centralized spreadsheet servers via Apps Script micro-services.'
    ],
    mockupType: 'qr'
  },
  {
    id: 'sec-exploit',
    title: 'Android 13 Security Exploitation',
    subtitle: 'Offensive vector exploration and security fortification model',
    description: 'Practical vulnerability discovery and mitigation research exploring kernel space triggers and payload behaviors on modern sandboxed OS versions.',
    tech: ['Kali Linux', 'Metasploit', 'Nmap', 'Bash Scripting', 'OS Shells'],
    gradient: 'from-purple-600 via-fuchsia-700 to-rose-600',
    icon: ShieldAlert,
    achievements: [
      'Pioneered defense workflows for bypass of Android 13 sandboxed filesystems.',
      'Conducted dynamic testing of payload executables utilizing custom script triggers.',
      'Delivered whitepaper detailing remediation blueprints for application sandbox hardening.'
    ],
    mockupType: 'exploit'
  },
  {
    id: 'village-web',
    title: 'Village Government Portal',
    subtitle: 'Empowering local community services with web infrastructure',
    description: 'A modern citizens dashboard and administration console developed for Desa Caringin Cisaat to optimize local council workflow.',
    tech: ['Tailwind CSS', 'Alpine.js', 'Google Sheet Engine', 'Automation Scripts'],
    gradient: 'from-indigo-600 via-purple-600 to-fuchsia-500',
    icon: Globe,
    achievements: [
      'Designed high-availability civic portal facilitating digitized citizen requests.',
      'Reduced average civic application turnaround time from 5 days to 24 hours.',
      'Onboarded administrative staff and drafted cyber-compliance protocols.'
    ],
    mockupType: 'village'
  }
];

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Interactive Simulator States
  const [qrInputs, setQrInputs] = useState({ name: 'Guest Recruiter', email: 'guest@company.com' });
  const [qrHistory, setQrHistory] = useState<{ name: string; timestamp: string; status: string }[]>([
    { name: 'John Doe', timestamp: '09:12:45 AM', status: 'SYNCHRONIZED' },
    { name: 'Alice Smith', timestamp: '09:24:12 AM', status: 'SYNCHRONIZED' }
  ]);
  const [qrScanning, setQrScanning] = useState(false);

  const [exploitTerminal, setExploitTerminal] = useState<string[]>([
    "sys-audit --target android-13_kernel-v5.x",
    "[+] SCANNING FOR REMOTE SYSTEM HOLES...",
    "[!] EXPLOITS IDENTIFIED: CVE-2023-35671 (AID_SYSTEM)",
    "Ready to initiate penetration telemetry..."
  ]);
  const [exploitRunning, setExploitRunning] = useState(false);

  const [civicStats, setCivicStats] = useState({ servicesRequested: 142, averageResolutionSeconds: 41 });
  const [civicSubmittedMessage, setCivicSubmittedMessage] = useState(false);

  const handleRunQRCheckIn = () => {
    if (qrScanning) return;
    setQrScanning(true);
    
    setTimeout(() => {
      const newCheckIn = {
        name: qrInputs.name || 'Anonymous Leader',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        status: 'SYNCHRONIZED'
      };
      setQrHistory(prev => [newCheckIn, ...prev]);
      setQrScanning(false);
    }, 1500);
  };

  const handleRunExploitSim = () => {
    if (exploitRunning) return;
    setExploitRunning(true);
    
    const lines = [
      "[*] Initializing Metasploit Framework telemetry console...",
      "[*] Setting LHOST to localhost.localdomain...",
      "[*] Setting target package descriptor...",
      "[*] Triggering vulnerability CVE-2023-35671 payload sequence...",
      "[!] BYPASS INSTANTIATED | EXPLOITING STACK POINTERS...",
      "[+] ROOT ACCESS SECURED: uid=0(root) gid=0(root)",
      "[*] GENERATING REMEDIATION SPECIFICATION...",
      "[✓] REMEDIATION: Apply security kernel patch SE-74v9 immediately.",
      "[✓] DEFENSIVE SYSTEM FORTIFIED."
    ];

    let currentLine = 0;
    setExploitTerminal(prev => [...prev, "[-] Starting MSF Offensive script..."]);

    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setExploitTerminal(prev => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setExploitRunning(false);
      }
    }, 700);
  };

  return (
    <div className="w-full space-y-12" id="project-showcase-mount flex flex-col items-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => {
          const IconComponent = project.icon;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl glass-panel border-white/5 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-glow/40 glow-border-animate p-1"
              style={{
                background: 'linear-gradient(135deg, rgba(12, 5, 25, 0.45) 0%, rgba(5, 1, 10, 0.6) 100%)',
              }}
            >
              {/* Colored top gradient accent glow bar */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${project.gradient} opacity-80`} />
              
              <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-glow/10 group-hover:border-glow/30 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-glow" />
                    </div>
                    <div className="flex gap-1.5 select-none">
                      <span className="text-[10px] bg-white/5 border border-white/10 text-white/50 px-2 py-0.5 rounded-full font-mono uppercase">
                        ACTIVE CODE
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white tracking-tight mt-4 group-hover:text-glow transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/40 font-mono tracking-wide uppercase mt-1">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-white/60 leading-relaxed mt-3">
                    {project.description}
                  </p>

                  {/* Achievements bullet preview */}
                  <ul className="mt-4 space-y-2 text-[11px] text-white/50 text-left list-none">
                    {project.achievements.slice(0, 2).map((ach, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <CheckCircle2 className="w-3.5 h-3.5 text-glow mt-0.5 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5 mb-5 h-[50px] overflow-hidden">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-primary hover:to-glow border border-white/10 hover:border-glow/30 text-xs font-semibold text-white transition-all duration-300 flex items-center justify-center gap-1.5 group/btn"
                  >
                    <span>Inspect live simulation</span>
                    <Play className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-300 fill-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Simulator Modal overlay for in-depth preview */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 bg-[#020005]/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, type: 'spring' }}
              className="relative w-full max-w-4xl rounded-2xl glass-panel border-glow/20 overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(124,58,237,0.25)] h-[90vh] md:h-auto md:max-h-[85vh]"
              id="selected-project-simulation-board"
            >
              {/* Header colored neon bar */}
              <div className={`absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r ${selectedProject.gradient}`} />
              
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/50 hover:text-white transition-all duration-300 z-50"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Column: Abstract Details */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5 max-h-[40%] md:max-h-none overflow-y-auto">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono px-3 py-1 bg-glow/10 border border-glow/20 text-glow rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" /> SYSTEM INSPECT
                  </span>
                  <h2 className="text-2xl font-display font-bold text-white tracking-tight mt-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-xs text-secondary font-mono tracking-wide uppercase">
                    {selectedProject.subtitle}
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-3 pt-4">
                    <h4 className="text-xs font-mono font-bold text-white/50 uppercase tracking-widest">// ARCHITECTURE ACHIEVEMENTS</h4>
                    <ul className="space-y-2 text-xs text-white/60">
                      {selectedProject.achievements.map((item, id) => (
                        <li key={id} className="flex gap-2.5 items-start">
                          <CheckCircle2 className="w-4 h-4 text-glow mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/5 text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Simulator Pane */}
              <div className="flex-1 bg-black/40 p-6 md:p-8 flex flex-col justify-between min-h-[60%] md:min-h-0 overflow-y-auto">
                <div className="h-full flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-4">
                    <Laptop className="w-4 h-4 text-glow" />
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">LIVE INTERACTIVE TERMINAL EMULATOR</span>
                  </div>

                  {/* 1. Attendence Pipeline Simulator */}
                  {selectedProject.mockupType === 'qr' && (
                    <div className="flex-1 flex flex-col justify-between space-y-4" id="qr-attendace-system-simulator">
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3 text-left">
                          <div>
                            <label className="text-[10px] font-mono text-white/40 block mb-1">MEMBER NAME</label>
                            <input 
                              type="text" 
                              value={qrInputs.name}
                              onChange={(e) => setQrInputs(prev => ({ ...prev, name: e.target.value }))}
                              className="w-full bg-[#0d071a] border border-white/10 rounded-lg p-2 text-xs text-white uppercase focus:outline-none focus:border-glow/60"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] font-mono text-white/40 block mb-1">EMAIL DOMAIN</label>
                            <input 
                              type="text" 
                              value={qrInputs.email}
                              onChange={(e) => setQrInputs(prev => ({ ...prev, email: e.target.value }))}
                              className="w-full bg-[#0d071a] border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-glow/60"
                            />
                          </div>
                        </div>

                        {/* Interactive scan panel */}
                        <div className="relative border border-white/5 bg-[#0f0a1d]/60 rounded-xl p-4 flex flex-col items-center justify-center min-h-[160px]">
                          {qrScanning ? (
                            <div className="text-center space-y-3 animate-pulse">
                              <RefreshCw className="w-10 h-10 text-glow animate-spin mx-auto" />
                              <p className="text-[11px] font-mono text-glow uppercase tracking-wider">GENERATING CRYP-TOKEN SCANNER LINK...</p>
                            </div>
                          ) : (
                            <div className="text-center space-y-3">
                              <div className="p-3 bg-white max-w-[100px] mx-auto rounded-lg shadow-lg">
                                {/* SVG mock QR Code */}
                                <svg viewBox="0 0 100 100" className="w-16 h-16">
                                  <rect x="0" y="0" width="30" height="30" fill="black" />
                                  <rect x="5" y="5" width="20" height="20" fill="white" />
                                  <rect x="10" y="10" width="10" height="10" fill="black" />
                                  <rect x="70" y="0" width="30" height="30" fill="black" />
                                  <rect x="75" y="5" width="20" height="20" fill="white" />
                                  <rect x="80" y="10" width="10" height="10" fill="black" />
                                  <rect x="0" y="70" width="30" height="30" fill="black" />
                                  <rect x="5" y="75" width="20" height="20" fill="white" />
                                  <rect x="10" y="80" width="10" height="10" fill="black" />
                                  {/* Noise details */}
                                  <rect x="40" y="20" width="12" height="8" fill="black" />
                                  <rect x="55" y="45" width="8" height="16" fill="black" />
                                  <rect x="25" y="50" width="15" height="10" fill="black" />
                                  <rect x="50" y="10" width="10" height="8" fill="black" />
                                  <rect x="82" y="82" width="10" height="10" fill="black" />
                                </svg>
                              </div>
                              <p className="text-[11px] font-mono text-white/60">Cryptographic dynamic QR Token initialized.</p>
                            </div>
                          )}
                        </div>

                        <button
                          onClick={handleRunQRCheckIn}
                          disabled={qrScanning}
                          className="w-full py-2 bg-gradient-to-r from-violet-600 to-glow hover:opacity-90 active:scale-95 text-white text-xs font-semibold rounded-lg transition-all duration-300 shadow-md inline-flex items-center justify-center gap-1"
                        >
                          <UserCheck className="w-3.5 h-3.5" />
                          <span>Check in via encrypted scan</span>
                        </button>
                      </div>

                      <div className="space-y-1.5 pt-3 border-t border-white/5 font-mono">
                        <span className="text-[9px] text-white/30 block mb-1 uppercase tracking-wider">// SYNCHRONIZED CLOUD DATABASE FEED</span>
                        <div className="space-y-1 max-h-[110px] overflow-y-auto fancy-scrollbar">
                          {qrHistory.map((item, index) => (
                            <div key={index} className="text-[11px] bg-white/5 border border-white/5 p-1.5 rounded flex justify-between items-center">
                              <span className="text-white/80 uppercase">{item.name}</span>
                              <span className="text-white/40 text-[10px]">{item.timestamp}</span>
                              <span className="text-emerald-400 font-bold text-[9px] bg-emerald-500/10 px-1 py-0.5 rounded">
                                {item.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 2. Exploit Shell Simulator */}
                  {selectedProject.mockupType === 'exploit' && (
                    <div className="flex-1 flex flex-col justify-between space-y-4" id="android-sec-research-exploit-simulator">
                      <div className="flex-1 bg-[#090412] rounded-xl p-4 border border-white/5 font-mono text-left space-y-1 min-h-[220px] max-h-[300px] overflow-y-auto text-xs fancy-scrollbar">
                        <div className="text-white/30 mb-2">// METASPLOIT-v6 VECTOR ATTACHMENT</div>
                        {exploitTerminal.map((line, ix) => {
                          let textStyle = "text-white/70";
                          if (line.startsWith("[+]")) textStyle = "text-emerald-400 font-semibold";
                          if (line.startsWith("[!]")) textStyle = "text-rose-400";
                          if (line.startsWith("[✓]")) textStyle = "text-cyan-400";
                          if (line.startsWith("sys-audit")) textStyle = "text-glow";
                          return (
                            <div key={ix} className={`${textStyle} leading-relaxed`}>
                              <span className="text-white/30 select-none">$ </span>
                              {line}
                            </div>
                          );
                        })}
                        {exploitRunning && (
                          <div className="inline-flex gap-1.5 items-center text-glow animate-pulse py-1">
                            <span>ATTACK VECTOR EXECUTING</span>
                            <span className="w-1.5 h-1.5 bg-glow rounded-full animate-ping" />
                          </div>
                        )}
                      </div>

                      <button
                        onClick={handleRunExploitSim}
                        disabled={exploitRunning}
                        className="w-full py-2.5 bg-gradient-to-r from-red-600 to-rose-600 hover:opacity-90 active:scale-95 text-white text-xs font-mono font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 border border-red-500/30"
                      >
                        <Terminal className="w-4 h-4" />
                        <span>EXECUTE OFFENSIVE CVE AUDIT SCRIPT</span>
                      </button>
                    </div>
                  )}

                  {/* 3. Village Government Website simulator */}
                  {selectedProject.mockupType === 'village' && (
                    <div className="flex-1 flex flex-col justify-between space-y-4 text-left" id="cisaat-civic-services-portal-simulator">
                      <div className="border border-white/5 bg-[#0f0a1c] p-4 rounded-xl space-y-4">
                        <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                          <span className="text-xs font-bold text-white font-display">CARINGIN DIGITAL VILLAGE</span>
                          <span className="text-[9px] bg-primary/20 text-glow px-1.5 py-0.5 rounded font-mono">SECURE CIVIC PORTAL v2</span>
                        </div>

                        {/* Interactive local stats and simple interactive message submission */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-center">
                            <span className="text-[10px] text-white/40 block uppercase">SECURE REQUESTS</span>
                            <span className="text-xl font-bold font-mono text-glow">{civicStats.servicesRequested}</span>
                          </div>
                          <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-center">
                            <span className="text-[10px] text-white/40 block uppercase">AVG TURNAROUND</span>
                            <span className="text-xl font-bold font-mono text-glow">{civicStats.averageResolutionSeconds}s</span>
                          </div>
                        </div>

                        {civicSubmittedMessage ? (
                          <div className="p-3 border border-emerald-500/10 bg-emerald-500/5 rounded-lg text-xs text-emerald-400 text-center space-y-1 animate-pulse">
                            <p className="font-bold uppercase tracking-wider">CIVIC COMPLIANCE SYNCHRONIZED ✅</p>
                            <p className="text-[10px] text-white/60">Automated Google Sheets routing API matched client database fields.</p>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <label className="text-[10px] text-white/40 block">SUBMIT AUTOMATED CITIZEN SUPPORT REQUEST (TEST PIPELINE)</label>
                            <div className="flex gap-2">
                              <input 
                                type="text"
                                placeholder="E.g., Request Village ID updates..."
                                className="flex-1 bg-black/60 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none transition-all focus:border-glow/40"
                                id="village-mock-input"
                              />
                              <button
                                onClick={() => {
                                  setCivicStats(prev => ({ ...prev, servicesRequested: prev.servicesRequested + 1 }));
                                  setCivicSubmittedMessage(true);
                                }}
                                className="px-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold rounded-lg hover:opacity-95"
                              >
                                Trigger
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2 text-center text-[10px] font-mono text-white/40 leading-relaxed justify-center items-center py-2.5">
                        <Server className="w-3.5 h-3.5 text-glow" />
                        <span>Google Automation micro-services: STATUS IDLE / LISTENING ON PORT 443</span>
                      </div>
                    </div>
                  )}

                  <div className="mt-5 text-[11px] text-white/30 text-center">
                    This interactive simulator mimics 1:1 API routes developed in corporate workflows.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
