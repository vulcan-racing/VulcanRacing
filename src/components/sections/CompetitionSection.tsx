"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    phase: "01",
    title: "Research",
    desc: "Benchmarking, rule analysis, and concept exploration for the new season.",
    icon: "🔬",
    color: "#ffcc00",
  },
  {
    phase: "02",
    title: "Design",
    desc: "CAD modeling, FEA simulation, CFD analysis, and design reviews.",
    icon: "✏️",
    color: "#c0c0c0",
  },
  {
    phase: "03",
    title: "Manufacturing",
    desc: "CNC machining, welding, carbon fiber layup, and component fabrication.",
    icon: "🔨",
    color: "#ffcc00",
  },
  {
    phase: "04",
    title: "Assembly",
    desc: "Subsystem integration, wiring harness, and vehicle assembly.",
    icon: "🔧",
    color: "#d4a836",
  },
  {
    phase: "05",
    title: "Testing",
    desc: "Track testing, data acquisition, driver training, and performance tuning.",
    icon: "🏎️",
    color: "#d4a836",
  },
  {
    phase: "06",
    title: "Static Events",
    desc: "Design presentation, cost report, and business plan pitch.",
    icon: "📊",
    color: "#ffcc00",
  },
  {
    phase: "07",
    title: "Dynamic Events",
    desc: "Acceleration, skid-pad, autocross, and endurance on the track.",
    icon: "🏁",
    color: "#d4a836",
  },
];

export default function CompetitionSection() {
  return (
    <section id="journey" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 carbon-fiber-subtle" />

      <div className="container-racing relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle mb-4 block">The Process</span>
          <h2 className="section-title racing-line racing-line-center pb-4 mb-6">
            COMPETITION <span className="gradient-text-red">JOURNEY</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/50">
            From concept to competition — the rigorous engineering pipeline that
            transforms ideas into a race-ready machine for Formula Bharat.
          </p>
        </motion.div>

        {/* Race Track Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Track line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5">
            <div className="h-full bg-gradient-to-b from-racing-red via-neon-orange via-50% to-racing-red/20" />
            {/* Dashed overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, transparent, transparent 8px, rgba(10,10,10,0.8) 8px, rgba(10,10,10,0.8) 16px)",
              }}
            />
          </div>

          {milestones.map((m, i) => (
            <motion.div
              key={m.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative flex items-start mb-12 ${
                i % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              {/* Checkpoint dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg border-2 border-vulcan-black shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}88)` }}
                >
                  {m.icon}
                </div>
              </div>

              {/* Content card */}
              <div
                className={`ml-20 md:ml-0 md:w-[45%] ${
                  i % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"
                }`}
              >
                <div className="glass-card rounded-xl p-5 group">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="font-racing text-xs font-bold tracking-[0.3em] px-2 py-0.5 rounded"
                      style={{
                        color: m.color,
                        background: `${m.color}15`,
                        border: `1px solid ${m.color}30`,
                      }}
                    >
                      PHASE {m.phase}
                    </span>
                  </div>
                  <h3 className="font-racing text-lg font-bold tracking-wider mb-2">
                    {m.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Finish flag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 rounded-full gradient-red flex items-center justify-center text-xl shadow-lg shadow-racing-red/30">
                🏆
              </div>
            </div>
            <div className="ml-20 md:ml-0 md:text-center mt-1">
              <span className="font-racing text-sm font-bold tracking-[0.2em] gradient-text-red">
                RACE DAY — FORMULA BHARAT
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
