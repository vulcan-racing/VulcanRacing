"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const carsList = [
  {
    id: "vlr-03",
    name: "VLR-03",
    year: "2025",
    tagline: "Peak Aero & Electronic Integration",
    bgImage: "/car-showcase.png",
    quickSpecs: "KTM 390 Engine • Carbon Fiber Aero Kit • 210 kg Weight",
    specs: [
      {
        category: "Powertrain",
        stats: [
          { label: "Engine", value: "KTM 390cc Single Cylinder" },
          { label: "Power Output", value: "43 HP @ 9,500 RPM" },
          { label: "Torque", value: "37 Nm @ 7,000 RPM" },
          { label: "Transmission", value: "6-Speed Sequential" },
        ],
      },
      {
        category: "Aerodynamics",
        stats: [
          { label: "Downforce", value: "350N @ 60 kph" },
          { label: "Aero Elements", value: "Multi-Element Carbon Front & Rear" },
          { label: "Drag Coefficient", value: "Cd 0.45" },
          { label: "DRS System", value: "Active Dual-Flap DRS" },
        ],
      },
      {
        category: "Chassis & Bodywork",
        stats: [
          { label: "Frame Type", value: "Tubular Space Frame" },
          { label: "Material", value: "AISI 4130 Chromoly Steel" },
          { label: "Frame Weight", value: "32 kg" },
          { label: "Rigidity", value: "2420 Nm/degree" },
        ],
      },
      {
        category: "Suspension & Steering",
        stats: [
          { label: "Front Suspension", value: "Double Wishbone, Pullrod Actuated" },
          { label: "Rear Suspension", value: "Double Wishbone, Pushrod Actuated" },
          { label: "Dampers", value: "Ohlins TTX25 Double Adjustable" },
          { label: "Steering", value: "Custom Anti-Ackermann Rack & Pinion" },
        ],
      },
      {
        category: "Electronics",
        stats: [
          { label: "ECU System", value: "Haltech Elite 2500" },
          { label: "Telemetry", value: "RF LoRa Live Link" },
          { label: "Dashboard", value: "Nextion 4.3\" LCD Dash" },
          { label: "Sensors", value: "16-Channel DAQ" },
        ],
      },
    ],
  },
  {
    id: "vlr-02",
    name: "VLR-02",
    year: "2023",
    tagline: "Our First Complete Aerodynamic Package",
    bgImage: "/gallery-aero.png",
    quickSpecs: "KTM 390 Engine • FRP Aero Elements • 230 kg Weight",
    specs: [
      {
        category: "Powertrain",
        stats: [
          { label: "Engine", value: "KTM 390cc Single Cylinder" },
          { label: "Power Output", value: "40 HP @ 9,000 RPM" },
          { label: "Torque", value: "35 Nm @ 7,000 RPM" },
          { label: "Transmission", value: "6-Speed Manual" },
        ],
      },
      {
        category: "Aerodynamics",
        stats: [
          { label: "Downforce", value: "180N @ 60 kph" },
          { label: "Aero Elements", value: "Single-Element FRP Front & Rear" },
          { label: "Drag Coefficient", value: "Cd 0.52" },
          { label: "DRS System", value: "Not Equipped" },
        ],
      },
      {
        category: "Chassis & Bodywork",
        stats: [
          { label: "Frame Type", value: "Tubular Space Frame" },
          { label: "Material", value: "Carbon Structural Steel" },
          { label: "Frame Weight", value: "36.5 kg" },
          { label: "Rigidity", value: "2000 Nm/degree" },
        ],
      },
      {
        category: "Suspension & Steering",
        stats: [
          { label: "Front Suspension", value: "Double Wishbone, Pushrod Actuated" },
          { label: "Rear Suspension", value: "Double Wishbone, Pushrod Actuated" },
          { label: "Dampers", value: "Custom Pressurized Gas Coilovers" },
          { label: "Steering", value: "Ackermann Geometry Rack" },
        ],
      },
      {
        category: "Electronics",
        stats: [
          { label: "ECU System", value: "Custom Mapped Stock ECU" },
          { label: "Telemetry", value: "SD Card Logging" },
          { label: "Dashboard", value: "LED Tachometer Array" },
          { label: "Sensors", value: "8-Channel Log" },
        ],
      },
    ],
  },
  {
    id: "vlr-01",
    name: "VLR-01",
    year: "2021",
    tagline: "The Foundational Machine",
    bgImage: "/hero-car.png",
    quickSpecs: "KTM 390 Engine • Naked Chassis Layout • 250 kg Weight",
    specs: [
      {
        category: "Powertrain",
        stats: [
          { label: "Engine", value: "KTM 390cc Single Cylinder" },
          { label: "Power Output", value: "38 HP @ 8,800 RPM" },
          { label: "Torque", value: "33 Nm @ 6,800 RPM" },
          { label: "Transmission", value: "6-Speed Manual" },
        ],
      },
      {
        category: "Aerodynamics",
        stats: [
          { label: "Downforce", value: "Negligible" },
          { label: "Aero Elements", value: "None (Naked Chassis)" },
          { label: "Drag Coefficient", value: "Cd 0.65" },
          { label: "DRS System", value: "Not Equipped" },
        ],
      },
      {
        category: "Chassis & Bodywork",
        stats: [
          { label: "Frame Type", value: "Tubular Space Frame" },
          { label: "Material", value: "Structural Mild Steel" },
          { label: "Frame Weight", value: "41 kg" },
          { label: "Rigidity", value: "1650 Nm/degree" },
        ],
      },
      {
        category: "Suspension & Steering",
        stats: [
          { label: "Front Suspension", value: "Double Wishbone, Direct Acting" },
          { label: "Rear Suspension", value: "Double Wishbone, Direct Acting" },
          { label: "Dampers", value: "Standard Coilover shocks" },
          { label: "Steering", value: "Standard Go-Kart Style Rack" },
        ],
      },
      {
        category: "Electronics",
        stats: [
          { label: "ECU System", value: "Stock KTM Harness" },
          { label: "Telemetry", value: "None" },
          { label: "Dashboard", value: "Stock Instrument Cluster" },
          { label: "Sensors", value: "None" },
        ],
      },
    ],
  },
];

