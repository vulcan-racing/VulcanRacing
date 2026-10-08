"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const blogs = [
  {
    id: "chassis-fea",
    title: "Chassis FEA: Minimizing Weight, Maximizing Rigidity",
    category: "Mechanical Design",
    date: "May 14, 2025",
    author: "Mechanical Department",
    excerpt: "How our design team utilized ANSYS structural simulations to shave 4.5kg off the tubular space frame while keeping torsional rigidity at 2400 Nm/deg.",
    content: `
      Design optimization in Formula Student is a balance between safety, reliability, and weight reduction. For the chassis of VLR-03, our goal was to maintain a torsional rigidity of at least 2400 Nm/deg while minimizing structural weight.
      
      We utilized AISI 4130 Chromoly steel tubing for its high strength-to-weight ratio and excellent weldability. The base layout was designed in SOLIDWORKS and imported into ANSYS Mechanical for Finite Element Analysis (FEA).
      
      ### The Simulation Setup
      To accurately model track forces, we applied three main load cases:
      1. **Torsional Load Case**: Simulating diagonal suspension loads. One shock tower was fixed while a torque was applied to the opposite axle through the suspension mounting brackets.
      2. **Tri-Axial Bump Load Case**: Simulating a peak 3G vertical bump impact on the suspension corners.
      3. **Braking and Acceleration Load Case**: Evaluating longitudinal force transfers during peak decelerations.
      
      ### Iterative Optimization
      By identifying areas of low stress, we reduced the wall thickness of specific bracing members from 1.6mm to 1.2mm. We also relocated the cockpit side impact structures to maximize the triangulated volume without compromising driver safety envelopes.
      
      ### Results
      - **Torsional Rigidity achieved**: 2420 Nm/deg
      - **Chassis weight**: Reduced from 36.5 kg to 32.0 kg
      - **Factor of Safety**: Exceeded 2.0 in all critical load zones
    `
  },
  {
    id: "live-telemetry",
    title: "Developing VLR Live Telemetry Systems",
    category: "Electronics",
    date: "June 20, 2025",
    author: "Electronics Department",
    excerpt: "An inside look at our customized real-time data acquisition system using low-latency MQTT brokers, Node-RED, and active dashboard interfaces.",
    content: `
      Real-time data is a game-changer on the track. During dynamic tests, drivers focus on racing, while trackside engineers need immediate visibility into system parameters to prevent engine failures and optimize damper setups.
      
      For VLR-03, we built an end-to-end custom telemetry system running alongside our Haltech Elite 2500 ECU.
      
      ### System Architecture
      1. **Sensors & DAQ**: Sensors capture suspension travel (potentiometers), brake pressures, wheel speeds (inductive sensors), and engine temperatures. These feed into a microcontroller board.
      2. **On-Board Transmitter**: A Raspberry Pi zero handles data serialization and transmits packets via a high-range RF LoRa transmitter.
      3. **Trackside Receiver**: The receiver interfaces with a laptop acting as a gateway, pushing data to a local MQTT broker.
      4. **Data Visualisation**: The Node-RED interface visualizes live parameters such as engine RPM, temperatures, and dynamic G-forces.
      
      ### Real-World Application
      During initial test runs, our live temperature alert flagged a cooling system pressure leak when engine coolant spiked to 108°C. The dashboard alerted the crew, allowing them to flag the driver back to the pitlane before critical engine block damage occurred.
      
      Our next step is integrating machine learning predictive models to suggest damper adjustments based on real-time suspension frequency graphs.
    `
  }
];

const newsletters = [
  {
    volume: "Volume 4",
    title: "Spring 2026 Edition",
    date: "April 2026",
    link: "#",
    desc: "A look at the final assembly phase of VLR-03, sponsor integrations, and upcoming track testing schedules."
  },
  {
    volume: "Volume 3",
    title: "Winter 2025 Edition",
    date: "December 2025",
    link: "#",
    desc: "Unveiling the aerodynamics mockups, composite layups, and powertrain dyno test results."
  },
  {
    volume: "Volume 2",
    title: "Autumn 2025 Edition",
    date: "September 2025",
    link: "#",
    desc: "Highlights from the chassis fabrication workshop, welder certification, and driver training camp."
  }
];

