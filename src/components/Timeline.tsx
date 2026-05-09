import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, GraduationCap, Laptop, BookOpen, Calendar, MapPin, 
  ChevronRight, Award, CircleDot, Activity, Info
} from 'lucide-react';

interface TimelineItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  icon: any;
  metric: string;
  metricExplanation: string;
}

const ITEMS: TimelineItem[] = [
  {
    id: "ai-solutions",
    role: "AI-Powered Solutions Developer",
    company: "Freelance & Enterprise Consulting",
    period: "2024 - PRESENT",
    location: "Remote / International",
    description: "Spearheading integration of deep learning endpoints and LLM frameworks into legacy operational systems and standard web client interfaces.",
    bullets: [
      "Designed and deployed custom automated agents utilizing Gemini, GPT-4, and Claude to execute complex document auditing workflows.",
      "Engineered automated spreadsheet synchronization routers using secure REST APIs, reducing manual entry loads to absolute zero.",
      "Spearheaded custom visual telemetry dashboards, combining Vite architectures with high-performance responsive state machines."
    ],
    icon: Laptop,
    metric: "4x workflow optimization multiplier",
    metricExplanation: "Accelerated manual business pipelines by automating audit and data syncing processes, replacing 4 FTE-hours of manual routine work with an instantaneous 10-second agent task."
  },
  {
    id: "academic-mentor",
    role: "Private Academic Mentor",
    company: "Secondary & Collegiate Computing Tutor",
    period: "2022 - PRESENT",
    location: "Strategic Regional Frameworks",
    description: "Mentoring upcoming software engineers and computer science majors on architectural principles, structural algorithms, and cybersecurity fundamentals.",
    bullets: [
      "Guided students in constructing bulletproof data schemas, full stack database systems, and robust routing middlewares.",
      "Tutor on core cybersecurity domains, explaining exploits, privilege escalation, secure configurations, and cryptographic hashing.",
      "Accelerated the curriculum pathway of 35+ aspiring developers, resulting in successful graduation projects and tech placements."
    ],
    icon: GraduationCap,
    metric: "100% Student satisfaction & pass rate",
    metricExplanation: "Maintained a perfect academic success record across secondary and collegiate computer science cohorts, with 100% of mentored candidates securing placements or passing their academic defenses."
  },
  {
    id: "desa-caringin",
    role: "Web Developer",
    company: "Desa Caringin Cisaat Government Office",
    period: "2023 - 2024",
    location: "Sukabumi, Indonesia",
    description: "Spearheaded digital transformation initiatives and modern civic portals to digitize services and information routing for thousands of village residents.",
    bullets: [
      "Spearheaded construction of the Caringin Government Web Portal, organizing structured news sections and digitizing civic requests.",
      "Implemented a secure cloud-synchronized data reporting mechanism, reducing paperwork turnaround time from 5 days to same-day delivery.",
      "Authored cybersecurity standard operating guidelines for safe administrative management of citizen profile registries."
    ],
    icon: Building2,
    metric: "Onboarded local council; 80% process speedup",
    metricExplanation: "Successfully transitioned the Caringin administrative system to digital-first pipelines, reducing official resident paper processing times from an average of 5 days down to a same-day automated process."
  },
  {
    id: "ict-math-teacher",
    role: "ICT & Mathematics Teacher",
    company: "Educational Institutions",
    period: "2021 - 2023",
    location: "Regional Schools Office",
    description: "Instructed primary and secondary candidates in analytical reasoning, algebraic structures, computer literacy, and discrete mathematics.",
    bullets: [
      "Developed rich lesson frameworks combining foundational STEM mathematics and modern logic computational thinking.",
      "Introduced classroom labs for basic visual programming and secure software habits, boosting student enrollment in technical courses.",
      "Designed algorithmic grading macros to evaluate numerical test systems, accelerating results reporting workflows."
    ],
    icon: BookOpen,
    metric: "STEM enrollment boosted by 40%",
    metricExplanation: "Spearheaded visual programming workshops and algorithmic game theory projects, directly driving a 40% increase in high school student enrollment within specialized ICT and computing tracks."
  }
];

const bulletContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const bulletVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function Timeline() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeMetricId, setActiveMetricId] = useState<string | null>(null);

  useEffect(() => {
    const handleGlobalClick = () => {
      setActiveMetricId(null);
    };
    window.addEventListener('click', handleGlobalClick);
    return () => {
      window.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <div className="w-full relative py-4 text-left" id="cybernetic-experience-timeline">
      {/* Central Running Glowing Spine */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#7C3AED] via-[#A855F7]/30 to-transparent -translate-x-1/2 hidden md:block" />

      <div className="space-y-12">
        {ITEMS.map((item, index) => {
          const IconComponent = item.icon;
          const isEven = index % 2 === 0;
          const isHovered = hoveredId === item.id;

          return (
            <div 
              key={item.id}
              className={`flex flex-col md:flex-row items-stretch md:justify-between relative ${
                isEven ? '' : 'md:flex-row-reverse'
              }`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Spine Node Pin (Hidden on small screens) */}
              <div 
                className={`absolute left-1/2 -translate-x-1/2 top-6 w-9 h-9 rounded-full bg-[#05010A] border-2 transition-all duration-500 z-10 hidden md:flex items-center justify-center ${
                  isHovered 
                    ? 'border-glow shadow-[0_0_20px_#C084FC] scale-110 bg-[#05010A]' 
                    : 'border-primary/40 bg-black/80'
                }`}
              >
                <item.icon className={`w-4 h-4 ${isHovered ? 'text-glow' : 'text-primary/70'}`} />
              </div>

              {/* Card Container block */}
              <div className={`w-full md:w-[45%] ${isEven ? 'md:pr-2' : 'md:pl-2'}`}>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="rounded-2xl glass-panel p-6 border-white/5 transition-all duration-500 hover:border-glow/30 shadow-2xl relative"
                  style={{
                    background: isHovered 
                      ? 'linear-gradient(135deg, rgba(15, 6, 32, 0.6) 0%, rgba(5, 1, 10, 0.8) 100%)' 
                      : 'linear-gradient(135deg, rgba(10, 3, 20, 0.4) 0%, rgba(5, 1, 10, 0.5) 100%)',
                    boxShadow: isHovered ? '0 15px 40px rgba(124, 58, 237, 0.1)' : 'none',
                  }}
                >
                  {/* Calendar Period Badge */}
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-glow tracking-widest font-semibold uppercase mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                    <span>•</span>
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white tracking-tight group-hover:text-glow">
                    {item.role}
                  </h3>

                  <div className="text-xs text-white/50 font-mono uppercase mt-1 tracking-wider">
                    {item.company}
                  </div>

                  {/* Divider line */}
                  <div className="h-[1px] bg-white/5 my-4" />

                  <p className="text-xs text-white/70 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Timeline accomplishments block */}
                  <motion.ul 
                    variants={bulletContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-3 text-xs text-white/60 text-left list-none pl-0"
                  >
                    {item.bullets.map((bullet, BulletId) => (
                      <motion.li 
                        key={BulletId} 
                        variants={bulletVariants}
                        className="flex gap-2 items-start"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Dynamic Diagnostic KPI Footer (only shown premium) */}
                  <div className="border-t border-white/5 pt-4 mt-5 flex items-center justify-between text-[11px] font-mono text-white/40">
                    <span className="flex items-center gap-1.5 select-none">
                      <Activity className={`w-3.5 h-3.5 ${isHovered ? 'animate-pulse text-glow' : 'text-[#7C3AED]'}`} />
                      KPI Telemetry:
                    </span>
                    <div className="relative">
                      <button
                        onMouseEnter={() => setActiveMetricId(item.id)}
                        onMouseLeave={() => setActiveMetricId(null)}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMetricId(activeMetricId === item.id ? null : item.id);
                        }}
                        className="text-white/80 font-bold flex items-center gap-1.5 cursor-pointer hover:text-glow transition-all duration-300 relative py-1 px-2 rounded-lg bg-white/0 hover:bg-white/5 active:scale-95 text-right outline-none select-none border-0"
                        aria-label={`Detailed information for metric: ${item.metric}`}
                      >
                        <span>{item.metric}</span>
                        <Info className="w-3.5 h-3.5 text-primary/60 hover:text-glow transition-all duration-300 shrink-0" />
                      </button>

                      <AnimatePresence>
                        {activeMetricId === item.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 5, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute bottom-full mb-3 right-0 w-72 max-w-[calc(100vw-4rem)] p-4 rounded-xl border border-primary/20 bg-black/95 backdrop-blur-md shadow-[0_10px_30px_rgba(124,58,237,0.25)] text-left z-30 pointer-events-none"
                            style={{
                              boxShadow: '0 10px 30px rgba(124, 58, 237, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.05)'
                            }}
                          >
                            {/* Futuristic glowing indicator line at top */}
                            <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#C084FC]/70 to-transparent" />
                            
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#C084FC] animate-pulse" />
                              <span className="text-[10px] font-mono font-semibold tracking-wider text-glow uppercase text-primary">
                                Metric Breakdown
                              </span>
                            </div>
                            
                            <p className="text-[11px] font-mono leading-relaxed text-white/90">
                              {item.metricExplanation}
                            </p>
                            
                            {/* Arrow at bottom */}
                            <div className="absolute -bottom-1.5 right-6 w-2.5 h-2.5 bg-black border-r border-b border-primary/20 rotate-45" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Space reservation for opposite column on desktop layout */}
              <div className="hidden md:block md:w-[45%]" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
