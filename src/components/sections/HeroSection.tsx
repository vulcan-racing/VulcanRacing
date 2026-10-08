"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    image: "/hero-car.png",
    subtitle: "DSATM Formula Student Team",
    title: "ENGINEERING SPEED.",
    title2: "BUILDING LEGACIES.",
    highlight: "FORMULA BHARAT 2026 COMPETITOR",
  },
  {
    image: "/team-workshop.png",
    subtitle: "DSATM Formula Student Team",
    title: "DESIGNED TO WIN.",
    title2: "BUILT TO ENDURE.",
    highlight: "60+ PASSIONATE STUDENT ENGINEERS",
  },
  {
    image: "/gallery-testing.png",
    subtitle: "DSATM Formula Student Team",
    title: "TRACK TESTED.",
    title2: "DRIVER APPROVED.",
    highlight: "INNOVATION IN EVERY SUBSYSTEM",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Re-armed on every slide change, so manual navigation gets a full 6s too
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-vulcan-black via-vulcan-dark to-vulcan-black" />

      {/* Dynamic Background Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt="Formula Student"
              fill
              sizes="100vw"
              className="object-cover opacity-35"
              preload
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-vulcan-black via-vulcan-black/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-vulcan-black/80 via-transparent to-vulcan-black/80" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-5" />

      {/* Slide Navigation Arrows */}
      <div className="absolute inset-x-4 md:inset-x-12 top-1/2 -translate-y-1/2 z-20 flex justify-between pointer-events-none">
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + slides.length) % slides.length
            )
          }
          className="w-12 h-12 rounded-full border border-white/10 glass flex items-center justify-center text-white/50 hover:text-racing-red hover:border-racing-red/30 transition-all pointer-events-auto"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="w-12 h-12 rounded-full border border-white/10 glass flex items-center justify-center text-white/50 hover:text-racing-red hover:border-racing-red/30 transition-all pointer-events-auto"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-racing text-center px-4 max-w-4xl">
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-4"
        >
          <span className="section-subtitle inline-flex items-center gap-2">
            <span className="w-8 h-px bg-racing-red" />
            {slides[currentSlide].subtitle}
            <span className="w-8 h-px bg-racing-red" />
          </span>
        </motion.div>

        {/* Main Headline */}
        <div className="h-[210px] sm:h-[240px] md:h-[290px] lg:h-[340px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-racing font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.05em] leading-[0.95]"
            >
              <span className="gradient-text block">
                {slides[currentSlide].title}
              </span>
              <span className="gradient-text-red block mt-2">
                {slides[currentSlide].title2}
              </span>
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Highlight Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 mb-8"
        >
          <span className="px-4 py-2 rounded-full border border-racing-red/20 bg-racing-red/5 font-racing text-xs font-semibold tracking-[0.2em] text-racing-red uppercase">
            {slides[currentSlide].highlight}
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button onClick={() => scrollTo("#about")} className="btn-primary">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Explore Team
          </button>
          <button onClick={() => scrollTo("#car")} className="btn-secondary">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            View Cars
          </button>
          <button
            onClick={() => scrollTo("#recruitment")}
            className="btn-outline-orange"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            Join Us
          </button>
        </motion.div>
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-racing-red w-6"
                : "bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.5rem] font-racing tracking-[0.4em] text-white/30 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-racing-red" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-vulcan-black to-transparent" />
    </section>
  );
}