const updates = [
  {
    title: "VLR-03 Engine Dyno Test Successful",
    date: "June 18, 2026",
    desc: "Our powertrain department completed the final tuning phase of the KTM 390 engine, optimizing fuel mapping for 97 Octane fuel and achieving 43 HP at the wheels."
  },
  {
    title: "Carbon Fiber Aero Layup Completed",
    date: "June 05, 2026",
    desc: "The composites department completed the wet layup process for our multi-element front wing and rear wing assemblies, achieving a weight reduction of 20% over last season's FRP components."
  },
  {
    title: "Driver Selection Complete",
    date: "May 28, 2026",
    desc: "After rigorous skidpad trials and physical endurance assessments, two primary and two backup drivers have been selected for the upcoming Formula Bharat event."
  }
];

// Renders the markdown subset used in blog content: "### " headings, "- " bullets, **bold**
function renderContent(text: string) {
  return text
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, i) =>
      line.startsWith("### ") ? (
        <h3 key={i} className="font-racing text-base font-bold text-white pt-2">
          {line.slice(4)}
        </h3>
      ) : (
        <p key={i}>
          {line
            .replace(/^- /, "• ")
            .split(/\*\*(.+?)\*\*/g)
            .map((part, j) =>
              j % 2 ? <strong key={j} className="font-semibold text-white">{part}</strong> : part
            )}
        </p>
      )
    );
}

