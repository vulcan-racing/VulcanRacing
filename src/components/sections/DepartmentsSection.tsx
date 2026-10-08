"use client";

import { motion } from "framer-motion";

const departments = [
  {
    title: "Mechanical",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "#d4a836",
    subs: ["Chassis Design", "Suspension Geometry", "Steering System", "Brake System"],
    desc: "The backbone of our race car. Our mechanical team designs and fabricates structural and dynamic systems that form the foundation of vehicle performance.",
  },
  {
    title: "Aerodynamics",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: "#ffcc00",
    subs: ["CFD Simulation", "Wing Design", "Downforce Analysis", "Flow Visualization"],
    desc: "Harnessing the power of air. Our aero team uses computational fluid dynamics and wind tunnel principles to maximize downforce while minimizing drag.",
  },
  {
    title: "Powertrain",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "#d4a836",
    subs: ["Engine Tuning", "Intake & Exhaust", "Transmission", "Cooling System"],
    desc: "Raw power, refined delivery. From engine mapping to transmission optimization, our powertrain division ensures every joule of energy reaches the wheels efficiently.",
  },
  {
    title: "Electronics",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    color: "#ffcc00",
    subs: ["Sensor Integration", "Data Acquisition", "Telemetry Systems", "Wiring Harness"],
    desc: "The nervous system of our car. Real-time data acquisition, sensor networks, and telemetry enable data-driven decisions on and off the track.",
  },
  {
    title: "Business",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: "#c0c0c0",
    subs: ["Marketing & PR", "Sponsorship", "Brand Strategy", "Cost Analysis"],
    desc: "Where engineering meets enterprise. Our business team secures partnerships, manages branding, and creates the financial strategy that fuels our racing ambitions.",
  },
  {
    title: "Operations",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: "#d4a836",
    subs: ["Manufacturing", "Logistics", "Procurement", "Quality Control"],
    desc: "From blueprint to reality. Operations handles the manufacturing pipeline, supply chain, and quality assurance that transforms designs into a competition-ready machine.",
  },
];

export default function DepartmentsSection() {
  return (
    <section id="departments" className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-vulcan-black via-carbon/50 to-vulcan-black" />

      <div className="container-racing relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle mb-4 block">Our Divisions</span>
          <h2 className="section-title racing-line racing-line-center pb-4 mb-6">
            DEPART<span className="gradient-text-red">MENTS</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/50">
            Six specialized divisions working in harmony. Each department brings unique expertise to create a competitive, well-rounded Formula Student entry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card rounded-xl p-6 group relative overflow-hidden"
            >
              {/* Accent line top */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${dept.color}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${dept.color}20, ${dept.color}05)`,
                  border: `1px solid ${dept.color}30`,
                  color: dept.color,
                }}
              >
                {dept.icon}
              </div>

              {/* Title */}
              <h3 className="font-racing text-lg font-bold tracking-wider mb-3 group-hover:text-white transition-colors">
                {dept.title}
              </h3>

              {/* Description */}
              <p className="text-white/40 text-sm leading-relaxed mb-5">
                {dept.desc}
              </p>

              {/* Sub-departments */}
              <div className="flex flex-wrap gap-2">
                {dept.subs.map((sub) => (
                  <span
                    key={sub}
                    className="text-[0.65rem] font-racing tracking-wider uppercase px-2 py-1 rounded border border-white/[0.06] text-white/30 group-hover:text-white/50 group-hover:border-white/[0.12] transition-all"
                  >
                    {sub}
                  </span>
                ))}
              </div>

              {/* Hover glow */}
              <div
                className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl"
                style={{ background: dept.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
