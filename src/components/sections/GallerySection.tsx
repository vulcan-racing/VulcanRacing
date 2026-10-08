"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Car Design", "Manufacturing", "Team", "Testing", "Competition", "Workshops"];

const galleryItems = [
  { src: "/car-showcase.png", category: "Car Design", caption: "VR-01 Final Livery Design" },
  { src: "/team-workshop.png", category: "Manufacturing", caption: "Chassis Welding in Progress" },
  { src: "/hero-car.png", category: "Car Design", caption: "On-Track Action Shot" },
  { src: "/gallery-aero.png", category: "Car Design", caption: "Front Wing Aerodynamic Detail" },
  { src: "/gallery-testing.png", category: "Testing", caption: "Shakedown Run at Test Track" },
  { src: "/hero-car.png", category: "Competition", caption: "Formula Bharat Technical Inspection" },
  { src: "/team-workshop.png", category: "Workshops", caption: "CAD Workshop for New Recruits" },
  { src: "/gallery-aero.png", category: "Manufacturing", caption: "CNC Machined Uprights" },
  { src: "/gallery-testing.png", category: "Testing", caption: "Suspension Travel Test" },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-vulcan-black via-carbon/30 to-vulcan-black" />

      <div className="container-racing relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-subtitle mb-4 block">Behind the Scenes</span>
          <h2 className="section-title racing-line racing-line-center pb-4 mb-6">
            GAL<span className="gradient-text-red">LERY</span>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-racing tracking-wider uppercase transition-all duration-300 ${
                activeFilter === cat
                  ? "gradient-red text-white"
                  : "glass text-white/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.caption}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-xl"
                onClick={() => setSelectedImage(i)}
              >
                <div className={`relative ${i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-vulcan-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[0.6rem] font-racing tracking-[0.2em] text-racing-red uppercase">
                      {item.category}
                    </span>
                    <p className="text-white text-sm font-medium mt-1">
                      {item.caption}
                    </p>
                  </div>
                  {/* Zoom icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-vulcan-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full aspect-video rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[selectedImage]?.src || "/hero-car.png"}
                alt={filtered[selectedImage]?.caption || "Gallery image"}
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-vulcan-black/90 to-transparent">
                <p className="font-racing text-sm tracking-wider text-white">
                  {filtered[selectedImage]?.caption}
                </p>
              </div>
            </motion.div>

            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
              className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-racing-red transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Nav arrows */}
            {selectedImage > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage - 1); }}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-racing-red transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {selectedImage < filtered.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage + 1); }}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-racing-red transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
