"use client";

import { motion } from "framer-motion";

const sponsorTiers = [
  {
    tier: "Gold Partners",
    color: "#d4a836",
    sponsors: [
      { name: "SpeedTech Industries", tagline: "Performance Engineering" },
      { name: "CarbonForge", tagline: "Advanced Composites" },
      { name: "RaceSpec Motors", tagline: "Powertrain Solutions" },
    ],
  },
  {
    tier: "Silver Partners",
    color: "#c0c0c0",
    sponsors: [
      { name: "AeroFlow Dynamics", tagline: "CFD Solutions" },
      { name: "TechWeld Pro", tagline: "Precision Fabrication" },
      { name: "DataDrive Systems", tagline: "Telemetry & DAQ" },
      { name: "PrecisionCNC", tagline: "CNC Machining" },
    ],
  },
  {
    tier: "Bronze Partners",
    color: "#cd7f32",
    sponsors: [
      { name: "BoltForce", tagline: "Fastener Systems" },
      { name: "PaintCraft", tagline: "Automotive Finishing" },
      { name: "MetalWorks India", tagline: "Raw Materials" },
      { name: "GripMax Tires", tagline: "Racing Compound" },
      { name: "FluidTech", tagline: "Hydraulics" },
    ],
  },
  {
    tier: "Technical Partners",
    color: "#00d4ff",
    sponsors: [
      { name: "SolidWorks", tagline: "CAD Software" },
      { name: "ANSYS", tagline: "Simulation" },
      { name: "Altium", tagline: "PCB Design" },
      { name: "MATLAB", tagline: "Data Analysis" },
    ],
  },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-vulcan-black via-carbon to-vulcan-black" />
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container-racing relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle mb-4 block">Our Partners</span>
          <h2 className="section-title racing-line racing-line-center pb-4 mb-6">
            SPON<span className="gradient-text-red">SORS</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/50">
            Our partners fuel our ambitions. From materials to software, their support
            transforms engineering dreams into racing reality.
          </p>
        </motion.div>

        {/* Sponsor Tiers */}
        {sponsorTiers.map((tier, ti) => (
          <motion.div
            key={tier.tier}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ti * 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: tier.color }}
              />
              <h3
                className="font-racing text-sm font-bold tracking-[0.2em] uppercase"
                style={{ color: tier.color }}
              >
                {tier.tier}
              </h3>
              <div className="flex-1 h-px bg-white/[0.05]" />
            </div>

            <div className={`grid gap-4 ${
              ti === 0
                ? "grid-cols-1 sm:grid-cols-3"
                : ti === 1
                ? "grid-cols-2 sm:grid-cols-4"
                : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
            }`}>
              {tier.sponsors.map((sponsor, si) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: si * 0.05 }}
                  className="glass-card rounded-xl p-5 text-center group"
                >
                  {/* Logo placeholder */}
                  <div
                    className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${tier.color}15, ${tier.color}05)`,
                      border: `1px solid ${tier.color}20`,
                    }}
                  >
                    <span
                      className="font-racing text-xl font-black"
                      style={{ color: tier.color }}
                    >
                      {sponsor.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-racing text-xs font-bold tracking-wider text-white/80 mb-1">
                    {sponsor.name}
                  </h4>
                  <p className="text-[0.6rem] text-white/30 tracking-wider uppercase">
                    {sponsor.tagline}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Marquee */}
        <div className="mt-16 marquee-container py-4 border-y border-white/[0.05]">
          {/* Item padding, not gap: gap makes the -50% loop point land mid-gap and jump */}
          <div className="marquee-content items-center">
            {[...sponsorTiers.flatMap((t) => t.sponsors), ...sponsorTiers.flatMap((t) => t.sponsors)].map(
              (s, i) => (
                <span
                  key={`${s.name}-${i}`}
                  className="px-6 font-racing text-sm tracking-[0.15em] text-white/15 uppercase whitespace-nowrap"
                >
                  {s.name}
                </span>
              )
            )}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="font-racing text-xl font-bold tracking-wider mb-4">
            BECOME A <span className="gradient-text-red">PARTNER</span>
          </h3>
          <p className="text-white/40 text-sm mb-6 max-w-lg mx-auto">
            Join our network of industry leaders supporting the next generation
            of motorsport engineers.
          </p>
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            Partner With Vulcan Racing
          </button>
        </motion.div>
      </div>
    </section>
  );
}
