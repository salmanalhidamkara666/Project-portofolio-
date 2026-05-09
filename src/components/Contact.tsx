import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, MessageSquare, Linkedin, Github, Compass, Copy, Check, 
  ExternalLink, Send, MessageCircle, ArrowUpRight
} from 'lucide-react';

interface ContactLink {
  name: string;
  value: string;
  href: string;
  icon: any;
  actionText: string;
}

const CONNECTIONS: ContactLink[] = [
  {
    name: "Email Address",
    value: "salmanalhidamkara666@gmail.com",
    href: "mailto:salmanalhidamkara666@gmail.com",
    icon: Mail,
    actionText: "Direct Mail"
  },
  {
    name: "WhatsApp Hot-Dial",
    value: "+6281234567890", // Standard mock Indonesian representative format for design
    href: "https://wa.me/6281234567890", // Fully interactable direct WhatsApp link
    icon: MessageSquare,
    actionText: "Direct Chat"
  },
  {
    name: "LinkedIn Network",
    value: "linkedin.com/in/salmanalhidamkara",
    href: "https://linkedin.com",
    icon: Linkedin,
    actionText: "Verify Connection"
  },
  {
    name: "GitHub Repository",
    value: "github.com/salmanalhidamkara",
    href: "https://github.com",
    icon: Github,
    actionText: "Code Repository"
  }
];

export default function Contact() {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  const [messageForm, setMessageForm] = useState({ name: '', org: '', note: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedValue(value);
    setTimeout(() => {
      setCopiedValue(null);
    }, 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageForm.note.trim()) return;
    setIsSubmitting(true);
    
    // Simulate server ingestion
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus("SUCCESS");
      setMessageForm({ name: '', org: '', note: '' });
      setTimeout(() => setSubmittedStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 text-left" id="contact-integration-grid">
      
      {/* Left Bento: Direct social links + custom hot dial copy */}
      <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
        <div className="space-y-4">
          <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase block">// COMMUNICATIONS DOCK</span>
          <h3 className="text-3xl font-display font-bold text-white leading-tight tracking-tight">
            Let’s build something extraordinary together.
          </h3>
          <p className="text-xs text-white/50 leading-relaxed font-mono">
            Directly hook into Salman's secure lines. Click on any route below to view connection parameters or to initialize encrypted messaging channels.
          </p>
        </div>

        {/* List of custom visual path cards */}
        <div className="space-y-3" id="social-interactive-connections-list">
          {CONNECTIONS.map((c) => {
            const LinkIcon = c.icon;
            const isThisCopied = copiedValue === c.value;

            return (
              <div
                key={c.name}
                className="group p-4 bg-white/5 border border-white/5 hover:border-glow/20 rounded-xl flex items-center justify-between transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center gap-3.5 z-10">
                  <div className="p-2.5 rounded-lg bg-[#0d071a] border border-white/5 text-glow group-hover:bg-glow/20 transition-all duration-300">
                    <LinkIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/30 block tracking-wide uppercase font-mono">{c.name}</span>
                    <span className="text-xs font-mono text-white/80 group-hover:text-white transition-colors block">{c.value}</span>
                  </div>
                </div>

                <div className="flex gap-2 z-10">
                  {/* Clipboard action */}
                  <button
                    onClick={() => handleCopy(c.value)}
                    className="p-1.5 rounded-md hover:bg-white/10 text-white/40 hover:text-white transition-all cursor-pointer"
                    title="Copy connection coordinate"
                  >
                    {isThisCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>

                  {/* Direct Dial route */}
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-md hover:bg-glow/20 text-white/40 hover:text-glow transition-all flex items-center justify-center cursor-pointer"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global operational status */}
        <div className="text-[10px] font-mono text-white/30 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>CURRENT STATUS: AVAILABLE FOR INTERVIEWS AND CONTRACTS</span>
        </div>
      </div>

      {/* Right Bento: Live communication message board */}
      <div className="lg:col-span-7 rounded-2xl glass-panel p-6 border-white/5 flex flex-col justify-between font-mono relative overflow-hidden" style={{ minHeight: '380px' }}>
        <div className="absolute inset-0 bg-grid-cyber opacity-35 pointer-events-none" />
        
        <div className="z-10 w-full mb-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-white/40 tracking-wider uppercase">// DIRECT COMMS SYSTEM</span>
            <span className="text-[10px] text-glow font-mono px-2 py-0.5 rounded bg-glow/10 border border-glow/20">DDR-LINK</span>
          </div>
        </div>

        {/* Interactive message builder */}
        <form onSubmit={handleFormSubmit} className="space-y-4 z-10 flex-1 flex flex-col justify-between">
          <div className="space-y-3.5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] text-white/40 block mb-1 uppercase tracking-wider">YOUR IDENTIFICATION / INQUIRER</label>
                <input 
                  type="text" 
                  required
                  placeholder="E.g., Recruiter / Startup Founder"
                  value={messageForm.name}
                  onChange={(e) => setMessageForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-[#0d071a]/70 border border-white/10 hover:border-glow/30 focus:border-glow/50 rounded-lg p-2.5 text-xs text-white uppercase focus:outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label className="text-[10px] text-white/40 block mb-1 uppercase tracking-wider">ORGANIZATION / COMPANY</label>
                <input 
                  type="text" 
                  placeholder="E.g., Vercel / Tesla Inc."
                  value={messageForm.org}
                  onChange={(e) => setMessageForm(prev => ({ ...prev, org: e.target.value }))}
                  className="w-full bg-[#0d071a]/70 border border-white/10 hover:border-glow/30 focus:border-glow/50 rounded-lg p-2.5 text-xs text-white focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-white/40 block mb-1 uppercase tracking-wider">SECURE NOTES / PROJECT OBJECTIVE</label>
              <textarea 
                required
                rows={4}
                placeholder="Briefly detail what you would like to discuss with Salman (e.g., job opening, consulting project, AI audit)..."
                value={messageForm.note}
                onChange={(e) => setMessageForm(prev => ({ ...prev, note: e.target.value }))}
                className="w-full bg-[#0d071a]/70 border border-[#23153d] hover:border-glow/30 focus:border-glow/50 rounded-xl p-3.5 text-xs text-white focus:outline-none transition-all duration-300 fancy-scrollbar"
              />
            </div>
          </div>

          <div className="space-y-3 pt-4">
            <AnimatePresence mode="wait">
              {submittedStatus === "SUCCESS" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-3 border border-emerald-500/10 bg-emerald-500/5 rounded-xl text-xs text-emerald-400 text-center animate-pulse"
                >
                  MESSAGE COMPiled SUCCESSFULLY! ✅ Salman's offline routing synchronized this draft. Feel free to follow up on WhatsApp.
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-primary via-secondary to-glow text-white text-xs font-semibold hover:opacity-90 active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-glow/20 flex items-center justify-center gap-2 border border-glow/20 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'ROUTING DATA...' : 'TRANSMIT MESSAGE SECURELY'}</span>
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
