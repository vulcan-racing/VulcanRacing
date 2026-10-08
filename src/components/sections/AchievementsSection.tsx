"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "../AnimatedCounter";

const achievements = [
  {
    end: 1,
    suffix: "+",
    label: "Formula Bharat Seasons",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    end: 2,
    suffix: "+",
    label: "Technical Workshops",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    end: 2,
    suffix: "+",
    label: "Industry Collaborations",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    end: 5,
    suffix: "",
    label: "Design Reviews",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    end: 1000,
    suffix: "+",
    label: "Engineering Hours",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    end: 5,
    suffix: "+",
    label: "Manufacturing Milestones",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-vulcan-black via-carbon to-vulcan-black" />
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container-racing relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle mb-4 block">Track Record</span>
          <h2 className="section-title racing-line racing-line-center pb-4 mb-6">
            ACHIEVE<span className="gradient-text-red">MENTS</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/50">
            Numbers that tell our story. Every stat represents hours of dedication,
            innovation, and relentless pursuit of engineering excellence.
          </p>
        </motion.div>

        {/* Telemetry-style dashboard */}
        <div className="glass-card rounded-2xl p-8 md:p-12 mb-12">
          {/* Dashboard header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.05]">
            <div className="flex items-center gap-3">
              <span className="font-racing text-[0.6rem] tracking-[0.3em] text-white/30 uppercase">
                Performance Dashboard
              </span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {achievements.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <AnimatedCounter
                  end={a.end}
                  suffix={a.suffix}
                  label={a.label}
                  icon={a.icon}
                  duration={2500}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gauge visualizations */}
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { label: "Design Completion", value: 98, color: "#d4a836" },
            { label: "Manufacturing Progress", value: 94, color: "#ffcc00" },
            { label: "Test Readiness", value: 90, color: "#d4a836" },
          ].map((gauge, i) => (
            <motion.div
              key={gauge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              {/* Circular progress */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="6"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke={gauge.color}
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${gauge.value * 2.64} 264`}
                    initial={{ strokeDasharray: "0 264" }}
                    whileInView={{ strokeDasharray: `${gauge.value * 2.64} 264` }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 + i * 0.2 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-racing text-lg font-black text-white">
                    {gauge.value}%
                  </span>
                </div>
              </div>
              <p className="font-racing text-xs tracking-[0.15em] text-white/50 uppercase">
                {gauge.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
