"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const teamTiers = [
  {
    tier: "Leadership",
    members: [
      { name: "Team Captain", role: "Captain", dept: "Leadership", linkedin: "#" },
      { name: "Vice Captain", role: "Vice Captain", dept: "Leadership", linkedin: "#" },
      { name: "Technical Director", role: "Technical Director", dept: "Leadership", linkedin: "#" },
    ],
  },
  {
    tier: "Department Heads",
    members: [
      { name: "Mechanical Lead", role: "Head of Mechanical", dept: "Mechanical", linkedin: "#" },
      { name: "Aero Lead", role: "Head of Aerodynamics", dept: "Aerodynamics", linkedin: "#" },
      { name: "Powertrain Lead", role: "Head of Powertrain", dept: "Powertrain", linkedin: "#" },
      { name: "Electronics Lead", role: "Head of Electronics", dept: "Electronics", linkedin: "#" },
      { name: "Business Lead", role: "Head of Business", dept: "Business", linkedin: "#" },
      { name: "Operations Lead", role: "Head of Operations", dept: "Operations", linkedin: "#" },
    ],
  },
  {
    tier: "Core Team",
    members: [
      { name: "Design Engineer 1", role: "Chassis Designer", dept: "Mechanical", linkedin: "#" },
      { name: "Design Engineer 2", role: "Suspension Designer", dept: "Mechanical", linkedin: "#" },
      { name: "CFD Engineer", role: "CFD Analyst", dept: "Aerodynamics", linkedin: "#" },
      { name: "Engine Tuner", role: "Engine Calibration", dept: "Powertrain", linkedin: "#" },
      { name: "ECU Developer", role: "ECU Programming", dept: "Electronics", linkedin: "#" },
      { name: "Marketing Lead", role: "Brand Manager", dept: "Business", linkedin: "#" },
      { name: "Manufacturing Lead", role: "Production Manager", dept: "Operations", linkedin: "#" },
      { name: "Driver", role: "Test Driver", dept: "Operations", linkedin: "#" },
    ],
  },
];

const departments = ["All", "Leadership", "Mechanical", "Aerodynamics", "Powertrain", "Electronics", "Business", "Operations"];

const deptColors: Record<string, string> = {
  Leadership: "#d4a836",
  Mechanical: "#d4a836",
  Aerodynamics: "#ffcc00",
  Powertrain: "#d4a836",
  Electronics: "#ffcc00",
  Business: "#c0c0c0",
  Operations: "#d4a836",
};

export default function TeamSection() {
  const [filter, setFilter] = useState("All");

  return (
    <section id="team" className="relative section-padding carbon-fiber-subtle">
      <div className="container-racing relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-subtitle mb-4 block">The People</span>
          <h2 className="section-title racing-line racing-line-center pb-4 mb-6">
            OUR <span className="gradient-text-red">TEAM</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/50">
            The engineers, designers, and strategists who bring Vulcan Racing to life.
            Diverse skills, one shared mission: engineering excellence.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {departments.map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className={`px-3 py-1.5 rounded-full text-[0.65rem] font-racing tracking-wider uppercase transition-all ${filter === d
                  ? "gradient-red text-white"
                  : "glass text-white/40 hover:text-white"
                }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Team Tiers */}
        {teamTiers.map((tier) => {
          const filteredMembers =
            filter === "All"
              ? tier.members
              : tier.members.filter((m) => m.dept === filter);

          if (filteredMembers.length === 0) return null;

          return (
            <div key={tier.tier} className="mb-12">
              <h3 className="font-racing text-sm font-bold tracking-[0.2em] text-white/30 uppercase mb-6 text-center">
                {tier.tier}
              </h3>
              <div className={`grid gap-4 justify-center ${tier.tier === "Leadership"
                  ? "grid-cols-1 sm:grid-cols-3 max-w-3xl mx-auto"
                  : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                }`}>
                {filteredMembers.map((member, i) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card rounded-xl p-5 text-center group"
                  >
                    {/* Avatar */}
                    <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/[0.08] group-hover:border-racing-red/50 transition-colors">
                      <div
                        className="w-full h-full flex items-center justify-center text-2xl font-racing font-black"
                        style={{
                          background: `linear-gradient(135deg, ${deptColors[member.dept] || "#333"}20, ${deptColors[member.dept] || "#333"}05)`,
                          color: deptColors[member.dept] || "#ccc",
                        }}
                      >
                        {member.name.charAt(0)}
                      </div>
                    </div>

                    <h4 className="font-racing text-sm font-bold tracking-wider text-white mb-1">
                      {member.name}
                    </h4>
                    <p className="text-white/40 text-xs mb-2">{member.role}</p>
                    <span
                      className="inline-block text-[0.55rem] font-racing tracking-[0.2em] uppercase px-2 py-0.5 rounded"
                      style={{
                        color: deptColors[member.dept],
                        background: `${deptColors[member.dept]}15`,
                        border: `1px solid ${deptColors[member.dept]}25`,
                      }}
                    >
                      {member.dept}
                    </span>

                    {/* LinkedIn */}
                    <a
                      href={member.linkedin}
                      aria-label={`${member.name} on LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-3 text-white/20 hover:text-[#0077b5] transition-colors"
                    >
                      <svg className="w-4 h-4 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
