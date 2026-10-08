"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // One timer per step, so the state updater stays pure and every timer is cleaned up
  useEffect(() => {
    if (progress >= 100) {
      const done = setTimeout(() => setLoading(false), 400);
      return () => clearTimeout(done);
    }
    const tick = setTimeout(
      () => setProgress((prev) => Math.min(prev + Math.random() * 15 + 5, 100)),
      100
    );
    return () => clearTimeout(tick);
  }, [progress]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-vulcan-black flex flex-col items-center justify-center"
        >
          {/* Animated Grid Background */}
          <div className="absolute inset-0 grid-pattern opacity-20" />

          {/* RPM Gauge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-40 h-40 mb-8"
          >
            <svg viewBox="0 0 160 160" className="w-full h-full">
              {/* Outer ring */}
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="2"
              />
              {/* Progress arc */}
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="url(#gaugeGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${(progress / 100) * 440} 440`}
                transform="rotate(-90 80 80)"
                className="transition-all duration-200"
              />
              {/* Tick marks */}
              {Array.from({ length: 12 }).map((_, i) => (
                <line
                  key={i}
                  x1="80"
                  y1="15"
                  x2="80"
                  y2="22"
                  stroke={
                    i <= (progress / 100) * 12
                      ? "#d4a836"
                      : "rgba(255,255,255,0.1)"
                  }
                  strokeWidth="2"
                  transform={`rotate(${i * 30} 80 80)`}
                />
              ))}
              <defs>
                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d4a836" />
                  <stop offset="100%" stopColor="#ffcc00" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-racing text-3xl font-black text-white">
                {Math.min(Math.round(progress), 100)}
              </span>
              <span className="font-racing text-[0.5rem] tracking-[0.3em] text-white/40 uppercase">
                RPM x1000
              </span>
            </div>
          </motion.div>

          {/* Team Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h1 className="font-racing text-2xl md:text-3xl font-black tracking-[0.2em] mb-2">
              <span className="text-white">VULCAN</span>{" "}
              <span className="text-racing-red">RACING</span>
            </h1>
            <p className="font-racing text-[0.6rem] tracking-[0.4em] text-white/30 uppercase">
              Initializing Systems
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="mt-8 w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full gradient-red rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
