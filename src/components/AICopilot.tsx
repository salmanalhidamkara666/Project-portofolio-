import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Send, Terminal, Cpu, Clock, HelpCircle, AlertCircle, RefreshCw } from 'lucide-react';

// Initialize the API safely.
let aiInstance: any = null;
try {
  const key = process.env.GEMINI_API_KEY;
  if (key && key !== 'undefined' && key.trim() !== '') {
    aiInstance = new GoogleGenAI({ apiKey: key });
  }
} catch (e) {
  console.log("Gemini API key not found, using premium local sandbox fallback.", e);
}

interface Message {
  sender: 'user' | 'ai' | 'system';
  text: string;
  timestamp: string;
}

const PRESETS = [
  { q: "What's Salman's AI workspace & workflow?", a: "Salman Alhidamkara operates at the bleeding edge of AI-collaborative engineering. By leveraging Cursor, Claude, and Gemini with specialized prompts, he cuts development cycle times by up to 60-75% while maintaining strict type safety and modular components." },
  { q: "What are his key engineering specializations?", a: "He is double-specialized in (1) Full Stack Web Engineering (React, REST APIs, Google Apps Script automation) and (2) Cybersecurity/Defense Research (vulnerability analysis, security posture orchestration, Linux infrastructure automation)." },
  { q: "Tell me about his language proficiencies.", a: "He is fully international-ready with fluent English (CEFR B2) for agile scrum teams and conversational Japanese (CEFR A2) for Tokyo or multinational companies." },
  { q: "Why hire Salman Alhidamkara?", a: "Salman is not just a standard coder; he is an AI-multiplier developer. He designs robust workflows, has a solid computer science baseline from Informatics Engineering, and executes automation and security protocols to harden and accelerate digital solutions." }
];

