"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCounter from "../AnimatedCounter";

const timeline = [
  { year: "2019", title: "Foundation", desc: "Vulcan Racing was founded at DSATM with a vision to compete in Formula Student." },
  { year: "2020", title: "First Design", desc: "Completed our first CAD model and began manufacturing feasibility studies." },
  { year: "2021", title: "Build Phase", desc: "Workshop setup, chassis fabrication, and subsystem integration began." },
  { year: "2022", title: "Testing", desc: "First vehicle testing, data acquisition, and iterative design improvements." },
  { year: "2023", title: "Formula Bharat", desc: "Competed in Formula Bharat, completing technical inspections and dynamic events." },
  { year: "2024", title: "Evolution", desc: "Next-generation vehicle design with improved aerodynamics and powertrain." },
];

const stats = [
  { end: 50, suffix: "+", label: "Team Members", icon: <UsersIcon /> },
  { end: 6, label: "Departments", icon: <GridIcon /> },
  { end: 3, suffix: "+", label: "Competitions", icon: <TrophyIcon /> },
  { end: 10, suffix: "+", label: "Sponsors", icon: <StarIcon /> },
  { end: 5, suffix: "+", label: "Awards", icon: <MedalIcon /> },
];

function UsersIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3h14l-1.405 8.426A5 5 0 0112.63 16h-.26a5 5 0 01-4.965-4.574L6 3zM12 16v4m-4 0h8M7 3V1m10 2V1" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

function MedalIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative section-padding carbon-fiber-subtle">
      <div className="container-racing">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle mb-4 block">About Us</span>
          <h2 className="section-title racing-line racing-line-center pb-4 mb-6">
            WHO WE <span className="gradient-text-red">ARE</span>
          </h2>
          <p className="max-w-3xl mx-auto text-white/50 leading-relaxed">
            Vulcan Racing is more than a team, we are a collective of passionate
            engineers, designers, and innovators from DSATM, Bangalore, united by our
            drive to push the boundaries of automotive engineering in Formula Student
            competitions.
          </p>
        </motion.div>

        {/* Two column presentation inspired by Bullz Racing */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10 group"
          >
            <Image
              src="/team-workshop.png"
              alt="Vulcan Racing Team Workshop"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-[0.65rem] font-racing tracking-[0.25em] text-racing-red uppercase">
                DSATM Workshop
              </span>
              <h3 className="font-racing text-xl font-bold mt-1 text-white">
                Engineering The Future
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-racing text-2xl font-bold tracking-wider">
              DRIVEN BY PASSION, SPEED & INNOVATION
            </h3>
            <p className="text-white/50 leading-relaxed text-sm">
              Founded at Dayananda Sagar Academy of Technology and Management, our team is structured like a professional racing crew. With specialized departments ranging from Powertrain and Aerodynamics to Marketing and Operations, every member plays a vital role in our journey.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass-card rounded-xl p-5 border-l-2 border-l-racing-red">
                <span className="block font-racing text-3xl font-black text-white">
                  80+
                </span>
                <span className="text-xs text-white/40 font-racing tracking-wider uppercase mt-1 block">
                  Team Members
                </span>
              </div>
              <div className="glass-card rounded-xl p-5 border-l-2 border-l-racing-red">
                <span className="block font-racing text-3xl font-black text-white">
                  3
                </span>
                <span className="text-xs text-white/40 font-racing tracking-wider uppercase mt-1 block">
                  Completed Cars
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-red flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-racing text-xl font-bold tracking-wider">MISSION</h3>
            </div>
            <p className="text-white/50 leading-relaxed">
              To design, engineer, and race a competitive formula-style vehicle that
              demonstrates technical excellence, innovation, and teamwork while
              fostering the next generation of automotive engineers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-red flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-racing text-xl font-bold tracking-wider">VISION</h3>
            </div>
            <p className="text-white/50 leading-relaxed">
              To become a top-tier Formula Student team in India, recognized for
              engineering innovation, competitive performance, and developing
              industry-ready professionals in motorsport engineering.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-racing text-xl font-bold tracking-wider text-center mb-12">
            OUR <span className="text-racing-red">JOURNEY</span>
          </h3>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-racing-red via-neon-orange to-transparent" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0
                    ? "md:flex-row md:text-right"
                    : "md:flex-row-reverse md:text-left"
                  }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-racing-red border-2 border-vulcan-black z-10 mt-1.5">
                  <div className="absolute inset-0 rounded-full bg-racing-red animate-ping opacity-30" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <span className="font-racing text-sm text-racing-red font-bold">
                    {item.year}
                  </span>
                  <h4 className="font-racing text-lg font-bold mt-1">{item.title}</h4>
                  <p className="text-white/40 text-sm mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
