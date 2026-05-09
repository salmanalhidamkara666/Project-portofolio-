import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Languages, GraduationCap, CheckCircle2 } from 'lucide-react';

interface Rec {
  title: string;
  issuer: string;
  level: string;
  description: string;
  gradient: string;
  icon: any;
  subdetails: string[];
}

const CERTS: Rec[] = [
  {
    title: "Informatics Engineering Degree",
    issuer: "State University Framework",
    level: "Bachelor of Computer Science Equivalent",
    description: "Deep academic specialization covering discrete structures, algorithmic analysis, secure software configurations, and system infrastructure networking.",
    gradient: "from-violet-600/30 to-glow/20",
    icon: GraduationCap,
    subdetails: [
      "Concentrations: Full Stack, Automation, Dynamic APIs",
      "Rigorous algorithm modeling & complexity vettings",
      "Practical sandbox defensive threat exploration"
    ]
  },
  {
    title: "TOEFL ITP English Proficiency",
    issuer: "ETS Global Standard Board",
    level: "CEFR Standard: B2 Level",
    description: "Validated upper-intermediate linguistic agility designed to collaborate in modern international agile structures, design files, and technical sprints.",
    gradient: "from-[#A855F7]/30 to-rose-600/10",
    icon: Award,
    subdetails: [
      "Agile standalone communication validated",
      "Comprehensive technical drafting proficiency",
      "International business collaboration workflows"
    ]
  },
  {
    title: "Japanese Proficiency CEFR",
    issuer: "JLPT Language Assessment",
    level: "CEFR Standard: A2 Level",
    description: "Conversational foundation enabling basic day-to-day communicative interactions and assimilation into multicultural Japanese engineering syndicates.",
    gradient: "from-blue-600/30 to-glow/10",
    icon: Languages,
    subdetails: [
      "Everyday conversational constructs",
      "Tokyo enterprise culture compliance",
      "Multi-regional agile team readiness"
    ]
  }
];

export default function Certifications() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full space-y-8 text-left" id="cybernetic-certifications-panel-wrap">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CERTS.map((cert, index) => {
          const IconComp = cert.icon;
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative rounded-2xl glass-panel p-6 border-white/5 overflow-hidden flex flex-col justify-between transition-all duration-700 hover:border-glow/40 cursor-default"
              style={{
                background: isHovered 
                  ? `linear-gradient(135deg, rgba(20, 10, 45, 0.4) 0%, rgba(5, 1, 10, 0.75) 100%)`
                  : `linear-gradient(135deg, rgba(8, 2, 18, 0.35) 0%, rgba(5, 1, 10, 0.5) 100%)`,
                boxShadow: isHovered ? '0 15px 35px rgba(124, 58, 237, 0.12)' : 'none',
              }}
            >
              {/* Internal Holographic metallic shimmer background overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-tr ${cert.gradient} blur-[25px] opacity-10 transition-all duration-700 ${
                  isHovered ? 'opacity-30 scale-110' : ''
                }`} 
              />

              {/* Shimmer line */}
              <div 
                className="absolute top-0 left-[-150%] w-[100%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transition-all duration-1000"
                style={{
                  transform: isHovered ? 'translateX(350%)' : 'none',
                }}
              />

              <div className="space-y-4 z-10 relative">
                {/* Cert Top Line info */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-glow">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md uppercase">
                    VALIDATED REFERENCE
                  </span>
                </div>

                {/* Info Text */}
                <div>
                  <h3 className="text-lg font-display font-semibold text-white tracking-tight leading-tight hover:text-glow transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-[10px] font-mono text-white/40 uppercase mt-0.5 tracking-wider">
                    {cert.issuer}
                  </p>
                  <p className="text-xs font-mono font-bold text-glow mt-1.5 uppercase tracking-wide">
                    {cert.level}
                  </p>
                </div>

                <p className="text-xs text-white/60 leading-relaxed pt-2.5 border-t border-white/5">
                  {cert.description}
                </p>

                {/* Sub details bullet logs */}
                <ul className="space-y-2 pt-2 text-[11px] text-white/50 pl-0 list-none text-left">
                  {cert.subdetails.map((sub, sidx) => (
                    <li key={sidx} className="flex gap-2 items-start leading-tight">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.25" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Security stamp */}
              <div className="pt-4 mt-5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/30 z-10 relative">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-glow" /> SECURE TRACE ID
                </span>
                <span>SHA-256 VALIDATED</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