export default function AICopilot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'system',
      text: "[SYSTEM DETECT STATUS: STABLE] Salman Alhidamkara Digital Double v1.0 connected. Welcome recruiters, investors, and team leaders.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
    {
      sender: 'ai',
      text: "Hello! I am Salman's AI agent. Ask me about his tech stack, academic background in Informatics Engineering, Japanese language skills, or custom workflow systems. Let's create something exceptional!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "INITIALIZING COGNITIVE INTERFACE...",
    "DOCKING CORONA API CLIENTS...",
    "SECURE DEPLOY STATE ACQUIRED."
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    // Stagger terminal diagnostic prints
    const timer = setInterval(() => {
      const liveLogs = [
        "PARSING BIO DATA: ENGLISH B2, JAPANESE A2",
        "LOADING PORTFOLIO DB TRACES...",
        "STACK MONITOR: REACT / TALWIND v4 / GAS ACCESSED",
        "REFRESHING NEURAL EMBEDDINGS UNIFIED",
        "STANDBY FOR SYSTEM INQUIRIES"
      ];
      const randomLog = liveLogs[Math.floor(Math.random() * liveLogs.length)];
      setTerminalLogs(prev => [...prev.slice(-3), randomLog]);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const getFallbackAnswer = (userText: string): string => {
    const text = userText.toLowerCase();
    
    if (text.includes('workflow') || text.includes('ai') || text.includes('cursor') || text.includes('claude') || text.includes('copilot')) {
      return "Salman specializes in AI-Driven Development workflows. He uses advanced LLMs (Gemini, Claude, GPT-4o) via Cursor and custom API agents to automate scaffolding, optimize algorithms, write extensive unit tests, and integrate automated flows. He achieves up to 4x engineering efficiency without compromising code quality.";
    }
    if (text.includes('education') || text.includes('degree') || text.includes('graduate') || text.includes('informatics') || text.includes('engineering') || text.includes('university') || text.includes('academic')) {
      return "Salman Alhidamkara is an Informatics Engineering (Computer Science equivalent) graduate, giving him deep foundational knowledge of algorithms, databases, discrete mathematics, network security, and operating system kernels.";
    }
    if (text.includes('japanese') || text.includes('jlpt') || text.includes('japan') || text.includes('language')) {
      return "Salman matches international global needs with solid communicative basic Japanese (A2 level on the CEFR scale / JLPT equivalent). He is dedicated to learning more and working with cross-border engineering structures.";
    }
    if (text.includes('english') || text.includes('toefl')) {
      return "He has intermediate-advanced English proficiency (TOEFL ITP B2 Level equivalent). He can comfortably participate in agile standups, read documentation, write specifications, and collaborate globally.";
    }
    if (text.includes('cyber') || text.includes('security') || text.includes('exploitation') || text.includes('kali') || text.includes('metasploit') || text.includes('defense') || text.includes('exploit') || text.includes('android')) {
      return "He is highly researched in Defensive Security and exploitation vectors. Specifically, he authored research on Android 13 security exploitation and handles industry standards like Nmap, Kali Linux offensive suites, and system hardening configurations.";
    }
    if (text.includes('experience') || text.includes('work') || text.includes('job') || text.includes('career') || text.includes('cisaat') || text.includes('teacher')) {
      return "Salman has held multi-dimensional roles: (1) AI-Powered Solutions Developer, building cloud automations and custom REST endpoints; (2) private computer science mentor; (3) Web Developer for Desa Caringin Cisaat, creating digital town portals; and (4) ICT & Mathematics Teacher, instructing complex logic structures.";
    }
    if (text.includes('contact') || text.includes('hire') || text.includes('email') || text.includes('message') || text.includes('phone') || text.includes('whatsapp')) {
      return "You can reach Salman immediately via the contact board in the footer section! His email is salmanalhidamkara666@gmail.com and WhatsApp hot-dial is fully active. Let's start the onboarding or collaboration discussions!";
    }
    if (text.includes('project') || text.includes('attendance') || text.includes('qr') || text.includes('website')) {
      return "Salman has built exceptional projects, including a fully integrated QR Code Attendance System with digital security validation, Android 13 security research models, and a high-utilization Village Government Portal.";
    }
    
    return "Salman is a dedicated digital builder double-leveraging Computer Science baselines and AI workflow architectures. He can code React/Vite frontends, Node backends, automated scripts, and security pipelines with unprecedented speed. Feel free to shoot him an email at salmanalhidamkara666@gmail.com or call him on WhatsApp to discuss an interview!";
  };

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    const systemContext = `
      You are the AI Digital Double of Salman Alhidamkara, an AI-Powered Web Developer and Digital Solutions Developer.
      He holds an Informatics Engineering degree. His key skills include:
      - AI Workflows: Cursor, Claude, Gemini, Copilot, ChatGPT
      - Languages: English (TOEFL B2), Japanese (JLPT A2)
      - Technology: HTML5, CSS3, JavaScript, Google Apps Script, REST APIs, React, Tailwind, Vite.
      - Cyber: Kali Linux, Nmap, Metasploit, Security Exploitation (Android 13 Research).
      - Human Qualities: International mindset, automation lover, fast learner, teacher & mentor background.
      Keep answers concise (under 3-4 sentences in most cases), premium, intellectual, confident, and professional. 
      Speak as Salman's digital AI double. Always frame Salman in a stellar light for startups, tech companies, and recruiters.
    `;

    try {
      if (aiInstance) {
        const response = await aiInstance.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [
            { role: 'user', parts: [{ text: `${systemContext}\n\nQuestion or user prompt: ${textToSend}` }] }
          ]
        });

        const reply = response?.text || getFallbackAnswer(textToSend);
        setMessages(prev => [...prev, {
          sender: 'ai',
          text: reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      } else {
        // Fallback simulate thought delay
        setTimeout(() => {
          const reply = getFallbackAnswer(textToSend);
          setMessages(prev => [...prev, {
            sender: 'ai',
            text: reply,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }]);
          setIsTyping(false);
        }, 1100);
        return;
      }
    } catch (err) {
      console.warn("Gemini call error, using sandbox fallback.", err);
      setTimeout(() => {
        const reply = getFallbackAnswer(textToSend);
        setMessages(prev => [...prev, {
          sender: 'ai',
          text: reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setIsTyping(false);
      }, 700);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div 
      className="w-full rounded-2xl glass-panel border-white/5 overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[460px] max-h-[600px] border-glow/10"
      id="salman-ai-copilot-container"
    >
      {/* Left Column: Command & Diagnostic Monitor */}
      <div className="w-full md:w-1/3 bg-black/60 p-5 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between font-mono">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-glow">
            <Terminal className="w-4 h-4 animate-pulse" />
            <span className="text-xs tracking-widest font-semibold uppercase">SYSTEM COGNITION</span>
          </div>

          <div className="space-y-1.5" id="diagnostic-stdout-log">
            <span className="text-[10px] text-white/30 block mb-1 uppercase tracking-wider">// SYSTEM DIAGNOSTICS</span>
            {terminalLogs.map((log, index) => (
              <div key={index} className="text-[11px] text-white/60 leading-tight break-all border-l border-primary/20 pl-2">
                <span className="text-[#A855F7] select-none">&gt;&nbsp;</span>
                {log}
              </div>
            ))}
            
            {isTyping && (
              <div className="text-[11px] text-glow animate-pulse flex items-center gap-1">
                <span className="text-glow select-none">&gt; </span>
                <span>PROCESSING INTEL...</span>
                <RefreshCw className="w-3 h-3 animate-spin text-glow" />
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-white/5 pt-4 mt-4 space-y-2 text-[11px] text-white/40">
          <div className="flex items-center gap-1.5 justify-between">
            <span className="flex items-center gap-1">
              <Cpu className="w-3 h-3 text-glow" /> CORE LOGIC
            </span>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 text-[9px]">ONLINE</span>
          </div>
          <div className="flex items-center gap-1.5 justify-between">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> LATENCY
            </span>
            <span>12ms (FAST)</span>
          </div>
        </div>
      </div>

      {/* Right Column: Interactive Conversational Area */}
      <div className="flex-1 flex flex-col bg-black/30 justify-between">
        {/* Chat Feed */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4 h-[300px] fancy-scrollbar" id="copilot-chat-feed">
          {messages.map((m, idx) => {
            if (m.sender === 'system') {
              return (
                <div key={idx} className="p-2 border border-glow/10 bg-glow/5 rounded-lg text-[10px] font-mono text-glow/80 text-center uppercase tracking-wide">
                  {m.text}
                </div>
              );
            }
            
            const isUser = m.sender === 'user';
            return (
              <div key={idx} className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
                <div className="flex items-center gap-1.5 text-[10px] text-white/40 font-mono mb-1">
                  <span>{isUser ? 'RECRUITER' : 'SALMAN_AI'}</span>
                  <span>•</span>
                  <span>{m.timestamp}</span>
                </div>
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs text-left leading-relaxed ${
                    isUser 
                      ? 'bg-gradient-to-r from-primary to-secondary text-white rounded-tr-none shadow-[0_0_15px_rgba(124,58,237,0.15)]' 
                      : 'bg-white/5 border border-white/10 text-white/90 rounded-tl-none hover:border-glow/20 transition-all duration-300'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            );
          })}
          {isTyping && (
            <div className="flex flex-col items-start animate-pulse">
              <div className="text-[10px] text-white/40 font-mono mb-1">SALMAN_AI is compiling an answer...</div>
              <div className="bg-white/5 border border-white/5 rounded-2xl px-4 py-2.5 rounded-tl-none flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-glow animate-bounce" style={{ animationDelay: '0s' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-glow animate-bounce" style={{ animationDelay: '0.15s' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-glow animate-bounce" style={{ animationDelay: '0.3s' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Presets */}
        <div className="px-5 py-2 border-t border-white/5 bg-black/40 flex flex-wrap gap-2 items-center justify-start z-10">
          <span className="text-[9px] font-mono text-white/30 tracking-wider flex items-center gap-1 select-none">
            <HelpCircle className="w-2.5 h-2.5" /> INQUIRIES:
          </span>
          {PRESETS.map((p, i) => (
            <button
              key={i}
              onClick={() => handleSend(p.q)}
              className="text-[10px] bg-white/5 hover:bg-glow/10 border border-white/10 hover:border-glow/30 text-white/70 hover:text-white rounded-full px-3 py-1 cursor-pointer transition-all duration-300"
            >
              {p.q}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(inputValue);
          }}
          className="p-3 border-t border-white/5 bg-black/60 flex gap-2 items-center"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Inquire about Salman's availability, stack, research..."
            className="flex-1 bg-white/5 border border-white/5 hover:border-glow/20 focus:border-glow/40 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition-all duration-300 placeholder:text-white/30 placeholder:text-xs"
          />
          <button
            type="submit"
            className="p-2.5 rounded-xl bg-gradient-to-r from-primary to-glow text-white hover:opacity-90 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-glow/20 list-none group relative overflow-hidden"
          >
            <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </form>
      </div>
    </div>
  );
}