export default function CarSection() {
  const [selectedCar, setSelectedCar] = useState<typeof carsList[0] | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="car" className="relative section-padding overflow-hidden bg-black">
      {/* Background */}
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
          <span className="section-subtitle mb-4 block">Our Engineering History</span>
          <h2 className="section-title racing-line racing-line-center pb-4 mb-6">
            OUR <span className="gradient-text-red">CARS</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/50">
            A lineage of speed, weight reduction, and precision. Explore our vehicle builds spanning from the foundational VLR-01 to the highly optimized VLR-03.
          </p>
        </motion.div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {carsList.map((car, i) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              onClick={() => {
                setSelectedCar(car);
                setActiveTab(0);
              }}
              className="group relative h-[380px] rounded-2xl overflow-hidden border border-white/5 cursor-pointer shadow-lg hover:shadow-racing-red/10 transition-all duration-300"
            >
              {/* Car Image background */}
              <Image
                src={car.bgImage}
                alt={car.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
              />

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

              {/* Gold border hover effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-racing-red/40 rounded-2xl transition-all duration-300 pointer-events-none" />

              {/* Text content */}
              <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end h-1/2">
                <span className="font-racing text-[0.65rem] tracking-[0.25em] text-racing-red uppercase font-bold mb-1">
                  Season {car.year}
                </span>
                <h3 className="font-racing text-2xl font-black text-white group-hover:text-racing-red transition-colors mb-2">
                  {car.name}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed font-light mb-4">
                  {car.tagline}
                </p>
                <div className="h-px bg-white/10 w-full mb-3" />
                <span className="text-[0.6rem] font-racing tracking-[0.1em] text-white/40 uppercase group-hover:text-white transition-colors">
                  View Complete Specs ↗
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Specification Modal */}
      <AnimatePresence>
        {selectedCar && (
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
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[0.65rem] font-racing tracking-widest text-racing-red font-bold uppercase bg-racing-red/5 border border-racing-red/10 px-2 py-0.5 rounded">
                      Season {selectedCar.year}
                    </span>
                  </div>
                  <h3 className="font-racing text-2xl font-black text-white mt-1">
                    {selectedCar.name} SPECIFICATIONS
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCar(null)}
                  aria-label="Close"
                  className="text-white/40 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                {/* Sidebar tabs */}
                <div className="md:w-1/4 border-r border-white/5 bg-vulcan-black/30 p-4 overflow-y-auto space-y-1">
                  {selectedCar.specs.map((sec, idx) => (
                    <button
                      key={sec.category}
                      onClick={() => setActiveTab(idx)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-xs font-racing font-semibold tracking-wider uppercase transition-all duration-200 ${
                        activeTab === idx
                          ? "bg-racing-red/15 text-racing-red border-l-2 border-l-racing-red"
                          : "text-white/55 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {sec.category}
                    </button>
                  ))}
                </div>

                {/* Specs Data Grid */}
                <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-carbon/20">
                  <h4 className="font-racing text-lg font-bold text-white mb-6 uppercase tracking-wider pb-2 border-b border-white/5">
                    {selectedCar.specs[activeTab].category} details
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {selectedCar.specs[activeTab].stats.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex flex-col justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                      >
                        <span className="text-white/40 text-[0.65rem] font-racing tracking-widest uppercase mb-1">
                          {stat.label}
                        </span>
                        <span className="font-racing text-sm font-semibold text-white">
                          {stat.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Highlight image / note panel */}
                  <div className="mt-8 p-5 rounded-xl border border-white/5 bg-white/[0.01]">
                    <h5 className="font-racing text-[0.65rem] tracking-wider text-racing-red uppercase mb-2">
                      Engineering Note
                    </h5>
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      This specification was fully verified via dynamometer and multi-channel telemetry systems during our track testing. It conforms strictly to Formula Student technical guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