export default function InsightsSection() {
  const [activeModal, setActiveModal] = useState<"blogs" | "newsletters" | "updates" | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<typeof blogs[0] | null>(null);

  const closeModal = () => {
    setActiveModal(null);
    setSelectedBlog(null);
  };

  return (
    <section id="insights" className="relative section-padding overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-vulcan-black via-carbon to-vulcan-black" />
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container-racing relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle mb-4 block">Our Perspective</span>
          <h2 className="section-title racing-line racing-line-center pb-4 mb-6">
            INSIGHTS
          </h2>
          <p className="max-w-2xl mx-auto text-white/50">
            Discover the engineering stories, technical progress, and team milestones behind Vulcan Racing.
          </p>
        </motion.div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Blogs Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl p-8 border border-white/5 flex flex-col justify-between cursor-pointer"
            onClick={() => setActiveModal("blogs")}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-racing-red/10 border border-racing-red/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-racing-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-racing text-xl font-bold mb-3 text-white">BLOGS</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                Deep dives into our engineering systems, CFD analyses, and tuning processes.
              </p>
            </div>
            <span className="text-xs font-racing font-semibold tracking-wider text-racing-red uppercase flex items-center gap-2">
              Explore Articles <span className="text-sm">→</span>
            </span>
          </motion.div>

          {/* Newsletters Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl p-8 border border-white/5 flex flex-col justify-between cursor-pointer"
            onClick={() => setActiveModal("newsletters")}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-racing-red/10 border border-racing-red/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-racing-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="font-racing text-xl font-bold mb-3 text-white">NEWSLETTERS</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                Quarterly chronicles detailing our testing sessions, workshop diaries, and sponsor profiles.
              </p>
            </div>
            <span className="text-xs font-racing font-semibold tracking-wider text-racing-red uppercase flex items-center gap-2">
              Read Editions <span className="text-sm">→</span>
            </span>
          </motion.div>

          {/* Updates Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl p-8 border border-white/5 flex flex-col justify-between cursor-pointer"
            onClick={() => setActiveModal("updates")}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-racing-red/10 border border-racing-red/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-racing-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="font-racing text-xl font-bold mb-3 text-white">UPDATES</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                Live workshop updates, design milestone announcements, and event highlights.
              </p>
            </div>
            <span className="text-xs font-racing font-semibold tracking-wider text-racing-red uppercase flex items-center gap-2">
              View Announcements <span className="text-sm">→</span>
            </span>
          </motion.div>
        </div>
      </div>

      {/* Modals Overlay */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass border border-white/10 rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5 bg-vulcan-black/50">
                <h3 className="font-racing text-xl font-bold tracking-wider text-racing-red uppercase">
                  {selectedBlog ? "Technical Article" : activeModal}
                </h3>
                <button
                  onClick={closeModal}
                  aria-label="Close"
                  className="text-white/40 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1">
                {/* 1. BLOGS TAB */}
                {activeModal === "blogs" && !selectedBlog && (
                  <div className="space-y-6">
                    {blogs.map((blog) => (
                      <div
                        key={blog.id}
                        onClick={() => setSelectedBlog(blog)}
                        className="glass-card rounded-xl p-6 border border-white/5 hover:border-racing-red/20 transition-all cursor-pointer group"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="text-[0.65rem] font-racing tracking-widest text-racing-red uppercase bg-racing-red/5 border border-racing-red/10 px-2 py-0.5 rounded">
                            {blog.category}
                          </span>
                          <span className="text-xs text-white/30">{blog.date}</span>
                        </div>
                        <h4 className="font-racing text-lg font-bold text-white group-hover:text-racing-red transition-colors mb-2">
                          {blog.title}
                        </h4>
                        <p className="text-white/50 text-sm leading-relaxed mb-4">
                          {blog.excerpt}
                        </p>
                        <span className="text-xs font-racing text-white/40 group-hover:text-white transition-colors flex items-center gap-1.5">
                          Read More <span className="text-sm">→</span>
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* 1.1 SINGLE BLOG POST VIEW */}
                {activeModal === "blogs" && selectedBlog && (
                  <article className="prose prose-invert max-w-none text-white/80 space-y-6">
                    <button
                      onClick={() => setSelectedBlog(null)}
                      className="text-xs font-racing text-racing-red hover:text-white flex items-center gap-1 mb-6 uppercase tracking-wider transition-colors"
                    >
                      ← Back to Articles list
                    </button>
                    <div>
                      <span className="text-[0.65rem] font-racing tracking-widest text-racing-red uppercase bg-racing-red/5 border border-racing-red/10 px-2.5 py-1 rounded">
                        {selectedBlog.category}
                      </span>
                      <h2 className="font-racing text-2xl md:text-3xl font-black text-white mt-4 mb-2">
                        {selectedBlog.title}
                      </h2>
                      <div className="flex items-center gap-4 text-xs text-white/40">
                        <span>By {selectedBlog.author}</span>
                        <span>•</span>
                        <span>{selectedBlog.date}</span>
                      </div>
                    </div>
                    <div className="border-t border-white/5 pt-6 text-white/70 leading-relaxed space-y-4 text-sm">
                      {renderContent(selectedBlog.content)}
                    </div>
                  </article>
                )}

                {/* 2. NEWSLETTERS TAB */}
                {activeModal === "newsletters" && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {newsletters.map((letter) => (
                      <div
                        key={letter.volume}
                        className="glass-card rounded-xl p-6 border border-white/5 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="font-racing text-xs text-racing-red font-bold tracking-widest uppercase">
                              {letter.volume}
                            </span>
                            <span className="text-xs text-white/30">{letter.date}</span>
                          </div>
                          <h4 className="font-racing text-base font-bold text-white mb-2">
                            {letter.title}
                          </h4>
                          <p className="text-white/50 text-xs leading-relaxed mb-6">
                            {letter.desc}
                          </p>
                        </div>
                        <a
                          href={letter.link}
                          className="btn-secondary w-full justify-center !text-[0.7rem] !py-2.5 text-center"
                          onClick={(e) => {
                            e.preventDefault();
                            alert("Opening newsletter flipbook... (Heyzine simulation)");
                          }}
                        >
                          View Newsletter Flipbook
                        </a>
                      </div>
                    ))}
                  </div>
                )}

                {/* 3. UPDATES TAB */}
                {activeModal === "updates" && (
                  <div className="space-y-6">
                    {updates.map((update, index) => (
                      <div
                        key={index}
                        className="glass-card rounded-xl p-6 border border-white/5 flex items-start gap-4"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-racing-red animate-pulse mt-2 shrink-0" />
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-racing text-base font-bold text-white">
                              {update.title}
                            </h4>
                            <span className="text-[0.65rem] text-white/30 whitespace-nowrap">
                              {update.date}
                            </span>
                          </div>
                          <p className="text-white/50 text-sm leading-relaxed">
                            {update.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
